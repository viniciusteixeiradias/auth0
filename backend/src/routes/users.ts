import express from "express";
import { jwtCheck } from "../middleware/auth";

const router = express.Router()

router.post('/', (req, res) => {
  const user = req.body;
  res.json({ user })
});

router.get('/permissions', jwtCheck, (req, res) => {
  const permissions = req.auth?.payload["permissions"] || []
  res.json(permissions);
})

export default router;