const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'codenamenoah',
    email: 'breakingbad@jp.com',
    password: 'password012'
  },
  {
    username: 'CindyLu',
    email: 'cindy.lu@example.com',
    password: 'password123'
  },
  {
    username: 'NelsonCalderon',
    email: 'nelson.calderon@example.com',
    password: 'password456'
  },
  {
    username: 'MatthewNacua',
    email: 'matthew.nacua@example.com',
    password: 'password789'
  },
  {
    username: 'JoshuaGeka',
    email: 'joshua.geka@example.com',
    password: 'passwordabc'
  },
  {
    username: 'HannahKlevann',
    email: 'hannah.klevann@example.com',
    password: 'passworddef'
  },
  {
    username: 'EmilyChao',
    email: 'emily.chao@example.com',
    password: 'passwordghi'
  },
  {
    username: 'MauricioMedina',
    email: 'mauricio.medina@example.com',
    password: 'passwordjkl'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;