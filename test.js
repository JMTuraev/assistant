const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();
var faker = require("faker");
const uniqid = require('uniqid');
const md5 = require('md5');
var async=require('async');


let user ;

async function create(data){

	let elements = [];

	for (let index = 0; index < faker.datatype.number({min : 0, max : 120}); index++) {
		elements.push({
            id_u: uniqid("user-"),
            name: faker.company.companyName(),
            category: faker.commerce.department(),
            location: faker.address.streetAddress(),
            lawAddress: faker.address.streetAddress(),
            inn: faker.finance.account(),
            bankAccount: faker.finance.account(),
            mfo: faker.finance.account(),
          })
		
	}

	user = await prisma.user.create({
    data: {
      ...data,
      company: {
        create: elements
      },
    },
    include: {
      company: true, // Include all posts in the returned object
    },
  });

	  console.log(user);

}

function test(params, rse) {
	
	for (let index = 0; index < 10; index++) {
		
		console.log('------------');
	
		create(
			{
				id_u : uniqid('user-'),
				login : faker.internet.userName(),
				// password : md5(faker.internet.password()),
				password : md5('102030'),
				firstName : faker.name.firstName(),
				surName : faker.name.lastName(),
				fatherName : faker.name.firstName(),
				email : faker.internet.email(),
				phone : faker.phone.phoneNumber(),
				userLevel : 'role-hcvd7ol5qnpscw',
				location : faker.address.streetAddress()
			  }
		)
	
		console.log('------------');
	
	}

	console.log(rse);
}

function resultShow(err,results) {
	console.log(new Date());
	if (err) {console.error("---====="+err+"=====---");}
	console.log(results);
	console.log('--------');
}


async.parallel({one: test,two: test},resultShow)

console.log(prisma.user.findMany());