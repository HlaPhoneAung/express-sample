var id = 1;
var tasks = [

]

module.exports = {
    findAll: function() {
        return tasks;
    },
    add: function(task) {
        task.id = id;
        tasks.push(task);
        id++;
    },
    findById: function(id) {
        for(var i=0; i < tasks.length; i++){
            var task = tasks[i];
            if (task.id == id) {
                return task;
            }
        }
        return {}; 
    }
}