const { html } = require("../util");

function homePage(req, res) {
  res.write(html(`
<h1>Home Page</h1>
`));
  res.end();
}

function aboutPage(req, res) {
  res.write(html(`
  <h1>About Us</h1>
`));
  res.end();
}

function defaultPage(req, res) {
  res.statusCode = 404;
  res.write(html(`
  <h1>404 Not Found</h1>
`));
  res.end();
}

module.exports = {
  homePage,
  aboutPage,
  defaultPage
}