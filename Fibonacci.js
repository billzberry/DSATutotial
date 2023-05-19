/** ========= Problem
 * Given a number 'n', find the first 'n' elements of the Fibonacci Sequence
*/


/** ========= Understand the problem
 * In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones
 * The first two  numbers in the sequence are 0 and 1
 * fibonacci(2) = [0,1]
 * fibonacci(3) = [0,1,1]
 * fibonacci(7) = [0,1,1,2,3,5,8]
*/


/** ========= Solution explained
 * For worst case scenario
 * Because fibonacci starts with 2 numbers,
 * First, initialize a variable and assign an array to it, having two values [0,1]
 * Second, create a for loop starting at index of 2
 * Inside the loop, result[i] = result[i - 1] + result[i - 2]
 * Return result
*/


const Fibonacci = (num) => {
    let result = [0, 1]
    for (let i = 2; i < num; i++) {
        result.push(result[i - 1] + result[i - 2])
    }
    return result
}


let result = Fibonacci(2)
console.log(result)
result = Fibonacci(3)
console.log(result)
result = Fibonacci(7)
console.log(result)

// Big-O = O(n)

