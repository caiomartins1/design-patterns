/**
 * Ensure one class has a single instance to be used in all system.
 * Provides a global access point to that instance
 *
 * Why would you want a single instance?
 *  - Generally used for shared resources access such as database, UI, file
 *    system, external servers, etc...
 *  - Also used to avoid global variables, being useful to instantiate configuration
 *  objects.
 *  - Protect the instance of accidental overwriting.
 *
 */

export class Singleton {
  private static _instance: Singleton | null = null;

  private constructor() {}

  static get instance(): Singleton {
    if (Singleton._instance == null) {
      Singleton._instance = new Singleton();
    }

    return Singleton._instance;
  }
}

const instance1 = Singleton.instance;
const instance2 = Singleton.instance;

console.log(instance1 == instance2); // true
