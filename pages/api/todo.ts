// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { UserSession } from './auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!['POST', 'PATCH', 'DELETE'].includes(req.method || '')) {
    res.status(405).send('Method Not Allowed');
    return;
  }

  const prisma = new PrismaClient();

  const session = (await getSession({ req })) as UserSession;

  if (!session) {
    res.status(401).send('Unauthorized');
    return;
  }

  if (req.method === 'POST') {
    const { title } = JSON.parse(req.body);

    if (!title) {
      return res.status(400).send('Bad Request');
    }

    const todo = await prisma.todo.create({
      data: { title, userId: session.userId, isCompleted: false },
    });

    prisma.$disconnect;
    res.status(200).json(todo);
  }

  //TODO patch and delete requests

  // if (req.method === 'PATCH') {
  //   const todo = await prisma.todo.update();

  //   prisma.$disconnect;
  //   res.status(200).json(todo);
  // }

  // if (req.method === 'DELETE') {
  //   const todo = await prisma.todo.update();

  //   prisma.$disconnect;
  //   res.status(200).json(todo);
  // }
}
