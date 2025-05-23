import express from 'express';
import { createUser, deleteUserData, getAllUsers, getUserById, updateUserData } from '../controller/userController.js';
// import { get } from 'mongoose';

const route = express.Router();
route.post('/create-user', createUser)
route.get('/get-users', getAllUsers)
route.get('/get-users/:id', getUserById)
route.put('/user-update/:id', updateUserData)
route.delete('/user-delete/:id', deleteUserData )


export default route;