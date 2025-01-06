function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2); // Correct: Both arguments are numbers
console.log(result);

function addSafe(a: number, b: string): number {
  const numB = parseFloat(b);
  if (isNaN(numB)) {
    return a; // Handle invalid input
  }
  return a + numB;
}

let result2 = addSafe(1, "2");
console.log(result2); //Output: 3