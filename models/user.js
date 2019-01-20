var id = 2;
var users = [
    { id: 1, name: 'user1', email: 'user1@email.com'}
]

module.exports = {
    findAll: function() {
        return users;
    },

    add: function(user) {
        user.id = id;
        users.push(user);
        id++;
    },

    findById: function(id) {
        return users.find(function(user) {
            return user.id == id;
        });
        return {};
    }
}