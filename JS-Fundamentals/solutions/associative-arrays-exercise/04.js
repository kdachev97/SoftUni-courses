function partyTime(guestList) {
  let indexOfParty = guestList.indexOf('PARTY');
  let digitList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  let vip = [];
  let regular = [];

  for (let i = 0; i < indexOfParty; i++) {
    let currentGuest = guestList[i];

    if (digitList.includes(currentGuest[0])) {
      vip.push(currentGuest);
    } else {
      regular.push(currentGuest);
    }
  }

  for (let i = indexOfParty + 1; i < guestList.length; i++) {
    let currentGuest = guestList[i];

    if (vip.includes(currentGuest)) {
      vip.splice(vip.indexOf(currentGuest), 1);
    } else if (regular.includes(currentGuest)) {
      regular.splice(regular.indexOf(currentGuest), 1);
    }
  }

  let totalGuestsLeft = vip.length + regular.length;
  console.log(totalGuestsLeft);
  console.log(vip.join('\n'));
  console.log(regular.join('\n'));
}