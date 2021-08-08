const router = require('express').Router();
const Blogs = require('../models/Blogs');

router.get('/', async (req, res) => {
  const blogData = await Blogs.findAll().catch((err) => { 
    res.json(err);
  });

const blogsD = blogData.map((blog) => blog.get( { plain: true }));
res.render('homepage', { blogsD });
    });



router.get('/blogs/:id', async (req, res) => {
    try {
      const blogData = await Blogs.findByPk(req.params.id);
      console.log(blogData)
      const blogD = blogData.get({ plain: true});
      res.render('homepage', blogD);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;