export default {
  transform: {
    "^.+\\.js$": "babel-jest",  // Use babel-jest for JS files
  },
  testEnvironment: "jest-environment-jsdom",  // Or 'node' for Node.js
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",  // If you are using CSS modules
  },
};
