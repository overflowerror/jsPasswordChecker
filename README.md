# jsPasswordChecker
This is a little tool I wrote for a friend of mine to determine if certain password criteria are met.

## How to Use

Just include the file (jsPasswordChecker.js) to your project and then:
```javascript
var checker = new PasswordChecker({
  // add criteria here
});
checker.check(password);
```

Simple as that.

## Criteria Object

In the current version the following criteria can be set:

- minLength
- maxLength
- containsNumbers
- containsLowerCaseCharacters
- containsUpperCaseCharacters
- containsWhiteSpaces
- containsSpecialCharacters
- dictionary
- maxCharacterRepetition
