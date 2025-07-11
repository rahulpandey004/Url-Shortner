const express = require('express');
const router = express.Router();
const Url = require('../models/Url');
const { nanoid } = require('nanoid');
const validUrl = require('valid-url');

const BASE_URL = "http://localhost:3000";

// POST /shorten
router.post('/shorten', async (req, res) => {
  const { url } = req.body;

  if (!validUrl.isUri(url)) {
    return res.status(400).json({ error: 'Invalid URL' });
  }

  const shortCode = nanoid(6);
  const newUrl = new Url({ originalUrl: url, shortCode });

  await newUrl.save();
  return res.json({ shortUrl: `${BASE_URL}/${shortCode}` });
});

// GET /:code
router.get('/:code', async (req, res) => {
  const { code } = req.params;
  const found = await Url.findOne({ shortCode: code });

  if (!found) return res.status(404).json({ error: 'Short URL not found' });

  found.clickCount++;
  await found.save();

  return res.redirect(found.originalUrl);
});

module.exports = router;
