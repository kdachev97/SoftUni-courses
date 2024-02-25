function passwordValidator(pass) {
  let isValidLength = checkLengthPass(pass);
  let hasOnlyLettersDigits = checkOnlyLettersDigits(pass);
  let hasMin2Digits = checkDigitsCount(pass);

  if (isValidLength && hasOnlyLettersDigits && hasMin2Digits) {
    console.log('Password is valid');
  }

  function checkLengthPass(password) {
    if (password.length < 6 || password.length > 10) {
      console.log('Password must be between 6 and 10 characters');
      return false;
    }

    return true;
  }

  function checkOnlyLettersDigits(password) {
    let pattern = /^[A-Za-z0-9]+$/;

    let isValid = pattern.test(password);

    if (isValid) {
      return true;
    }

    console.log('Password must consist only of letters and digits');
    return false;
  }

  function checkDigitsCount(password) {
    let pattern = /[0-9]{2,}/;

    let isValid = pattern.test(password);

    if (isValid) {
      return true;
    }

    console.log('Password must have at least 2 digits');
    return false;
  }
}