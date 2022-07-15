import { PrismaClient } from '@prisma/client'

function Blog(props) {
    const {users}=props

    return (

        <div>
            <ul>      
            {users.map((user) => (
                <>
                    <li>{user.name}</li>
                    <li>{user.phone}</li>
                </>
                ))}
            </ul>
        </div>
      )
  }
  
  // This function gets called at build time
  export async function getServerSideProps() {
    // Call an external API endpoint to get posts

    const prisma = new PrismaClient()

    // const newUser = await prisma.user.create({
    //     data: {
    //       name: 'Alicesss',
    //       email: 'alicssssssse@prisssma.io',
    //       phone: 998,
    //     },
    //   })
      
    const users = await prisma.user.findMany()

    console.log(users);
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        users,
      },
    }
  }
  
  export default Blog
  