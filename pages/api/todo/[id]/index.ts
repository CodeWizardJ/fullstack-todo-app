import prisma from '../../../../prisma/db';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { UserSession } from '../../auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!['PATCH', 'DELETE'].includes(req.method || '')) {
    res.status(405).send('Method Not Allowed');
    return;
  }

  const session = (await getSession({ req })) as UserSession;

  if (!session) {
    res.status(401).send('Unauthorized');
    return;
  }

  if (req.method === 'PATCH') {
    const { id } = req.query;
    const parsedBody = JSON.parse(req.body);

    const todo = await prisma?.todo.update({
      where: {
        id: String(id),
      },
      data: { ...parsedBody },
    });

    res.status(200).json(todo);
  }

  if (req.method === 'DELETE') {
    const { id } = req.query;

    const todo = await prisma?.todo.delete({
      where: {
        id: String(id),
      },
    });

    res.status(200).json(todo);
  }
}
