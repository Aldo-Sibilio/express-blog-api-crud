import express from 'express';
import postsRouter from './routers/posts.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (request, response) => {
  response.send('Server del mio blog');
});

app.use('/posts', postsRouter);

app.use(express.static('public'));

app.use((request, response, next) => {
  response.status(404).json({ message: 'Rotta non trovata' });
});

app.use((error, request, response, next) => {
  console.error(error);
  response.status(500).json({ message: 'Errore interno del server' });
});

app.listen(port, () => {
  console.log('Server avviato');
});