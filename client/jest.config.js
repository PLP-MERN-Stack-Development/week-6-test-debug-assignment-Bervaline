export default {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(svg|jpg|jpeg|png|gif|webp|avif|ico|bmp)$": "<rootDir>/__mocks__/fileMock.js"
  },
  testMatch: [
    "<rootDir>/src/tests/**/*.test.jsx",
    "<rootDir>/src/tests/**/*.test.js",
    "<rootDir>/src/tests/**/*.spec.jsx",
    "<rootDir>/src/tests/**/*.spec.js"
  ],
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/**/*.test.{js,jsx}"
  ]
}; 