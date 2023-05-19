/** ========= Problem
 * Given a natural number 'n', determine if the number is prime or not
*/


/** ========= Understand the problem
 * In mathematics, a prime number is a natural number greater than 1 that is not a product of two smaller natural numbers
 * PrimeNumber of zero is 1
 * PrimeNumber(5) = true 5*1 or 1*5
 * PrimeNumber(4) = false 1*4 or 2*2 or 4*1
*/


/** ========= Solution explained
 * For worst case scenario
 * 
*/


const PrimeNumber = (num) => {
    if (num === 0) return 1
    let result = num
    for (let i = 1; i < num; i++) {
        result *= (num - i)
    }
    return result
}


let result = PrimeNumber(5)
console.log(result)
result = PrimeNumber(4)
console.log(result)

// Big-O = O(n)

