import { describe, expect, test } from "@jest/globals";
import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "../src/main";

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
  test("takes a string and a shift factor and returns it with each character “shifted”", () => {
    expect(caesarCipher("Hello World!", 0)).toEqual("Hello World!");
    expect(caesarCipher("Hello World!", 3)).toEqual("Khoor Zruog!");
  });
});

describe("analyzeArray", () => {
  test("function that takes an array of numbers and returns an object with the following properties: average, min, max, and length", () => {
    expect(analyzeArray([3, 13, 5, 4, 15, 10, 16, 18, 1, 20]).average).toEqual(
      10.5,
    );
    expect(analyzeArray([3, 13, 5, 4, 15, 10, 16, 18, 1, 20]).min).toEqual(1);
    expect(analyzeArray([3, 13, 5, 4, 15, 10, 16, 18, 1, 20]).max).toEqual(20);
    expect(analyzeArray([3, 13, 5, 4, 15, 10, 16, 18, 1, 20]).length).toEqual(
      10,
    );
  });
});
