const { Auth } = require('../dataBase');

module.exports = {
  saveTokens: (tokenInfo) => Auth.create(tokenInfo),
  getOneWithUser: (filter) => Auth.findOne(filter).populate('user'),
  getOneByParams: (filter) => Auth.findOne(filter),
  deleteOneByParams: (filter = {}) => Auth.deleteOne(filter),
  deleteByParams: (filter = {}) => Auth.deleteMany(filter),
  deleteMany: (filter = {}) => Auth.deleteMany(filter)
};
