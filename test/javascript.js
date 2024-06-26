import { readFile } from "fs";
import * as path from "path";
import { spawn } from "child_process";

export { path };
export * from "fs";

/**
 * Returns boolean for whatever reason also prints what you pass to it.
 *
 * @param {string} arg - String argument, maybe
 * @returns {boolean} - True if argument is truthy, otherwise false
 */
export default function helloWorld(arg) {
  console.log("Arguments:", arguments);
  return Boolean(arg);
}

export async function readJSON(filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, "utf8", (readError, data) => {
      if (readError) {
        reject(readError);
      } else {
        try {
          resolve(JSON.parse(data));
        } catch (parseError) {
          reject(parseError);
        }
      }
    });
  });
}

export class Hello {
  constructor(who) {
    this.who = who;
  }

  hello() {
    console.log(`Hello, ${this.who}`);
  }
}

export class HelloWorld extends Hello {
  constructor() {
    super("World");
  }

  hola() {
    console.log(`Hola, ${this.who}`);
  }
}

const hello = {
  world: "Hello, World!",
  yeah: true,
  num: 123,
};

const re = /(Hello+), Worl[d]?!/;

re.test("What's up?!");
