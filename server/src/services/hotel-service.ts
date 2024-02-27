import { HotelModel } from '../models/hotel-model';
import { Hotel } from '../types/hotel-type';

class HotelService {
  async getAll(): Promise<Hotel[]> {
    const hotels = await HotelModel.find();
    return hotels;
  }

  async getOne(id: number): Promise<Hotel> {
    const hotels = await HotelModel.find();
    const hotel = hotels.find(e => e.id === id);
    if (hotel) {
      return hotel;
    }
    throw new Error('not found');
  }
}

export const hotelService = new HotelService();
