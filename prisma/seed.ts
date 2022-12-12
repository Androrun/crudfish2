import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.creature.upsert({
    where: { title: 'Aliens' },
    update: {},
    create: {
      name: 'Aliens',
      description: 'fictional being from another world.',
      lastSee:
        "Simón Bolívar 1-62 y Manuel Vega",
      countLastSee:12,  
      extint: false,
    },
  });

    const post2 = await prisma.creature.upsert({
    where: { title: 'Vampires' },
    update: {},
    create: {
      name: 'Vampires',
      description: 'leave its grave at night to drink the blood of the living by biting their necks with long pointed canine teeth.',
      lastSee:
        "Calderon Park",
      countLastSee:5,  
      extint: false,
    },
  });



  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });