/* eslint-disable no-console */
import express, { json, urlencoded } from 'express';

import cors from 'cors';
import emojis from './emojis/router';

const app = express();
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cors());

app.use('/api/emojis', emojis);
app.use('/api/emojis/favorite', emojis);

app.listen(3000, () => console.log('Server started on http://localhost:3000'));
