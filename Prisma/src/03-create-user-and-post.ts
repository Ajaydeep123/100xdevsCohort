
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
     email: "harkirat3@gmail.com",
     name: "harkriat",
     posts: {
        create: [
            {
                title: "harkirats title1"
            },
            {
                title: "harkirats title2"
            },
        ]
     }
    }
  })
}

main()
  .then(async () => {
    console.log("done");
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })