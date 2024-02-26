import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', (req, res) => { res.send('hello')});

app.listen(PORT, () => console.log(`App is listeninig on port ${PORT}`));
