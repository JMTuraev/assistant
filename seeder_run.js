const { PrismaClient } = require('@prisma/client');
const { role } = require('./data_sed.js');

const load = async () => {
const prisma = new PrismaClient();

    console.log(prisma);
    try {

        await prisma.role.createMany({
            data: role
        });
        console.log("Added category data");

    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    };
}

load();