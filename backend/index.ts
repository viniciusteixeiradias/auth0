import express from 'express';
import cors from "cors"
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  console.log("Request /")
  res.json({ message: "Hello world!" })
});


app.post('/user', (req, res) => {
  const receivedUser = req.body;
  console.log('Received User:', receivedUser);
  throw Error("Some error here")
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
