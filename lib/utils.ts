import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImpureNodeId(): string {
  if (typeof window !== "undefined") {
    return `node-${Date.now()}`;
  }
  return "node-server";
}

export function getImpureCoordinates() {
  return {
    x: 100 + Math.floor(Math.random() * 120),
    y: 80 + Math.floor(Math.random() * 80)
  };
}
