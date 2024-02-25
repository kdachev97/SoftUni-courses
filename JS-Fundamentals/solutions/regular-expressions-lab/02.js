function matchPhoneNumber(input) {
  let pattern = /\+359([ |-])2\1(\d{3})\1(\d{4})\b/g;
  let result = [];

  let match = pattern.exec(input);

  while (match !== null) {

    result.push(match[0]);

    match = pattern.exec(input);
  }
  console.log(result.join(', '));
}