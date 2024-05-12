import { readFile } from "fs";
import * as path from "path";
import { join } from "path";
import type { ParsedPath } from "path";
import { type PathLike } from "fs";
import { type ChildProcess, spawn } from "child_process";

export { path };
export * from "fs";
export type { ParsedPath, PathLike };

export default function helloWorld(arg: string): boolean {
  console.log("Arguments:", arguments);
  return Boolean(arg);
}

export async function readJSON<Type>(filePath: string): Promise<Type> {
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
  who: string;

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
