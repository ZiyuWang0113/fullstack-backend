import { Router } from "express";
import { listUsers, createUser } from "../controller/users";

const router = Router();

router.get("/", listUsers);
router.post("/", createUser);

export default router;