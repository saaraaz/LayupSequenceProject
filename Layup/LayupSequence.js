/*
    implement this sequesnce
    if n=1 s(n)=1
    if n=2 s(n)=2
    if n is even s(n)=s(n-1)+s(n-2)
    if n is odd s(n)=2s(n-1)-s(n-2)

    The function should efficiently compute the value of s(10000)
*/

function s(n) {
  if (n === 1) return BigInt(1);
  if (n === 2) return BigInt(2);

  const cache = new Array(n + 1).fill(BigInt(0)); // Initialize cache with BigInt 0
  cache[1] = BigInt(1);
  cache[2] = BigInt(2);

  for (let i = 3; i <= n; i++) {
    if (i % 2 === 0) {
      cache[i] = cache[i - 1] + cache[i - 2];
    } else {
      cache[i] = 2n * cache[i - 1] - cache[i - 2];
    }
  }

  return cache[n];
}

// Measure the runtime of the implementation
console.time("s(10000)");
console.log(s(10000).toString()); // Output the result as a string
console.timeEnd("s(10000)"); // 17.83ms

/* Explanation:

    a. Provide a short explanation of the time complexity of your algorithm
    The time complexity of the algorithm is O(n) because it involves a single loop that iterates from 3 to n,
    performing constant-time operations within each iteration.

    b. Discuss any optimizations applied and how they impact the runtime
    The main optimization applied is the use of an iterative approach with memoization to avoid redundant calculations and recursion overhead.
    This reduces the time complexity from O(2^n) (naive recursive approach) to O(n).
*/
