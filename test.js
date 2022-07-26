const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();
var faker = require("faker");
const uniqid = require('uniqid');
const md5 = require('md5');

let user ;

async function create(table, data){

	user = await prisma[table].create(data);

    const disconnect = await prisma.$disconnect()

}

function test() {
	
	for (let index = 0; index < 2; index++) {
		
		console.log('------------1');
	
		create('user', {data:{
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
    }});
	
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

		console.log('------------2');

	  for (let user of users) {

		for (let index = 0; index < 10; index++) {
			create('company',{
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


			

	  }
	  const disconnect = await prisma.$disconnect()

}

async function create_director() {

	const users = await prisma.user.findMany({
		where: {
		  userLevel: 'role-hcvd7ol5qnpscw'
		},
		select: {
			id_u : true
		  },
	  });

	  let element;

		console.log('------------3');

	  for (let user of users) {
		for (let index = 0; index < 100; index++) {

			create('user',{
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

	  const disconnect = await prisma.$disconnect()

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

		console.log('------------4');
	  
		
		for(a of users){
			
			for(b of a.childRelation[0].parrentRelation.company){

				create('companyRelation',{
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
	  const disconnect = await prisma.$disconnect()

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
	  const disconnect = await prisma.$disconnect()

}

test()
create_company()
create_director()
create_relation_user_company()