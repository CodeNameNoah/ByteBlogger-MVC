const { Post } = require('../models');

const postdata = [
  {
    title: "Why do programmers wear glasses?",
    content: "Because they can't C# 😂 Check out more programming jokes at https://www.reddit.com/r/ProgrammerHumor/",
    user_id: 1
  },
  {
    title: "My dog is smarter than I thought",
    content: "Today I taught my dog how to play chess, and he beat me in three moves. 😅 Check out more amazing dog tricks at https://www.youtube.com/user/gone2thedogs",
    user_id: 2
  },
  {
    title: "I tried to organize a hide and seek competition",
    content: "But it was a complete failure. Good players are hard to find. 🤣 Check out more funny jokes at https://www.jokes4us.com/miscellaneousjokes/cleanjokes.html",
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
