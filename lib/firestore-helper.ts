import { 
  collection, 
  getDocs, 
  query, 
  where, 
  setDoc, 
  deleteDoc, 
  doc, 
  orderBy, 
  getDocFromServer,
  Timestamp
} from "firebase/firestore";
import { db, auth } from "./firebase.ts";

export enum OperationType {
  CREATE = "create",
  UPDATE = "update",
  DELETE = "delete",
  LIST = "list",
  GET = "get",
  WRITE = "write",
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid || null,
      email: auth.currentUser?.email || null,
      emailVerified: auth.currentUser?.emailVerified || null,
      isAnonymous: auth.currentUser?.isAnonymous || null,
      tenantId: auth.currentUser?.tenantId || null,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error("Firestore Error Exception: ", JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Critical Constraint: Test connection on boot using getFromServer
export async function validateFirestoreConnection(): Promise<boolean> {
  const path = "test/connection";
  try {
    await getDocFromServer(doc(db, "test", "connection"));
    return true;
  } catch (error: any) {
    if (error instanceof Error && error.message.includes("the client is offline")) {
      console.warn("Firestore validation failed: client is offline.");
    }
    // We suppress throwing a blocking error if it's just unauthenticated testing path check
    return false;
  }
}

export interface PipelineData {
  id: string;
  userId: string;
  name: string;
  nodes: any[];
  connections: any[];
  createdAt: any;
  updatedAt: any;
}

// Save pipeline to Firestore (create or update)
export async function savePipelineToCloud(pipeline: Omit<PipelineData, "createdAt" | "updatedAt"> & { createdAt?: any }) {
  const path = `pipelines/${pipeline.id}`;
  try {
    const pipelineDocRef = doc(db, "pipelines", pipeline.id);
    const now = Timestamp.now();
    
    const payload = {
      userId: pipeline.userId,
      name: pipeline.name,
      nodes: pipeline.nodes,
      connections: pipeline.connections,
      updatedAt: now,
      createdAt: pipeline.createdAt ? Timestamp.fromDate(new Date(pipeline.createdAt)) : now,
    };

    await setDoc(pipelineDocRef, payload, { merge: true });
    return { ...payload, createdAt: payload.createdAt.toDate().toISOString(), updatedAt: payload.updatedAt.toDate().toISOString() };
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

// Load user's pipelines
export async function loadUserPipelines(userId: string): Promise<PipelineData[]> {
  const path = "pipelines";
  try {
    const q = query(
      collection(db, "pipelines"),
      where("userId", "==", userId),
      orderBy("updatedAt", "desc")
    );
    const snapshot = await getDocs(q);
    const results: PipelineData[] = [];
    
    snapshot.forEach((docSnapshot) => {
      const data = docSnapshot.data();
      results.push({
        id: docSnapshot.id,
        userId: data.userId,
        name: data.name,
        nodes: data.nodes || [],
        connections: data.connections || [],
        createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate().toISOString() : data.createdAt,
        updatedAt: data.updatedAt instanceof Timestamp ? data.updatedAt.toDate().toISOString() : data.updatedAt,
      });
    });
    
    return results;
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, path);
    return [];
  }
}

// Delete user's pipeline
export async function deletePipelineFromCloud(pipelineId: string) {
  const path = `pipelines/${pipelineId}`;
  try {
    const docRef = doc(db, "pipelines", pipelineId);
    await deleteDoc(docRef);
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}
