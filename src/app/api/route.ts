import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client';

export async function POST(req: Request) {
  const { name } = await req.json();

  const prisma = new PrismaClient();
  await prisma.$connect();


  const name_list = await prisma.user.create({ data: { name }});
 
  await prisma.$disconnect();
  return NextResponse.json({ name_list })
}