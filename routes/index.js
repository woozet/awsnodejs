
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'SK Planet Node.js API Server Stack' });
};
