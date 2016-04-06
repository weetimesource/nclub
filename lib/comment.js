var Comment = require('../models').Comment;
// 添加一条评论
exports.addComment = function(data){
    return Comment.create(data);
};
// 根据话题id获取评论数
exports.getCommentByTopicId = function(id){
    return Comment.find({topic_id:id}).sort('update_at');
};