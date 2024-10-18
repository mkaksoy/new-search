// eslint.test.js
import { execSync } from "child_process";

describe("ESLint", () => {
  test("should not have ESLint errors", () => {
    try {
      execSync("npx eslint .", { stdio: "inherit" });
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`ESLint error: ${error.message}`);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  });
});
