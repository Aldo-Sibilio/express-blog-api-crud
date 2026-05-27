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

// Store - crea un nuovo post
const create = (request, response) => {

  // leggiamo i dati dal body della request
  const newPost = request.body;

  // stampiamo in console i dati in arrivo
  console.log(newPost);

  // validazione - controlliamo che i campi obbligatori siano presenti
  if (!newPost.title) {
    return response.status(400).json({ message: 'Il titolo è obbligatorio' });
  }

  if (!newPost.content) {
    return response.status(400).json({ message: 'Il contenuto è obbligatorio' });
  }

  // generiamo un nuovo id prendendo l'id più alto nell'array e aggiungendo 1
  const newId = Math.max(...posts.map(post => post.id)) + 1;

  // creiamo il nuovo post con tutti i dati
  const post = {
    id: newId,
    title: newPost.title,
    content: newPost.content,
    image: newPost.image || null,
    tags: newPost.tags || [],
    published: newPost.published || false,
  };

  // aggiungiamo il post all'array
  posts.push(post);

  // restituiamo il nuovo post con status 201 (Created)
  response.status(201).json(post);
};

// Update - modifica un post esistente
const update = (request, response) => {

  const id = parseInt(request.params.id);
  const postIndex = posts.findIndex(post => post.id === id);

  // se il post non esiste restituiamo un errore 404
  if (postIndex === -1) {
    return response.status(404).json({ message: `Post con id ${id} non trovato` });
  }

  // leggiamo i dati dal body della request
  const updatedData = request.body;

  // validazione
  if (!updatedData.title) {
    return response.status(400).json({ message: 'Il titolo è obbligatorio' });
  }

  if (!updatedData.content) {
    return response.status(400).json({ message: 'Il contenuto è obbligatorio' });
  }

  // aggiorniamo il post mantenendo l'id originale
  const updatedPost = {
    ...posts[postIndex],
    ...updatedData,
    id: id,
  };

  // sostituiamo il post nell'array
  posts[postIndex] = updatedPost;

  // restituiamo il post aggiornato
  response.json(updatedPost);
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