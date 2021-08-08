const { Blogs } = require('../models');

const blogdata = [

  {
    "title": "Music Near Me",
    "blogText": "A mobile app that will send you notifications whenever a concert is playing in your area.",
    "user_id": 1
  },
  {
    "title": "The Ultimate Tech Quiz",
    "blogText": "A web app that will give users 10 new technical questions each day and track their progress in things like programming, cybersecurity, database architecture, and more!",
    "user_id": 3
  },
  {
    "title": "Roll 'Em Up",
    "blogText": "A game for Windows and macOS where players move a ball through a series of increasingly challenging mazes.",
    "user_id": 2
  }
];

const seedBlogs = () => Blogs.bulkCreate(blogdata);

module.exports = seedBlogs;