import { describe, expect, test } from "@jest/globals";
import { capitalize, reverseString, calculator } from "../src/main";

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
  test("contains functions for the four basic operations", () => {
    expect(calculator.add(1, 2)).toEqual(3);
    expect(calculator.subtract(5, 2)).toEqual(3);
    expect(calculator.multiply(5, 5)).toEqual(25);
    expect(calculator.divide(15, 3)).toEqual(5);
  });
});

describe("caesarCipher", () => {
  test.todo(
    "takes a string and a shift factor and returns it with each character “shifted”",
  );
});
