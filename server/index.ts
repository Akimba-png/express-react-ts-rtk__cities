import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { hotelRouter } from './src/routers/hotel-router';

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('src'));
app.use('/', (req, res) => { res.send('hello')});

app.listen(PORT, () => console.log(`App is listeninig on port ${PORT}`));
