import { describe, it, expect } from "vitest";

describe("Sample Test Suite", () => {
  it("should pass a simple test", () => {
    expect(1 + 1).toBe(2);
  });

  it("should check string equality", () => {
    expect("Tito Ride").toBe("Tito Ride");
  });

  it("should check array inclusion", () => {
    const rides = ["XC", "Trail", "Enduro"];
    expect(rides).toContain("Trail");
  });
});
