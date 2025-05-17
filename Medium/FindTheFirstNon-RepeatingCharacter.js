function firstNonRepeatingChar(str) {
    let charCount = {};

    
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

   
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}

// Test cases
console.log(firstNonRepeatingChar("javascript")); 
console.log(firstNonRepeatingChar("aabbcc")); 