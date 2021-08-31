# Fizz Buzz Tree

[**fizzBuzzTree**](./fizz-buzz-tree.js)

**Challenge**:
- Create a `fizzBuzzTree` method on a K-ary tree, the result should be a new tree

**Approach & Efficiency**: 
- A new `K_aryTree` is instantiated inside the method, then I deep cloned the original root to the new tree's root
- A `Queue` was used to traverse the tree using a `while` loop
- No built-in methods were used, except `JSON.parse(JSON.stringify(this.root))` to achieve the deep clone


**Solution**:

*run: npm test fizz-buzz-tree*
![stacksAndQueues img]()