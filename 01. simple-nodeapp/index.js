const experss = require("express");
const app = experss();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world v2.0 ");
});

var server = app.listen(port, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Server started on http://${host}:${port}`);
});
