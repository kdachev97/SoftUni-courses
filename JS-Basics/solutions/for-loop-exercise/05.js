function salary(input) {
  let numberOfTabs = Number(input[0]);
  let salary = Number(input[1]);

  for (let i = 2; i <= numberOfTabs + 1; i++) {
    let currentTab = input[i];

    if (currentTab === 'Facebook') {
      salary -= 150;
    } else if (currentTab === 'Instagram') {
      salary -= 100;
    } else if (currentTab === 'Reddit') {
      salary -= 50;
    } else {
    }

    if (salary <= 0) {
      console.log('You have lost your salary.');
      return;
    }
  }

  if (salary > 0) {
    console.log(salary);
  }
}