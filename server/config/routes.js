var friends = require('../controllers/friends.js');

module.exports = function(app) {
    app.get('/friends', function(req, res) {
        friends.index(req, res);
    })

    app.get('/friends/show/:id', friends.show)

    app.post('/friends', friends.create)

    app.put('/friends/edit/:id', function(req, res) {
        console.log("found edit route in server");
        friends.update(req, res);
    })

    app.delete('/friends/delete/:id', friends.delete)

}