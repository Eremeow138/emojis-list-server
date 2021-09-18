import { Router } from 'express';
import { StatusCodes } from '../common';
import {
  getAllEmojis,
  getFavoriteEmojis,
  getRemovedEmojis,
} from './repository';

const router = Router();

// Get all emojis
router.get('/', async (req, res) => {
  const allEmojis = await getAllEmojis();
  return res.json(allEmojis);
});
router.get('/favorite', async (req, res) => {
  const favoriteEmojis = await getFavoriteEmojis();
  return res.json(favoriteEmojis);
});
router.get('/removed', async (req, res) => {
  const removedEmojis = await getRemovedEmojis();
  return res.json(removedEmojis);
});

export default router;
