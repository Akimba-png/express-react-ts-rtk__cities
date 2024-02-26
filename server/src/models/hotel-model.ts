import path from 'path';
import { dbService } from '../services/db-serivce';
import { Hotel } from '../types/hotel-type';

export class HotelModel {
  static path = path.resolve(__dirname, '..', 'database', 'hotels.json');
  static async find() {
    const data: Hotel[] = await dbService.find(this.path);
    return data;
  }
}
