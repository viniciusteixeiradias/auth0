import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors"

/* Routes */
import userRoutes from "./routes/users"

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors({ origin: process.env.ORIGIN }));

app.get("/", (_, res) => {
  res.json({ message: "Hello World" })
})

app.use("/users", userRoutes)

app.listen(port, () => {
  console.info('Running on port ', port)
});

