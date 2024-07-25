// Exercise 1

export function getCoupons() {
  return [
    { code: "SAVE10NOW", discount: 0.1 },
    { code: "DISCOUNT50OFF", discount: 0.5 },
  ];
}

export function calcDiscount(price, discountCode) {
    if (typeof price !== "number" || price < 0) return "Invalid price"

    if (typeof discountCode !== "string") return "Invalid discount code"

    let discount = 0;

    if (discountCode === "SAVE10NOW") {
        discount = 0.1;
    } else if (discountCode === "DISCOUNT50OFF") {
        discount = 0.5
    }

    return price - price*discount
}

// Exercise 2

export function validateUserInput(username, age) {
    const errors = [];
  
    if (
      typeof username !== "string" ||
      username.length < 3 ||
      username.length > 255
    ) {
      errors.push("Invalid username");
    }
  
    if (typeof age !== "number" || age < 18 || age > 100) {
      errors.push("Invalid age");
    }
  
    return errors.length === 0 ? "Validation successful" : errors.join(", ");
  }