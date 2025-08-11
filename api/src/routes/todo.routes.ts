import { Router } from "express";
import Todo from "../models/todo.model";

const router = Router();

router.get("/", async (req, res) => {
  const todos = await Todo.findAll();
  res.json(todos);
});

router.post("/", async (req, res) => {
  const todo = await Todo.create({ title: req.body.title });
  res.json(todo);
});

router.put("/:id", async (req, res) => {
  const todo = await Todo.findByPk(req.params.id);
  if (!todo) return res.status(404).send("Not found");
  todo.completed = req.body.completed;
  await todo.save();
  res.json(todo);
});

router.delete("/:id", async (req, res) => {
  await Todo.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
});

export default router;
