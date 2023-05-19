/** ========= Problem
 * Given an integer 'n', find the factorial of that integer
*/


/** ========= Understand the problem
 * In mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'
 * Factorial of zero is 1
 * Factorial(2) = 2*1 = 2
 * Factorial(3) = 3*2*1 = 6
 * Factorial(5) = 5*4*3*2*1 = 120
*/


/** ========= Solution explained
 * For worst case scenario
 * Check if a number (n) is zero and return 1
 * Create a variable result and set it's value to the number (n)
 * Create a for loop start with index of 1 and the limit of the loop is i < number (n)
 * In the loop, multiply result with number (n) minus 1 eg. result *= num - 1
 * Return result
*/


const Factorial = (num) => {
    if (num === 0) return 1
    let result = num
    for (let i = 1; i < num; i++) {
        result *= (num - i)
    }
    return result
}


let result = Factorial(0)
console.log(result)
result = Factorial(1)
console.log(result)
result = Factorial(2)
console.log(result)
result = Factorial(3)
console.log(result)
result = Factorial(5)
console.log(result)

// Big-O = O(n)

