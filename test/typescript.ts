// @ts-nocheck

import { readFile } from "fs";
import * as path from "path";
import { join, resolve as pathResolve } from "path";
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

const hello = {
  world: "Hello, World!",
  yeah: true,
  num: 123,
};

const re = /(Hello+), Worl[d]?!/;

re.test("What's up?!");

namespace Hello {
  export interface Yup {
    yeah: boolean;
  }

  export type AnyBrand = { [key: string | number | symbol]: any };

  export type Debrand<Type> = Type extends infer _Brand extends AnyBrand &
    infer Debranded extends string | number | symbol
    ? Debranded
    : Type;

  export type UnionKeys<Type> = Type extends Type ? keyof Type : never;

  export type WithoutIndexed<Model> = {
    [Key in keyof Model as string extends Debrand<Key>
      ? never
      : number extends Debrand<Key>
      ? never
      : symbol extends Debrand<Key>
      ? never
      : Key]: Model[Key];
  };

  export type AllOptionalBut<Model, Key extends keyof Model> = Partial<
    Omit<WithoutIndexed<Model>, Key>
  > extends Omit<WithoutIndexed<Model>, Key>
    ? true
    : false;
}

type Test = Hello.AnyBrand;
