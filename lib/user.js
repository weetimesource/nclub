var User = require('../models').User;
// 新建一个用户
exports.addUser = function(data){
    return User.create(data);
};
// 通过id查询用户
exports.getUserById = function(id){
    return User.findById(id).exec();
};
// 通过name 查询用户
exports.getUserByName = function(name){
    return User.findOne({name:name}).exec();
};