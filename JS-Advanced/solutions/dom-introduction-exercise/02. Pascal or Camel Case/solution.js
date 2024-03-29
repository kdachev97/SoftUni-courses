function solve() {
  let textElement = document.querySelector('#text');
  let namingConventionElement = document.querySelector('#naming-convention');

  let text = textElement.value;
  let namingConvention = namingConventionElement.value;

  let result = applyNamingConvention(text, namingConvention);

  let spanElement = document.getElementById('result');
  spanElement.textContent = result;

  function applyNamingConvention(text, convention) {
    const conventionSwitch = {
      'Pascal Case': () => text
        .toLowerCase().split(' ')
        .map(x => x[0]
          .toUpperCase() + x.slice(1))
        .join(''),
      'Camel Case': () => text
        .toLowerCase().split(' ')
        .map((x, i) => i !== 0 ? x[0].toUpperCase() + x.slice(1) : x)
        .join(''),
      default: () => 'Error!'
    };

    return (conventionSwitch[convention] || conventionSwitch.default)()
  }
}