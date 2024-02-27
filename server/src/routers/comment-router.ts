import { Router } from 'express';
import { commentController } from '../controllers/comment-controller';

const commentRouter = Router();

commentRouter.get('/:id', commentController.getAll);

export { commentRouter };
