import { Router } from "express";
import { authRequired } from '../middlewares/validateToken.js';
import { getTask, getTasks, updateTask, deleteTask, createTask } from "../controllers/tasks.controller.js";
import { createTaskSchema } from "../schemas/task.schema.js"
import { validateSchema } from "../middlewares/validator.middleware.js";

const router = Router()

router.get('/tasks', authRequired, getTasks )
router.post(
  '/tasks', 
  authRequired,
  validateSchema(createTaskSchema),
  createTask
)
router.get('/tasks/:id', authRequired, getTask )
router.delete('/tasks/:id', authRequired, deleteTask )
router.put('/tasks/:id', authRequired, updateTask )

export default router