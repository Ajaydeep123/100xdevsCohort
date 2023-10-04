import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({log: ['info', 'query'],})

async function main() {
    const posts = await prisma.post.findMany({
        include: {
            author: {
                select: {
                    email: true
                }
            }
        }
    });
    console.log(posts);
};

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