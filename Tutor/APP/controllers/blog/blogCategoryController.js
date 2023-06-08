import { BlogCatModel } from '../../models/blogCategoryModel.js';
import slugify from 'slugify';

const postCategory = async (req, res) => {
  const { title } = req.body;
  try {
    if (title) {
      req.body.slug = slugify(title.toLowerCase());

      const nextCategory = await BlogCatModel.create(req.body);

      res.status(200).json({
        status: true,
        message: 'Category Created successfully',
        nextCategory,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: false,
      message: 'something went wrong',
    });
  }
};

export { postCategory };
