const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Model = sequelize.define;

const Comment = Model('comment', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  comment_text: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1]
    }
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id'
    }
  },
  post_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'post',
      key: 'id'
    }
  }
}, {
  freezeTableName: true,
  underscored: true
});

module.exports = Comment;
