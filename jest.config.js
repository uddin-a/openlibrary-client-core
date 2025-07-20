// jest.config.js
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node", // Use 'node' for backend/library code, 'jsdom' for browser/UI
  testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],
  // Optional: If your source code is in a different directory than 'src'
  roots: ["src", "test"],
  moduleFileExtensions: ["ts", "js", "json", "node"],
};
