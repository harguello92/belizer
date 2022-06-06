import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageProvider: "v8",
  moduleFileExtensions: ["ts", "js"],
  testMatch: ["**/__tests__/*.ts"],
  testPathIgnorePatterns: ["/node_modules/"],
  preset: "ts-jest",
  testEnvironment: "node",
};

export default config;
