import { NextFunction, Request, Response } from 'express';
import { Hotel } from '../types/hotel-type';
import { hotelService } from '../services/hotel-service';

class HotelController {
  async getHotels(req: Request, res: Response, next: NextFunction) {
    try {
      const hotels: Hotel[] = await hotelService.getAll();
      res.status(200).json(hotels);
    } catch (error) {
      res.status(500).json( {message: 'something goes wrong'} );
    }
  }

  async getOne(req: Request<{id: string}>, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const hotel = await hotelService.getOne(id);
      res.status(200).send(hotel);
    } catch (error) {
      res.status(500).json( {message: 'something goes wrong'} );
    }
  };

  async getNearby(req: Request<{id: string}>, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const nearbys = await hotelService.getNearbys(id);
      res.status(200).json(nearbys);
    } catch (error) {
      res.status(500).json( {message: 'something goes wrong'} );
    }
  }
}

export const hotelController = new HotelController();
