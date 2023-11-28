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
  const user = req.body;
  console.log('Received User:', user);
  res.json({ user })
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
