import express from 'express';
import cors from 'cors';
import routes from './Routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333);