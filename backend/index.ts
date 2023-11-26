import express from 'express';
import cors from "cors"

const app = express();
const port = 3000;

app.use(cors())

app.get('/', (req, res) => {
  return "Hello world"
});


app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
