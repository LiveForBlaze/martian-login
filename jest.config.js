export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@components": "<rootDir>/src/components/index",
    "^@features/(.*)$": "<rootDir>/src/features/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
