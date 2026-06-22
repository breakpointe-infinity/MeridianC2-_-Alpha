export interface PickerFile {
  id: string;
  name: string;
  mimeType: string;
  url: string;
  serviceId: string;
}

let scriptsLoadingPromise: Promise<void> | null = null;

export function loadGooglePickerScripts(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (scriptsLoadingPromise) {
    return scriptsLoadingPromise;
  }

  scriptsLoadingPromise = new Promise((resolve) => {
    const isGapiLoaded = () => !!(window as any).gapi;
    const isGooglePickerLoaded = () => !!(window as any).google?.picker;

    if (isGapiLoaded() && isGooglePickerLoaded()) {
      resolve();
      return;
    }

    let gapiLoaded = false;
    let gisLoaded = false;

    const checkComplete = () => {
      if (gapiLoaded && gisLoaded) {
        resolve();
      }
    };

    // Load gapi script
    const gapiScript = document.createElement("script");
    gapiScript.src = "https://apis.google.com/js/api.js";
    gapiScript.async = true;
    gapiScript.defer = true;
    gapiScript.onload = () => {
      (window as any).gapi.load("picker", {
        callback: () => {
          gapiLoaded = true;
          checkComplete();
        }
      });
    };
    document.body.appendChild(gapiScript);

    // Load GIS script
    const gisScript = document.createElement("script");
    gisScript.src = "https://accounts.google.com/gsi/client";
    gisScript.async = true;
    gisScript.defer = true;
    gisScript.onload = () => {
      gisLoaded = true;
      checkComplete();
    };
    document.body.appendChild(gisScript);
  });

  return scriptsLoadingPromise;
}

export function launchGooglePicker(accessToken: string, onFileSelected: (file: PickerFile) => void) {
  if (typeof window === "undefined") return;

  const google = (window as any).google;
  if (!google || !google.picker) {
    console.error("Google Picker API is not fully loaded. Trigger loadGooglePickerScripts first.");
    return;
  }

  // Handle iframe or sandbox origin safely
  const pickerOrigin =
    window.location.ancestorOrigins &&
    window.location.ancestorOrigins.length > 0
      ? window.location.ancestorOrigins[window.location.ancestorOrigins.length - 1]
      : window.location.origin;

  try {
    const docsView = new google.picker.DocsView(google.picker.ViewId.DOCS)
      .setIncludeFolders(true)
      .setSelectFolderEnabled(true);

    const picker = new google.picker.PickerBuilder()
      .addView(docsView)
      .setOAuthToken(accessToken)
      .setCallback((data: any) => {
        if (data.action === google.picker.Action.PICKED) {
          const pickedFile = data.docs[0];
          onFileSelected({
            id: pickedFile.id,
            name: pickedFile.name,
            mimeType: pickedFile.mimeType,
            url: pickedFile.url,
            serviceId: pickedFile.serviceId || ""
          });
        }
      })
      .setOrigin(pickerOrigin)
      .build();

    picker.setVisible(true);
  } catch (error) {
    console.error("Failed to build or launch Google Picker:", error);
  }
}
