import { NextFunction, Request, Response } from 'express';
import { commentService } from '../services/comment-service';

class CommentController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const comments = await commentService.getAll();
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ message: 'something goes wrong' });
    }
  }
}

export const commentController = new CommentController();
