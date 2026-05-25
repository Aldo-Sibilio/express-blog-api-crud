import express from 'express';
import { index, show, create, update, destroy } from '../controllers/posts.js';

const router = express.Router();

// Index - lista di tutti i post
router.get('/', index);

// Show - mostra un singolo post
router.get('/:id', show);

// Create - crea un nuovo post
router.post('/', create);

// Update - modifica un post esistente
router.put('/:id', update);

// Delete - cancella un post
router.delete('/:id', destroy);

export default router;