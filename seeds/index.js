const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
// ? This code uses ANSI escape codes to change the console text color and improve readability.
// ? The s in %s is a placeholder for the text that we want to print, and the %s after the escape code is where we insert the text we want to print. 
// ? The \x1b[0m resets the color to the default.
  console.log('\x1b[33m%s\x1b[0m', '------------------------');
  console.log('\x1b[32m%s\x1b[0m', '  Database seeded! 🌱  ');
  console.log('\x1b[33m%s\x1b[0m', '------------------------');

  await seedUsers();

  console.log('\x1b[33m%s\x1b[0m', '------------------------');
  console.log('\x1b[32m%s\x1b[0m', '   Users seeded! 👥     ');
  console.log('\x1b[33m%s\x1b[0m', '------------------------');

  await seedPosts();

  console.log('\x1b[33m%s\x1b[0m', '------------------------');
  console.log('\x1b[32m%s\x1b[0m', '   Posts seeded! 📝     ');
  console.log('\x1b[33m%s\x1b[0m', '------------------------');

  await seedComments();

  console.log('\x1b[33m%s\x1b[0m', '------------------------');
  console.log('\x1b[32m%s\x1b[0m', ' Comments seeded! 💬  ');
  console.log('\x1b[33m%s\x1b[0m', '------------------------');

  await seedVotes();

  console.log('\x1b[33m%s\x1b[0m', '------------------------');
  console.log('\x1b[32m%s\x1b[0m', '   Votes seeded! ⭐️    ');
  console.log('\x1b[33m%s\x1b[0m', '------------------------');

  process.exit(0);
};

seedAll();
