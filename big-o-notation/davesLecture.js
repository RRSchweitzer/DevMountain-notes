why talk about big o?
- communicate with other devs
- job interviews
- reason about your own code
- you will see it in the wild (react docs)

big o is one piece of vocabulary to talk about the speed of your code.

what is it about?
- big o is about limits (the calculus kind)
- big o is about the 'steps' in your algorithm
- big o is about big inputs
- big o is about categorization

O(n) = linear complexity class
- function run time is linear, with runtime and input length on the axes.

"what if input is pre-sorted?"
O(log(n)) = logarithmic complexity
- chopping the input in half a number of times by having the sting pre-sorted and
  checking the middle character and ommiting one side of the string (binary search).

"what if we have a pre-computed cache?"
O(1) = constant complexity
- runtime is constant no matter the length of the input.
- often called "hashing", and/or "memoization".

	Other O(1) operations:
	- determing if integer is even or odd.
	- reading string.length in JS.
	- writing an element in an array: x[3] = "foo".

-- The most common complexities --
O(1) = Constant
O(log(n)) = Logarithmic
O(n) = Linear
O(n^2) = Quadratic
O(2^n) = Exponential (terrible!!! doubles the runtime. rare in real situations.)

Quadratic complexity
- runtime grows exponentially with relation to input.
- nested for loops are a dead giveaway.
- example: selection sort.

"what about 2 inputs? or an array of inputs?"
- O(n x m) =  'n' by 'm'.
- Fast Sorting:
	- O(n log(n)) === 'quick sort' a.k.a. best sorting algorithm.
		- "linearithmic"

Amortization
- sometimes an operation is fast in most cases, but some inputs will make it slow.
  we can amortize this slowness accross all operations.

bigocheatsheet.com
en.wikipedia.org/wiki/Time_complexity
stackoverflow.com "what is big o"

"Guess the complexity:"
UpperCase a string: linear
Determine if integer is even: 
Count the "1" bits in a 32-bit integer: constant
copy an array: linear
insert item in the middle of an array: linear
remove item from an array: linear (basically same problem as above)
append item to end of an array: constant (b/c javascript is fancy)
remove duplicate from an array: (1)sort array (2)loop through array and find clumped dupes
insert item in a linked list: constant
find item by index in a linked list: linear
compute the checksum of strings in an array: n by m
on the first day of christmas: quadratic

JavaScript "arrays" aren't really arrays, their indexed objects.


EXERCISES:

	1. Make a hypothesis about the time complexity.
	2. Implement the algorithm and test it.
	3. Time the algorithm for different sized inputs. console.time() and console.timeEnd()
	4. Plot the input sizes and the algorithms corresponding runtime in a graph.
	5. Assess your hypothesis: were you right?

Algorithm 1: Bubble Sort
Algorithm 2: Bucket Sort
Algorithm 3: Read Object Key

Math.random generates a random number between 1 and 10 (with decimals).
Math.floor turns decimals into whole numbers.

Ex: a.push(Math.floor(Math.random() * 10));


