import { NextApiRequest, NextApiResponse } from 'next';
import got from 'got';

import { parseMLProductToItem } from '../../../utils/index';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { ML_API } = process.env;
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({
      error: 'Missing query parameter: id',
    });
  }

  try {
    const [product, description]: Record<string, unknown>[] = await Promise.all(
      [
        got(`${ML_API}/items/${id}`).json(),
        got(`${ML_API}/items/${id}/description`).json(),
      ]
    );

    const categories: { path_from_root: Record<string, unknown>[] } = await got(
      `${ML_API}/categories/${product.category_id}`
    ).json();

    const results = {
      author: {
        name: 'Santiago',
        lastname: 'Semhan',
      },
      categories: categories.path_from_root.map((c) => c.name),
      item: {
        ...parseMLProductToItem(product),
        description: description.plain_text,
      },
    };
    return res.status(200).json(results);
  } catch (error) {
    let status = 500;
    if (error.message === 'Response code 404 (Not Found)') {
      status = 404;
    }
    return res.status(status).json({
      error,
    });
  }
};

export default handler;
