const app = require('express')();
app.get('/', (req, res) => {
  res.send('Welcome.');
});
app.listen(2936, function () {
  console.log('Example app listening on port 2936!');
});
