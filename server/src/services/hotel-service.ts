import { HotelModel } from '../models/hotel-model';
import { Hotel } from '../types/hotel-type';

class HotelService {
  async getAll(): Promise<Hotel[]> {
    const hotels = await HotelModel.find();
    return hotels;
  }
}

export const hotelService = new HotelService();
