- FIXME: Replace all dots

\*\* DESCRIPTION:
The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

\*\* Task
Fix the bug so we can all go home early.

\*\* Notes
String str will never be null.

\*\* Original Code

```
    var replaceDots = function(str) {
        return str.replace(/./, '-');
    }
```

\*\* Step 1:

The original result from the function with input "one.two.three":

```
    -ne.two.three
```

Upon reviewing the docs for .replace() on MDN, I changed the 'pattern' argument from RegEx to a string.

```
    var replaceDots = function (str) {
        return str.replace(".", "-");
    };
```

This resulted in the following:

```
    one-two.three
```

So, the function has partially worked. However, the docs for .replace() state that, if the 'pattern' argument is a string then only the first match will be replaced.

Step 2:

From the .replace() docs, there was a link to .replaceAll(). The results from this are:

```
    one-two-three
```

This passed the tests on CodeWars

\*\* Conclusion

Final working code:

```
    var replaceDots = function (str) {
        return str.replaceAll(".", "-");
    };
```

The solution to this code was simple, and it has introduced me to both .replace() and .replaceAll().

Two interesting solutions from others;

```
    var replaceDots = function(str) {
        return str.replace(/\./g,'-');
    }
```

```
    var replaceDots = s=>s.split('.').join('-')
```

The first has introduced me to a more complex RegEx patters, an the second to how to reduce code in string manipulation.
