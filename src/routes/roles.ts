import { Router } from "express";
import prisma from "../prismaClient";

const router = Router();

router.get("/", async (request, response) => {
    const roles = await prisma.role.findMany({
        include: {
            permissions: true,
        },
    });
    response.json(roles);
});

export default router;