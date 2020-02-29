var user = require('./../Models/user');
let checkLogin = async (username, password) => {
    let User = await user.find({
        username: username,
        password: password
    })
    return User;
}
module.exports = {
    checkLogin
}