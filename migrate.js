const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

console.log( '--------' );

async function main() {

        mas = [
                {
                  id_u: "role-hcvd7ol5qnpscw",
                  name: "Owner",
                  level: 1,
                },
                {
                  id_u: "role-hcvd2swl5wiuit9",
                  name: "Director",
                  level: 2,
                },
                {
                  id_u: "role-hcvd2swl5wiuxkd",
                  name: "Administrator",
                  level: 3,
                },
                {
                  id_u: "role-hcvd2swl5wivaqt",
                  name: "Saler",
                  level: 4,
                },
              ];
        
        const res = await prisma.role.createMany({
                data : mas
        })
}

main()