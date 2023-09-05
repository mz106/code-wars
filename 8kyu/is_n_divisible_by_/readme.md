Is N Divisible by ...

Category: Fundamentals

Description

Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

Example:

```
    (6,1,3)--> true because 6 is divisible by 1 and 3
    (12,2)--> true because 12 is divisible by 2
    (100,5,4,10,25,20)--> true
    (12,7)--> false because 12 is not divisible by 7
```

Original code:

```
    function isDivisible(){
        //Write your code here
    }
```

Step 1:

First solution:

```
    function isDivisible(a, b, c) {
        let count;
        let result;

        if (a % b === 0) {
            count = 1;
        }

        if (a % c === 0) {
            count = count + 1;
        }

        if (count === 2) {
            result = true;
        } else {
            result = false;
        }

        return result;
    }
```

This passed tests with three args, but not with +3 args.

Second solution:

```
    const isDivisible = (a, b, c) => (a % b === 0 && a % c === 0 ? true : false);
```

This passed tests with three args, but not with +3 args.

Third attempt:

```
    function isDivisible(...args) {
        const num = args[0];
        let count = 0;
        args.shift();

        args.forEach((arg) => {
            if (num % arg === 0) count += 1;
        });
        console.log(count);
        return count === args.length ? true : false;
    }
```

This solution worked for all tests.

Fourth atempt:

```
    function isDivisible(...args) {
        let count = 0;
        const num = args.shift();

        args.forEach((arg) => {
            if (num % arg === 0) count += 1;
        });
        console.log(count);
        return count === args.length ? true : false;
    }
```

This solution worked for all tests.

Solution from CodeWars:

const isDivisible = (firstN, ...otherN) =>
otherN.every((n) => firstN % n === 0);

This solution introduced me to .every(), and the concept of different args, with a single arg followed by the spread operator.
