const db = require('../../data/db-config');

module.exports = {
    find,
    findById,
    addStep,
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

function addStep(scheme, id) {
    return db('steps')
        .insert(scheme, id)
        .then(ids => {
            return findById(ids[0]);
        });
}


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
