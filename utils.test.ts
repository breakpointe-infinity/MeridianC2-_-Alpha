import { describe, it, expect, afterEach } from "vitest";
import { getImpureNodeId, getImpureCoordinates, cn } from "./lib/utils";

describe("cn helper function", () => {
  it("should merge string classes cleanly", () => {
    const result = cn("text-red-500", "bg-black");
    expect(result).toContain("text-red-500");
    expect(result).toContain("bg-black");
  });

  it("should handle conditional classes correctly", () => {
    const isActive = true;
    const isTeal = false;
    const result = cn("p-4", isActive && "active", isTeal ? "text-teal" : "text-blue");
    expect(result).toContain("p-4");
    expect(result).toContain("active");
    expect(result).toContain("text-blue");
    expect(result).not.toContain("text-teal");
  });
});

describe("getImpureNodeId helper function", () => {
  const originalWindow = typeof window !== "undefined" ? window : undefined;

  afterEach(() => {
    // Restore clean environment state after each test
    if (originalWindow !== undefined) {
      global.window = originalWindow;
    } else {
      // @ts-ignore
      delete global.window;
    }
  });

  it("should return node-server when window is undefined (Node.js/SSR environment)", () => {
    // Ensure window is undefined for the test duration
    // @ts-ignore
    delete global.window;

    const result = getImpureNodeId();
    expect(result).toBe("node-server");
  });

  it("should return a dynamic timestamped node ID when window is defined (browser environment)", () => {
    // Mock window environment
    // @ts-ignore
    global.window = {} as any;

    const result = getImpureNodeId();
    expect(result).toMatch(/^node-\d+$/);
  });
});

describe("getImpureCoordinates helper function", () => {
  it("should return valid coordinates within set architectural boundaries", () => {
    for (let i = 0; i < 50; i++) {
      const coords = getImpureCoordinates();
      expect(coords).toHaveProperty("x");
      expect(coords).toHaveProperty("y");
      expect(typeof coords.x).toBe("number");
      expect(typeof coords.y).toBe("number");

      // Boundary verification:
      // x: 100 + Math.floor(Math.random() * 120) => range [100, 219]
      expect(coords.x).toBeGreaterThanOrEqual(100);
      expect(coords.x).toBeLessThan(220);

      // y: 80 + Math.floor(Math.random() * 80) => range [80, 159]
      expect(coords.y).toBeGreaterThanOrEqual(80);
      expect(coords.y).toBeLessThan(160);
    }
  });
});

describe("Hierarchical layout rank allocation algorithm", () => {
  it("should calculate correct dependency ranks for simple linear pipeline", () => {
    const nodes = [
      { id: "node-1" },
      { id: "node-2" },
      { id: "node-3" }
    ];
    const connections = [
      { from: "node-1", to: "node-2" },
      { from: "node-2", to: "node-3" }
    ];

    const ranks: Record<string, number> = {};
    nodes.forEach(n => { ranks[n.id] = 0; });

    for (let iter = 0; iter < nodes.length; iter++) {
      let changed = false;
      connections.forEach(conn => {
        const fromLevel = ranks[conn.from] ?? 0;
        const toLevel = ranks[conn.to] ?? 0;
        if (toLevel <= fromLevel) {
          ranks[conn.to] = fromLevel + 1;
          changed = true;
        }
      });
      if (!changed) break;
    }

    expect(ranks["node-1"]).toBe(0);
    expect(ranks["node-2"]).toBe(1);
    expect(ranks["node-3"]).toBe(2);
  });

  it("should calculate correct ranks for branching and multiple parent dependencies", () => {
    const nodes = [
      { id: "node-1" },
      { id: "node-2" },
      { id: "node-3" },
      { id: "node-4" }
    ];
    const connections = [
      { from: "node-1", to: "node-2" },
      { from: "node-1", to: "node-3" },
      { from: "node-2", to: "node-4" },
      { from: "node-3", to: "node-4" }
    ];

    const ranks: Record<string, number> = {};
    nodes.forEach(n => { ranks[n.id] = 0; });

    for (let iter = 0; iter < nodes.length; iter++) {
      let changed = false;
      connections.forEach(conn => {
        const fromLevel = ranks[conn.from] ?? 0;
        const toLevel = ranks[conn.to] ?? 0;
        if (toLevel <= fromLevel) {
          ranks[conn.to] = fromLevel + 1;
          changed = true;
        }
      });
      if (!changed) break;
    }

    expect(ranks["node-1"]).toBe(0);
    expect(ranks["node-2"]).toBe(1);
    expect(ranks["node-3"]).toBe(1);
    expect(ranks["node-4"]).toBe(2);
  });
});
