// Index - restituisce la lista di tutti i post
const index = (request, response) => {
  response.json({ message: 'Lista dei post' });
};

// Show - restituisce un singolo post
const show = (request, response) => {
  const id = request.params.id;
  response.json({ message: `Dettaglio del post ${id}` });
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

// Delete - cancella un post
const destroy = (request, response) => {
  const id = request.params.id;
  response.json({ message: `Cancellazione del post ${id}` });
};

export { index, show, create, update, destroy };