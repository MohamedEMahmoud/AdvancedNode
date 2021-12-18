const { clearHash } = require('../services/cache');

module.exports = async (req, res, next) => {
    await next();//  middleware execute after controller الميدل وير هتتنفذ بعدالكونتروللر 
    clearHash(req.user.id);
}