import path from 'path';
import { dbService } from '../services/db-serivce';

export class CommentModel {
  static path = path.resolve(__dirname, '../../..', 'database', 'comments.json');
  static async find() {
    const comments = await dbService.find(this.path);
    return comments;
  }
}
