const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();
var faker = require("faker");
const uniqid = require('uniqid');
const md5 = require('md5');

let user ;

async function create(data){

	user = await prisma.user.create({
    data: {
      ...data,
    },
  });
}

function test() {
	
	for (let index = 0; index < 2; index++) {
		
		console.log('------------');
	
		create({
      id_u: uniqid("user-"),
      login: faker.internet.userName(),
      // password : md5(faker.internet.password()),
      password: md5("102030"),
      firstName: faker.name.firstName(),
      surName: faker.name.lastName(),
      fatherName: faker.name.firstName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      userLevelRelation: {
        // connect: { id: faker.datatype.number({ min: 1, max: 4 }) },
        connect: { id: 1 },
      },
      location: faker.address.streetAddress(),
    });
	
	}
}


async function create_company() {
	
	const users = await prisma.user.findMany({
		where: {
		  userLevel: 'role-hcvd7ol5qnpscw'
		},
		select: {
			id_u : true
		  },
	  });

	  let element;

	  for (let user of users) {

		for (let index = 0; index < 10; index++) {
			element = await prisma.company.create({
				data : {

					id_u: uniqid("company-"),
					name: faker.company.companyName(),
					category: faker.commerce.department(),
					location: faker.address.streetAddress(),
					lawAddress: faker.address.streetAddress(),
					inn: faker.finance.account(),
					bankAccount: faker.finance.account(),
					mfo: faker.finance.account(),
					ownerRelation: {
						connect: { id_u: user['id_u'] },
					},
				}
			})

		}


			for (let index = 0; index < 2; index++) {
        user = await prisma.user.create({
          data: {
            id_u: uniqid("user-"),
            login: faker.internet.userName(),
            // password : md5(faker.internet.password()),
            password: md5("102030"),
            firstName: faker.name.firstName(),
            surName: faker.name.lastName(),
            fatherName: faker.name.firstName(),
            email: faker.internet.email(),
            phone: faker.phone.phoneNumber(),
            userLevelRelation: {
              connect: { id: 2 },
            },
            childRelation: {
              create: [
                {
                  id_u: uniqid("userRelation-"),
                  parrentRelation: {
                    // connect: { id: faker.datatype.number({ min: 1, max: 4 }) },
                    connect: { id_u: user["id_u"] },
                  },
                },
              ],
            },
            location: faker.address.streetAddress(),
          },
          include: {
            childRelation: true, // Include all posts in the returned object
          },
        });
      }


		

	  }

}

async function create_relation_user_company() {
	const users = await prisma.user.findMany({
		where: {
		  userLevel: 'role-hcvd2swl5wiuit9'
		},
		include: {
			childRelation: {
				include : {
					parrentRelation : {
						include : {
							company : true
						}
					}
				}
			},
		  },
	  });

	  
	  for(a of users){
		  
		  for(b of a.childRelation[0].parrentRelation.company){
			  console.log( b );

				const users = await prisma.companyRelation.create({
					data : {
						id_u: uniqid("companyRelation-"),
						userRelation : {
							connect : {

								id_u : a.id_u
							}
						},
						companyRelation : {
							connect : {

								id_u : b.id_u
							}
						}
					}
				})

		  }

	  }

}

async function tes() {
	
	const users = await prisma.user.findMany({
		where: {
		  userLevel: 'role-hcvd2swl5wiuit9'
		},
		include: {
			companyRelation: {
				include : {
					companyRelation : true
					}
				}
			},
	  });

}

// test()
// create_company()
create_relation_user_company()

tes()