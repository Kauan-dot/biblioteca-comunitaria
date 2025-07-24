import userServices from "../service/user.services.js";

async function createUserController(req, res) {
    const newUser = req.body;
    try {
        const user = await userServices.createUserService(newUser);
        res.status(201).send({user});
    } catch (e) {
        res.status(400).send(e.message);
    }
}

async function findAllUserController(req, res) {
    try {
        const users = await userServices.findAllUsersService();
        res.send({users});
    } catch (e) {
        return res.status(400).send(e.message);
    }
}

async function findUserByIdController(req, res) {
    const {id} = req.params;
    try {
        const user =  await userServices.findUserByIdService(id);
        res.send({ user })
    } catch (e) {
        return res.status(404).send(e.message);
    }
}

async function updateUserController(req, res) {
    const {id} = req.params;
    const newUser = req.body;

    try {
        const use = await userServices.updateUseService(newUser, id);
        res.send({ use });
    } catch (e) {
        return res.status(400).send(e.message);
    }
}

async function deleteUserController(req, res) {
    const {id} = req.params;

    try {
        const message = await userServices.deleteUserService(id);
        res.send({ message });
    } catch (e) {
        return res.status(400).send(e.message);
    }
}

export default {
    createUserController,
    findAllUserController,
    findUserByIdController,
    updateUserController,
    deleteUserController,
}