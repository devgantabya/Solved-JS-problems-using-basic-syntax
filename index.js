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

// 4. Find the Maximum Number
const findMaxNumber = (arr) => {
    return Math.max(...arr);
}

// 5. Remove Duplicates from an Array
const removeDuplicates = (arr) => [new Set(...arr)];

// 6. Sum of All Numbers in an Array
const sumAllNumbers = (arr) => {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
};

// 7. Find Even Numbers in an Array
const findEvenNums = (arr) => {
    const evens = [];
    for (const num of arr) {
        if (num % 2 === 0) {
            evens.push(num);
        }
    }
    return evens;
}

// 8. Capitalize First Letter of Each Word
const capitalizeFirstLetter = (str) => {
    return str.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
}

// 9. Find the Factorial of a Number
const findFactorial = (num) => {
    if (num < 0) return "Factorial not defined for negative numbers";

    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}


// 10. PingPong Challenge
const pingPong = () => {
    const result = [];

    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("PingPong");
        } else if (i % 3 === 0) {
            result.push("Ping");
        } else if (i % 5 === 0) {
            result.push("Pong");
        } else {
            result.push(i);
        }
    }

    return result;
};

