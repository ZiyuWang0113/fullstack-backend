import express from "express";
import prisma from "./prismaClient";

const app = express();

app.get('/', (request, response) => {
    console.log("Got request")
    response.send("I got you request!")
})

app.get('/roles', async (request, response) => {
    const roles = await prisma.role.findMany({
        include: {
            permissions: true,
        },
    });
    response.json(roles);
})

app.listen(8888, () => {
    console.log('Server is running on port 8888')
})