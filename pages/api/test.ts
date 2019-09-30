import { NextApiRequest, NextApiResponse } from 'next';

const asyncTask = (waitMs: number) =>
  new Promise(resolve => {
    console.log('Beginning asyncTask...');
    setTimeout(resolve, waitMs);
  });

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json('OK');
  (async () => {
    await asyncTask(100);
    console.log('asyncTask complete');
  })();
};
