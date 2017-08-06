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
If the given criteria are not met, any exception is thrown.

Simple as that.

## Criteria Object

In the current version the following criteria can be set:

- minLength
  - Value: Integer
  - Specifies the minimal length of the password.
- maxLength
  - Value: Integer
  - Specifies the maximal length of the password (Please don't.)
- containsNumbers
  - Value: Boolean/Integer
  - If the value is `false` the password must not contain any numbers. if the value is an integer, the password has to contain at least the given number of digits. A value of `true` is identical to `1`.
- containsLowerCaseCharacters
  - Value: Boolean/Integer
  - If the value is `false` the password must not contain any lowercase characters. if the value is an integer, the password has to contain at least the given number of lowercase characters. A value of `true` is identical to `1`.
- containsUpperCaseCharacters
  - Value: Boolean/Integer
  - If the value is `false` the password must not contain any uppercase characters. if the value is an integer, the password has to contain at least the given number of uppercase characters. A value of `true` is identical to `1`.
- containsWhiteSpaces
  - Value: Boolean/Integer
  - If the value is `false` the password must not contain any whitespaces. if the value is an integer, the password has to contain at least the given number of whitespaces. A value of `true` is identical to `1`.
- containsSpecialCharacters
  - Value: Boolean/Integer
  - If the value is `false` the password must not contain any special characters. if the value is an integer, the password has to contain at least the given number of special characters. A value of `true` is identical to `1`.
- dictionary
  - Value: Array of strings
  - The password must not contain any of the given strings (case-insensitive).
- maxCharacterRepetition
  - Value: Integer
  - Specifies the maximal number of consecutive identical characters.
  
# Example

```javascript
var checker = new PasswordChecker({
  minLength: 10,
  containsUpperCaseCharacters: true,
  containsLowerCaseCharacters: true,
  containsNumbers: 2,
  containsWhiteSpaces: false,
  dictionary: [
    "username",
    "dayofbirth"
  ]
});

checker.check("VeryStrongP4ssword"); // will fail because there is only 1 number in the password
checker.check("Very Str0ng P4ssword"); // will fail because there are whitespaces in the password
checker.check("VeryStr0ngP4ssword"); // won't fail; all criteria satisfied

```
