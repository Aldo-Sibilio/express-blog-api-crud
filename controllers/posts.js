import posts from '../data/posts.js';

// Index - restituisce la lista di tutti i post
const index = (request, response) => {
  response.json(posts);
};

// Show - restituisce un singolo post
const show = (request, response) => {
  console.log('show chiamato');
  console.log('request.post:', request.post);
  response.json(request.post);
};

// Store - crea un nuovo post
const create = (request, response) => {
  const newPost = request.body;
  console.log(newPost);

  if (!newPost.title) {
    return response.status(400).json({ message: 'Il titolo è obbligatorio' });
  }
  if (!newPost.content) {
    return response.status(400).json({ message: 'Il contenuto è obbligatorio' });
  }

  const newId = Math.max(...posts.map(post => post.id)) + 1;

  const post = {
    id: newId,
    title: newPost.title,
    content: newPost.content,
    image: newPost.image || null,
    tags: newPost.tags || [],
    published: newPost.published || false,
  };

  posts.push(post);
  response.status(201).json(post);
};

// Update - modifica un post esistente
const update = (request, response) => {
  const post = request.post;
  const postIndex = posts.findIndex(p => p.id === post.id);
  const updatedData = request.body;

  if (!updatedData.title) {
    return response.status(400).json({ message: 'Il titolo è obbligatorio' });
  }
  if (!updatedData.content) {
    return response.status(400).json({ message: 'Il contenuto è obbligatorio' });
  }

  const updatedPost = {
    ...post,
    ...updatedData,
    id: post.id,
  };

  posts[postIndex] = updatedPost;
  response.json(updatedPost);
};

// Destroy - cancella un post
const destroy = (request, response) => {
  const post = request.post;
  const postIndex = posts.findIndex(p => p.id === post.id);

  posts.splice(postIndex, 1);
  console.log(posts);

  response.json({ message: `Post con id ${post.id} eliminato con successo` });
};

export { index, show, create, update, destroy };