// Singleton: Implement a Singleton class that ensures a class has only one instance while providing a global point of access to that instance
// https://www.greatfrontend.com/questions/javascript/singleton

// No skeleton is provided. Export an object that has a single `getInstance()` method.
let globalMap: Map<any, any>;

export default {
  getInstance() {
    if (globalMap === undefined) {
      globalMap = new Map();
    }

    return globalMap;
  },
};
