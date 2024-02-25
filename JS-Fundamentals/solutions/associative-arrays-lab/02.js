function meetings(appointments) {
  let schedule = {};
  let successfulMeetings = [];

  appointments.forEach(appointment => {
    let [day, name] = appointment.split(' ');

    if (schedule[day]) {
      console.log(`Conflict on ${day}!`);
    } else {
      schedule[day] = name;
      console.log(`Scheduled for ${day}`);
      successfulMeetings.push(`${day} -> ${name}`);
    }
  });

  successfulMeetings.forEach(meeting => {
    console.log(meeting);
  });
}