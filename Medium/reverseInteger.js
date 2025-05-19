// problem: Reverse Integer
// link- https://leetcode.com/problems/reverse-integer/submissions/1638518544

function reverse(x) {
  // Handle the sign
  const sign = x < 0 ? -1 : 1;
  // Work with absolute value
  x = Math.abs(x);

  // Convert to string and reverse digits
  let reversed = 0;
  while (x > 0) {
    // Get last digit
    const digit = x % 10;
    // Remove last digit
    x = Math.floor(x / 10);

    // Check for overflow before adding new digit
    if (reversed > Math.floor((2 ** 31 - 1) / 10)) {
      return 0;
    }

    // Build reversed number
    reversed = reversed * 10 + digit;
  }

  // Apply sign and check final overflow
  const result = sign * reversed;
  if (result < -(2 ** 31) || result > 2 ** 31 - 1) {
    return 0;
  }

  return result;
}
