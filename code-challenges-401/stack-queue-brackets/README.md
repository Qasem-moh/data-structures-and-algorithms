# multiBracketValidation

**Challenge**:
- Write a function that checks if the brackets are balanced or not.

**Approach & Efficiency**:
- Split string into array
- Push the brackets into another array, getting rid of irrelevant characters
- Assign similar integers (positive for opening and negative for closing brackets)
- Loop through the array, shift the first value and iterate again to search for a matching closing brackets.
- Once found, splice that bracket out of the array
- If all match, array will be empty, loop will be exited and true will be returned... otherwise, false will be returned because of an error along the way

**Solution**:

*run: npm test multi-bracket-validation*

![multiBracketValidation](https://i.ibb.co/CW0h1HN/0121.png)