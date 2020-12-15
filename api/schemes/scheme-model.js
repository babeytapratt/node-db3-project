const db = require('../../data/db-config');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
};

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes')
        .where({ id })
        .first();
}

function findSteps(schemeId) {
    return(db)('steps as s')
        .join('schemes as sc', 'sc.id', 's.schemes_id')
        .select('s.id', 's.step_number', 's.instructions', 's.scheme_id')
        .where('s.scheme_id', schemeId)
}

function add(scheme) {
    return db('schemes')
        .insert(scheme)
        .then(ids => {
            return findById(ids[0]);
        });
}

function update(id, changes) {
    return db('schemes')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('schemes')
        .where('id', id)
        .del();
}
