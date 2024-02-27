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

  async getNearbys(id: number): Promise<Hotel[]> {
    const hotels = await HotelModel.find();
    const hotel = hotels.find(e => e.id === id);
    if (hotel) {
      const city = hotel.city.name;
      const nearbys = hotels.filter(e => {
        return (e.city.name === city) && (e.id !== id)
      });
      if (nearbys.length > 3) {
        nearbys.length = 3;
      }
      return nearbys;
    }
    throw new Error('not found');
  }
}

export const hotelService = new HotelService();
