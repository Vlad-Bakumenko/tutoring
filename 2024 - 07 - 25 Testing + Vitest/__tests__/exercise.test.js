// Exercise 1
import { it, describe, expect } from "vitest";

import { getCoupons, calcDiscount, validateUserInput } from "../exercise.js";

describe("getCoupons", () => {
  it("should return array of coupons", () => {
    const coupons = getCoupons();
    expect(Array.isArray(coupons)).toBe(true);
    expect(coupons.length).toBeGreaterThan(0);
  });

  it("should return an array with valid coupon codes", () => {
    const coupons = getCoupons();
    coupons.forEach((coupon) => {
      expect(coupon).toHaveProperty("code");
      expect(typeof coupon.code).toBe("string");
      expect(coupon.code).toBeTruthy();
    });
  });

  it("should return an array with valid discounts", () => {
    const coupons = getCoupons();
    coupons.forEach((coupon) => {
      expect(coupon).toHaveProperty("discount");
      expect(typeof coupon.discount).toBe("number");
      expect(coupon.discount).toBeGreaterThan(0);
      expect(coupon.discount).toBeLessThan(1);
    });
  });
});

describe("calculateDiscount", () => {
  it("should return discounted price if given valid code", () => {
    expect(calcDiscount(10, "SAVE10NOW")).toBe(9);
    expect(calcDiscount(10, "DISCOUNT50OFF")).toBe(5);
  });

  it("should handle non-numeric price", () => {
    expect(calcDiscount("10", "SAVE10NOW")).toMatch(/invalid/i);
  });

  it("should handle negative price", () => {
    expect(calcDiscount(-10, "SAVE10NOW")).toMatch(/invalid/i);
  });

  it("should handle non-string discount code", () => {
    expect(calcDiscount(10, 10)).toMatch(/invalid/i);
  });

  it("should handle invalid discount code", () => {
    expect(calcDiscount(10, "INVALID")).toBe(10);
  });
});

// Exercise 2

describe("validateUserInput", () => {
    it("should return success if given valid input", () => {
      expect(validateUserInput("mosh", 42)).toMatch(/success/i);
    });
  
    it("should return an error if username is not a string", () => {
      expect(validateUserInput(1, 42)).toMatch(/invalid/i);
    });
  
    it("should return an error if username is less than 3 characters", () => {
      expect(validateUserInput("mo", 42)).toMatch(/invalid/i);
    });
  
    it("should return an error if username is longer than 255 characters", () => {
      expect(validateUserInput("A".repeat(256), 42)).toMatch(/invalid/i);
    });
  
    it("should return an error if age is not a number", () => {
      expect(validateUserInput("mosh", "42")).toMatch(/invalid/i);
    });
  
    it("should return an error if age is less than 18", () => {
      expect(validateUserInput("mosh", 17)).toMatch(/invalid/i);
    });
  
    it("should return an error if age is greater than 100", () => {
      expect(validateUserInput("mosh", 101)).toMatch(/invalid/i);
    });
  
    it("should return an error if both username and age are invalid", () => {
      expect(validateUserInput("", 0)).toMatch(/invalid username/i);
      expect(validateUserInput("", 0)).toMatch(/invalid age/i);
    });
  });