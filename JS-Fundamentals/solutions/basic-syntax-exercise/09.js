function login(input) {
  let username = input[0];

  for (let i = 1; i <= 4; i++) {
    let inputPassword = input[i];
    let reverse = [...username].reverse().join("");
    if (inputPassword === reverse) {
      console.log(`User ${username} logged in.`);
      break;
    } else if (i !== 4) {
      console.log("Incorrect password. Try again.");
    } else {
      console.log(`User ${username} blocked!`);
    }
  }
}