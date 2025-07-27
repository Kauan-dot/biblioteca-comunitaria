import jwt from 'jsonwebtoken';
import 'dotenv/config';
import userRepository from '../repositories/user.repositories.js';
import bcrypt from 'bcrypt';

function generateJWT(id) {
    return jwt.sign(
        { id }, 
        process.env.SECRET_JWT,
        { expiresIn: 86400 }
    );
}

async function loginService(email, password) {
    const user = await userRepository.findUserByEmailRepository(email);
    if (!user) throw new Error('Invalid user!')
    const isPassWordValid = await bcrypt.compare(password, user.password);
    if (!isPassWordValid) throw new Error('Invalid user!');
    return generateJWT(user.id);
}

export { generateJWT, loginService };