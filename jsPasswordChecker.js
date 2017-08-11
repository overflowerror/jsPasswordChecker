console.log("jsPasswordChecker");

var PasswordChecker = function(policies) {
	this.policies = policies;
}

PasswordChecker.prototype.policies;

PasswordChecker.prototype.check = function(password) {
	if (this.policies.minLength !== undefined)
		this.checkMinLength(password);
	if (this.policies.maxLength !== undefined)
		this.checkMaxLength(password);
	if (this.policies.containsNumbers !== undefined)
		this.checkContains(password, this.policies.containsNumbers, /[0-9]/g, "numbers");
	if (this.policies.containsLowerCaseLetters !== undefined)
		this.checkContains(password, this.policies.containsLowerCaseLetters, /[a-z]/g, "lowercase characters");
	if (this.policies.containsUpperCaseLetters !== undefined)
		this.checkContains(password, this.policies.containsUpperCaseLetters, /[A-Z]/g, "uppercase characters");
	if (this.policies.containsWhiteSpaces !== undefined)
		this.checkContains(password, this.policies.containsWhiteSpaces, /\s/g, "whitespaces");
	if (this.policies.containsSpecialCharacters !== undefined)
		this.checkContains(password, this.policies.containsSpecialCharacters, /[^a-zA-Z\d\s]/g, "special characters");

	if (this.policies.dictionary !== undefined)
		this.checkDictionary(password);
	if (this.policies.maxCharacterRepetition !== undefined)
		this.checkCharacterRepetition(password);
}

PasswordChecker.prototype.checkMinLength = function(password) {
	if (password.length < this.policies.minLength)
		throw "Password is too short.";
}

PasswordChecker.prototype.checkMaxLength = function(password) {
	if (password.length > this.policies.maxLength)
		throw "Password is too long.";
}

PasswordChecker.prototype.checkContains = function(password, attribute, regex, name) {
	var contains = password.match(regex);
	if (attribute === true && contains === null)
		throw "Password does not contain " + name + ".";
	if (attribute === false && contains !== null)
		throw "Password does contain " + name + ".";
	if (typeof attribute === "number" && attribute > contains.length)
		throw "Password contains too few " + name + ".";
}

PasswordChecker.prototype.checkDictionary = function(password) {
	var dictionary = this.policies.dictionary;
	if (typeof dictionary !== "object") // array
		dictionary = [dictionary];

	for (var i = 0; i < dictionary.length; i++) {
		if (password.toLowerCase().indexOf(dictionary[i].toLowerCase()) >= 0)
			throw "Password contains " + dictionary[i].toLowerCase();
	}
}

PasswordChecker.prototype.checkCharacterRepetition = function(password) {
	var repetition = this.policies.maxCharacterRepetition;

	if (password.length > 0 && repetition <= 1)
		return; // policies don't make any sense

	var currentChar = password.charAt(0);
	var currentRepetition = 1;

	for (var i = 1; i < password.length; i++) {
		var tmp = password.charAt(i);
		if (tmp === currentChar) {
			currentRepetition++;
			if (currentRepetition > repetition)
				throw "The password contains to many identical characters in a row.";
		} else {
			currentChar = tmp;
			currentRepetition = 1;
		}
	}
}
