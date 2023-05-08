const { Comment } = require('../models');

const commentdata = [
  {
    content: "Why don't scientists trust atoms? Because they make up everything!",
    user_id: 1,
    post_id: 1
  },
  {
    content: "I tried to start a hot air balloon business, but it never took off.",
    user_id: 2,
    post_id: 1
  },
  {
    content: "Why did the tomato turn red? Because it saw the salad dressing!",
    user_id: 3,
    post_id: 2
  },
  {
    content: "I'm reading a book on anti-gravity. It's impossible to put down!",
    user_id: 4,
    post_id: 2
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;