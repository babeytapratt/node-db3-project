const db = require('../../data/db-config');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
};

function find() {
    return db('steps');
};

function findById(id) {
    return db('steps')
        .where({ id })
        .first();
};

function add(step) {
    return('steps')
        .insert(step)
        .then(ids => {
            return getById(ids[0]);
        })
};

function update(id, changes) {
    return db('steps')
        .where({ id })
        .update(changes);
};

function remove(id) {
    return db('steps')
        .where('id', id)
        .del();
};
