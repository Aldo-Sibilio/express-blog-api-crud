import posts from '../data/posts.js';

// Index - restituisce la lista di tutti i post
const index = (request, response) => {
  response.json(posts);
};

// Show - restituisce un singolo post
const show = (request, response) => {
  const id = parseInt(request.params.id);
  const post = posts.find(post => post.id === id);

  // se il post non esiste restituiamo un errore 404
  if (!post) {
    return response.status(404).json({ message: `Post con id ${id} non trovato` });
  }

  response.json(post);
};

// Create - crea un nuovo post
const create = (request, response) => {
  response.json({ message: 'Creazione di un nuovo post' });
};

// Update - modifica un post esistente
const update = (request, response) => {
  const id = request.params.id;
  response.json({ message: `Modifica del post ${id}` });
};

// Destroy - cancella un post
const destroy = (request, response) => {
  const id = parseInt(request.params.id);
  const postIndex = posts.findIndex(post => post.id === id);

  // se il post non esiste restituiamo un errore 404
  if (postIndex === -1) {
    return response.status(404).json({ message: `Post con id ${id} non trovato` });
  }

  // rimuoviamo il post dall'array
  posts.splice(postIndex, 1);

  // stampiamo in console l'array aggiornato
  console.log(posts);

  response.json({ message: `Post con id ${id} eliminato con successo` });
};
export { index, show, create, update, destroy };