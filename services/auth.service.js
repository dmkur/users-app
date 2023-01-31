const { Auth } = require('../dataBase');

module.exports = {
  saveTokens: (tokenInfo) => Auth.create(tokenInfo),
  getOneWithUser: (filter) => Auth.findOne(filter).populate('user'),
  deleteOneByParams: (filter = {}) => Auth.deleteOne(filter),
  deleteByParams: (filter = {}) => Auth.deleteMany(filter)
};
