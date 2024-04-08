import { PrismaClient } from "@prisma/client";

async function getNames() {
  const prisma = new PrismaClient();
  await prisma.$connect();

  const names = await prisma.user.findMany();
  return names;

}

export default async function Home() {
  const names = await getNames()

  return (
    <main>
      <div className="flex flex-col gap-9">
        {
          names.map((name, index) => {
            return (
              <div className="font-bold bg-emerald-400" key={index}>
                {JSON.stringify(name)}
              </div>
            )
          })
        }
      </div>
    </main>
  );
}
