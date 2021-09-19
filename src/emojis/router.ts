import { Router } from 'express';
import { StatusCodes } from '../common';
import { Emoji } from './emoji';
import {
  getAllEmojis,
  getFavoriteEmojis,
  getRemovedEmojis,
  setToFavoriteEmojis,
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

router.put('/setFavorite', async (req, res) => {
  const name = req.body as Emoji;
  try {
    const updatedEmoji = await setToFavoriteEmojis(name);
    return res.json(updatedEmoji);
  } catch (e) {
    return res.status(StatusCodes.NotFound).send(e);
  }
});

export default router;
