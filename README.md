# Incorrect Handling of Falsy Values in Addition Function

This repository demonstrates a common error in JavaScript: the incorrect handling of falsy values.  The `foo` function intends to add two numbers, but it fails to account for falsy values (such as `null`, `undefined`, `0`, `false`, `""`) other than `0`.

The bug is in the condition `if (a === 0 || b === 0)`. This condition only checks for strict equality with 0 and doesn't handle other falsy values.  When a falsy value other than 0 is passed, the function produces `NaN` (Not a Number) due to the addition of a number and a non-number.

The solution demonstrates how to correctly handle falsy values, ensuring the function behaves as expected in all cases.
