import express from 'express';
import { createUser, getAllUsers, getUserById } from '../controller/userController.js';
// import { get } from 'mongoose';

const route = express.Router();
route.post('/create-user', createUser)
route.get('/get-users', getAllUsers)
route.get('/get-users/:id', getUserById)


export default route;