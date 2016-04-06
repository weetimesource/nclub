var Comment = require('./comment');
var User = require('./user');
var Topic = require('./Topic');

module.exports = {
    get $User(){
        return User;
    },
    get $Comment(){
        return Comment;
    },
    get $Topic(){
        return Topic;
    }
};