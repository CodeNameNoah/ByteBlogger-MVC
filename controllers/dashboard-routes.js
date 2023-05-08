const express = require('express');
const router = express.Router();
const sequelize = require('../config/connection');
const db = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const dbPostData = await db.Post.findAll({
      where: { user_id: req.session.user_id },
      attributes: ['id', 'title', 'created_at', 'post_content'],
      include: [
        {
          model: db.Comment,
          attributes: [
            'id',
            'comment_text',
            'post_id',
            'user_id',
            'created_at',
          ],
          include: {
            model: db.User,
            attributes: ['username'],
          },
        },
        {
          model: db.User,
          attributes: ['username'],
        },
      ],
    });

    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.render('dashboard', { posts, loggedIn: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await db.Post.findByPk(req.params.id, {
      attributes: ['id', 'title', 'created_at', 'post_content'],
      include: [
        {
          model: db.Comment,
          attributes: [
            'id',
            'comment_text',
            'post_id',
            'user_id',
            'created_at',
          ],
          include: {
            model: db.User,
            attributes: ['username'],
          },
        },
        {
          model: db.User,
          attributes: ['username'],
        },
      ],
    });

    if (dbPostData) {
      const post = dbPostData.get({ plain: true });

      res.render('edit-post', {
        post,
        loggedIn: true,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
