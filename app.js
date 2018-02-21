const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 9000;

app.use(cookieParser());
app.use(express.static(__dirname + '/public/'));

app.get('/', (req, res) => {
  let cookies = req.cookies;

  if(Object.keys(cookies).length !== 0) {
    res.sendFile(__dirname + '/views/clear.html');
  } else {
    res.sendFile(__dirname + '/views/index.html');
  }
});

app.listen(port, () => console.log(`running on ${port} <3`));
