import { Router } from "express";
import {listRoles, createRole} from "../controller/roles";

const router = Router();

router.get("/", listRoles);
router.post("/", createRole);

export default router;