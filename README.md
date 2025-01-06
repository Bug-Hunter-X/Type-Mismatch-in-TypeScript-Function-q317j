# Type Mismatch in TypeScript Function
This repository demonstrates a common type error in TypeScript: passing an argument of an incorrect type to a function.

## Bug
The `add` function is defined to accept two numbers as arguments. However, in the `result` variable assignment, a string ('2') is passed as the second argument which leads to a type error.

## Solution
The solution involves ensuring that both arguments passed to the `add` function are numbers. This can be achieved through type checking or type casting before passing the arguments.