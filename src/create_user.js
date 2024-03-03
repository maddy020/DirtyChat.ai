const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Tom",
      email: "tom@gmail.com",
      password: "1234",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.log("Error", error);
    await prisma.$disconnect();
    process.exit(1);
  });
