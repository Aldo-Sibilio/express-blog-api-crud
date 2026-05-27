import express from 'express';
import postsRouter from './routers/posts.js';

const app = express();
const port = 3000;

// configurazione per leggere il JSON
app.use(express.json());

// configuriamo la cartella public per gli asset statici
app.use(express.static('public'));

// rotta principale
app.get('/', (request, response) => {
    response.send('Server del mio blog');
});

// registriamo il router dei post con il prefisso /posts
app.use('/posts', postsRouter);

// middleware per le rotte non registrate (404)
app.use((request, response, next) => {
    response.status(404).json({ message: 'Rotta non trovata' });
});

// middleware per la gestione degli errori
app.use((error, request, response, next) => {
    console.error(error);
    response.status(500).json({ message: 'Errore interno del server' });
});

// avviamo il server
app.listen(port, () => {
    console.log('Server avviato');
});
