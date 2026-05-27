import express from 'express';
import { index, show, create, update, destroy } from '../controllers/posts.js';
import findPost from '../middlewares/post.js';

const router = express.Router();

// Index - lista di tutti i post
router.get('/', index);

// Show - mostra un singolo post
router.get('/:id', findPost, show);

// Create - crea un nuovo post
router.post('/', create);

// Update - modifica un post esistente
router.put('/:id', findPost, update);

// Delete - cancella un post
router.delete('/:id', findPost, destroy);

export default router;