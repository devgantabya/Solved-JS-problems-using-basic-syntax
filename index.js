// 1. Reverse a String
const reverseAString = (str) => str.split("").reverse().join("");

// 2. Count Vowels in a String
const countVowelsInAString = (str) => {
    const vowels = "AaEeIiOoUu";
    let count = 0;

    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// 3. Check for Palindrome
const checkPalindrome = (str) => {
    const reverseStr = str.split("").reverse().join("");
    return str === reverseStr;
}
