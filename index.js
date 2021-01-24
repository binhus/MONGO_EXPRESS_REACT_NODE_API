const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./Controllers/index');
const cors = require('cors')


const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors);
app.use(bodyParser.json());
app.use('/', controller);

const errorMiddleware = (err, _req, res, _next) => {
  console.log(err.message);
  if (err.message === "404") {
    return res.status(404).json({ status: 404, message: 'Page not found' });
  }
  const { message } = err;
  return res.status(500).json({ status: 500, message });
};

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`O pai tá ON na porta: ${PORT}`);
});
