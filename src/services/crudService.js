const connection = require('../config/database');


const getAllUser = async () => {
    const[results, fields] = await connection.query('Select * from Users u')
    return results;
}

const getUserById = async (id) => {
    const[results, fields] = await connection.query('Select * from Users u where u.id = ?', [id])
    let user = results && results.length ? results[0] : {};
    return user;
}

const postUpdateUserById = async (id, name, email, city) => {
    const[results, fields] = await connection.query('Update Users set name = ?, email = ?, city = ? where id = ?', [name, email, city, id])
    return results;
}

const getDeleteUserById = async (id) => {
    const[results, fields] = await connection.query('Delete from Users where id = ?', [id])
    return results;
}

module.exports = {
    getAllUser,
    getUserById,
    postUpdateUserById,
    getDeleteUserById
}