console.log("testcases.js");

var testcases = [
	{
		password: "test",
		policies: {
			minLength: 8
		},
		result: false
	},{
		password: "testtest",
		policies: {
			minLength: 8
		},
		result: true
	},{
		password: "test",
		policies: {
			maxLength: 8
		},
		result: true
	},{
		password: "testtest",
		policies: {
			maxLength: 7
		},
		result: false
	},{
		password: "test",
		policies: {
			containsNumbers: true
		},
		result: false
	},{
		password: "test",
		policies: {
			containsNumbers: false
		},
		result: true
	},{
		password: "test1",
		policies: {
			containsNumbers: true
		},
		result: true
	},{
		password: "test1",
		policies: {
			containsNumbers: false
		},
		result: false
	},{
		password: "test1",
		policies: {
			containsNumbers: 2
		},
		result: false
	},{
		password: "test11",
		policies: {
			containsNumbers: 2
		},
		result: true
	},{
		password: "test",
		policies: {
			containsLowerCaseLetters: true
		},
		result: true
	},{
		password: "test",
		policies: {
			containsLowerCaseLetters: false
		},
		result: false
	},{
		password: "TEST",
		policies: {
			containsLowerCaseLetters: true
		},
		result: false
	},{
		password: "TEST",
		policies: {
			containsLowerCaseLetters: false
		},
		result: true
	},{
		password: "tesT",
		policies: {
			containsUpperCaseLetters: true
		},
		result: true
	},{
		password: "tesT",
		policies: {
			containsUpperCaseLetters: false
		},
		result: false
	},{
		password: "test",
		policies: {
			containsUpperCaseLetters: true
		},
		result: false
	},{
		password: "test",
		policies: {
			containsUpperCaseLetters: false
		},
		result: true
	},{
		password: "test",
		policies: {
			containsSpecialCharacters: true
		},
		result: false
	},{
		password: "test",
		policies: {
			containsSpecialCharacters: false
		},
		result: true
	},{
		password: "test&",
		policies: {
			containsSpecialCharacters: true
		},
		result: true
	},{
		password: "test&",
		policies: {
			containsSpecialCharacters: false
		},
		result: false
	},{
		password: "test",
		policies: {
			containsWhiteSpaces: true
		},
		result: false
	},{
		password: "test",
		policies: {
			containsWhiteSpaces: false
		},
		result: true
	},{
		password: "te st",
		policies: {
			containsWhiteSpaces: true
		},
		result: true
	},{
		password: "te st",
		policies: {
			containsWhiteSpaces: false
		},
		result: false
	},{
		password: "teest",
		policies: {
			maxCharacterRepetition: 2
		},
		result: true
	},{
		password: "teeest",
		policies: {
			maxCharacterRepetition: 2
		},
		result: false
	},{
		password: "testUserName",
		policies: {
			dictionary: [
				"UserName"
			]
		},
		result: false
	},{
		password: "testUseName",
		policies: {
			dictionary: [
				"UserName"
			]
		},
		result: true
	},

	{
		password: "RealyG00d&Password",
		policies: {
			minLength: 10,
			containsLowerCaseLetters: true,
			containsUpperCaseLetters: true,
			containsNumbers: true,
			containsSpecialCharacters: true,
			maxCharacterRepetition: 2,
			dictionary: [
				"username",
				"1994"
			]
		},
		result: true
	},{
		password: "NotSoG00d&Password1994",
		policies: {
			minLength: 10,
			containsLowerCaseLetters: true,
			containsUpperCaseLetters: true,
			containsNumbers: true,
			containsSpecialCharacters: true,
			maxCharacterRepetition: 2,
			dictionary: [
				"username",
				"1994"
			]
		},
		result: false
	},{
		password: "NotSoG000d&Password",
		policies: {
			minLength: 10,
			containsLowerCaseLetters: true,
			containsUpperCaseLetters: true,
			containsNumbers: true,
			containsSpecialCharacters: true,
			maxCharacterRepetition: 2,
			dictionary: [
				"username",
				"1994"
			]
		},
		result: false
	},{
		password: "NotSoG00dPassword",
		policies: {
			minLength: 10,
			containsLowerCaseLetters: true,
			containsUpperCaseLetters: true,
			containsNumbers: true,
			containsSpecialCharacters: true,
			maxCharacterRepetition: 2,
			dictionary: [
				"username",
				"1994"
			]
		},
		result: false
	}
]
