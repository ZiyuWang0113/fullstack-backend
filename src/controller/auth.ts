import { Request, Response } from "express";
import prisma from "../prismaClient";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {CONFIG} from "../config";

export const login = async (request: Request, response: Response) => {
    const { email, password } = request.body;
    const user = await prisma.user.findUnique({
        where: { email: email },
        include: {password: true, role: true}
    })
    if (!user || !user.password) {
        response.status(404).send("User not found")
        return;
    }

    if (!bcrypt.compareSync(password, user.password.hash)) {
        response.status(401).send("Invalid password")
        return
    }
    // Generate JWT token
    const userPayload = {
        userId: user.id,
        roleId: user.role.id
    }

    const token = jwt.sign(userPayload, CONFIG.JWT_SECRET, { expiresIn: '1d' })
    response.json({
        token: token,
        id: user.id,
        name: user.name,
        email: user.email,
        message: "Login successful",
    })
}

