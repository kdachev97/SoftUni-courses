function convertToJSON(name, lastName, hairColor) {
  let result = {
    name,
    lastName,
    hairColor
  };

  console.log(JSON.stringify(result));
}