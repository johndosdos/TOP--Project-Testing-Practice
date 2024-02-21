import { describe, expect, test } from "@jest/globals";
import { capitalize, reverseString } from "../src/main";

describe("capitalize", () => {
  test("takes a string and returns it with the first character capitalized", () => {
    expect(capitalize("hello")).toEqual("H");
  });
});

describe("reverseString", () => {
  test("takes a string and returns it reversed", () => {
    expect(reverseString("hello")).toEqual("olleh");
  });
});

describe("calculator", () => {
  test.todo("contains functions for the four basic operations");
});

describe("caesarCipher", () => {
  test.todo(
    "takes a string and a shift factor and returns it with each character “shifted”",
  );
});
