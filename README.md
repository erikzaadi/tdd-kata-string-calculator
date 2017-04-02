# Roy Osherove's String Calculator

See [original](http://osherove.com/tdd-kata-1).

## Getting started:

`npm install`

## Running tests:

`npm test`

## Or even better (continuously):

`npm run test-watch`

## Lint for glory

`npm run lint`

## Folder structure

```
├── src/index.js            -  Source for your amazing calculator
└── tests/example.spec.js   -  Initial test file
```

## Helpers

`tests/bootstrap.js` exposes expect (chai) as global

## Instructions:

1. Create a simple String calculator with a method int Add(string numbers)
1. The method can take 0, 1 or 2 numbers, and will return their sum (for an empty string it will return 0) for example `` or `1` or `1,2`
1. Start with the simplest test case of an empty string and move to 1 and two numbers
1. Remember to solve things as simply as possible so that you force yourself to write tests you did not think about
1. Remember to refactor after each passing test
1. Allow the Add method to handle an unknown amount of numbers
1. Allow the Add method to handle new lines between numbers (instead of commas).
1. The following input is ok:  `1\n2,3`  (will equal 6)
1. The following input is NOT ok:  `1,\n` (not need to prove it - just clarifying)
1. Support different delimiters
1. To change a delimiter, the beginning of the string will contain a separate line that looks like this:   `//[delimiter]\n[numbers…]` for example `//;\n1;2` should return three where the default delimiter is `;` .
1. The first line is optional. all existing scenarios should still be supported
1. Calling Add with a negative number will throw an exception `negatives not allowed` - and the negative that was passed. If there are multiple negatives, show all of them in the exception message

*NOTE:* Stop here if you are a beginner. Continue if you can finish the steps so far in less than 30 minutes.

1. Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2
1. Delimiters can be of any length with the following format:  `//[delimiter]\n` for example: `//[***]\n1***2***3` should return 6
1. Allow multiple delimiters like this:  `//[delim1][delim2]\n` for example `//[*][%]\n1*2%3` should return 6.
1. Make sure you can also handle multiple delimiters with length longer than one char
