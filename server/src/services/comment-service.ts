import { CommentModel } from '../models/comment-model';
import { Comment } from '../types/comment-type';

class CommentService {
  async getAll(): Promise<Comment[]> {
    const comment = await CommentModel.find();
    return comment;
  }
}

export const commentService = new CommentService();
