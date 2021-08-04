import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '5mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }))
app.use(cors());

app.use('/user', userRoutes);

app.get('/', (req, res) => {
  res.send('Lets go!!!')
})

const DB_URL = process.env.DB_URL
const PORT = process.env.PORT || 5000

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);