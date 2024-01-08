import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.member.createMany({
    data: [
      { name: 'Joe', gender: 'Male' },
      { name: 'Jeny', gender: 'Female' },
      { name: 'Anna', gender: 'Female' },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
