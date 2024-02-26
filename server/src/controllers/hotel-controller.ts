import { NextFunction, Request, Response } from 'express';
import { Hotel } from '../types/hotel-type';
import { hotelService } from '../services/hotel-service';

class HotelController {
  async getHotels(req: Request, res: Response, next: NextFunction) {
    try {
      const hotels: Hotel[] = await hotelService.getAll();
      res.status(200).json(hotels);
    } catch (error) {
      res.status(500).send('something wrong happened');
    }
  }
}

export const hotelController = new HotelController();
