import { readFile } from "fs";
import * as path from "path";
import { spawn } from "child_process";

export { path };
export * from "fs";

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
