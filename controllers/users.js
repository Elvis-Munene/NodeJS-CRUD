const { v4: uuidv4 } = require('uuid');

const users = [];

const getUsers = (req, res) => {
    console.log(users);
    res.send(users);
};

const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User with the name ${user.name} added to the database!`);
};

const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    const indexToRemove = users.findIndex((user) => user.id === id);

    if (indexToRemove !== -1) {
        users.splice(indexToRemove, 1);
        res.send(`User with the id ${id} deleted from the database.`);
    } else {
        res.status(404).send(`User with the id ${id} not found.`);
    }
};

const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, LastName, age } = req.body;
    const user = users.find((user) => user.id === id);

    if (name) user.name = name;
    if (LastName) user.LastName = LastName;
    if (age) user.age = age;

    res.send(`User with the id ${id} has been updated`);
};

module.exports = {
    getUsers,
    createUser,
    getUser,
    deleteUser,
    updateUser,
};
