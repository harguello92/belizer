/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageProvider: "v8",
  moduleFileExtensions: ["ts", "js"],
  testMatch: ["**/__tests__/*.ts"],
  testPathIgnorePatterns: ["/node_modules/"],
};
