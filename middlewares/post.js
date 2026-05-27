import posts from '../data/posts.js';

const findPost = (request, response, next) => {
  const id = parseInt(request.params.id);

  // cerchiamo il post nell'array
  const post = posts.find(post => post.id === id);

  // se il post non esiste restituiamo un errore 404
  if (!post) {
    return response.status(404).json({ message: `Post con id ${id} non trovato` });
  }

  // aggiungiamo il post alla request così è disponibile nei controller
  request.post = post;

  // passiamo al prossimo middleware o controller
  next();
};

export default findPost;