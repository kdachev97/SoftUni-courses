function extractEmails(input) {
  let emailPattern = /\s([0-9A-Za-z][\w.-]*[A-Za-z0-9]|[A-Za-z0-9])@([A-Za-z][-a-zA-Z]*[A-Za-z]|[A-Za-z])(\.([A-Za-z][-a-zA-Z]*[A-Za-z]|[A-Za-z]))+/g;
  let resultsArray = input.match(emailPattern);

  if (resultsArray) {
    for (let result of resultsArray) {
      console.log(result);
    }
  }
}