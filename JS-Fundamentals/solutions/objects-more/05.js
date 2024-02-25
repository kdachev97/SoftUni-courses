function browserHistory(object, array) {
  let openTabs = object['Open Tabs'];
  let browserName = object['Browser Name'];
  let recentlyClosed = object['Recently Closed'];
  let browserLogs = object['Browser Logs'];
  for (let commands of array) {
    let tokens = commands.split(', ');
    let command = tokens.join(' ');
    let action = tokens[0].split(' ')[0];
    let website = tokens[0].split(' ')[1];

    if (action === "Open") {
      openTabs.push(website);
      browserLogs.push(command);
    } else if (action === "Close" && openTabs.includes(website)) {
      openTabs = openTabs.filter((tabToDelete) => {
        if (tabToDelete !== website) {
          return true;
        } else {
          return false;
        }
      })
      recentlyClosed.push(website);
      browserLogs.push(command);
    } else if (command === "Clear History and Cache") {
      openTabs = [];
      recentlyClosed = [];
      browserLogs = [];
    }
  }
  console.log(browserName);
  console.log(`Open Tabs: ${openTabs.join(', ')}`);
  console.log(`Recently Closed: ${recentlyClosed.join(', ')}`);
  console.log(`Browser Logs: ${browserLogs.join(', ')}`);
}