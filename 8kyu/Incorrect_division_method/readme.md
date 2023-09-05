Incorrect Division Method

Description

This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.

Original Code

```
    const solve = (x, y) => x // y
```

Return value with input x = 10, y = 2:

```
    10
```

Solution

Division in JS is performed with the arithmetic operator "/". However, in the original code, double-forward slashes
are used.

In JS, "//" is used to create comments. So what is happening is that the second parameteris being commented out.

Removing one of the forward slashes creates a division.

Final working code:

```
    const solve = (x, y) => x / y;
```

Return solution with input x = 10, y = 2;

```
    5
```

Conclusion

Reading code aloud is useful for solving syntax errors.

In addition, the format of the solution, a one-line function has led me to research how this works.
