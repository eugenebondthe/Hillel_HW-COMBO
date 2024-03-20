function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    let prev = 0;
    let curr = 1;
    for (let i = 2; i <= n; i++) {
      const next = prev + curr;
      prev = curr;
      curr = next;
    }
    return curr;
  }
}

console.log(fibonacci(0));
console.log(fibonacci(4));
