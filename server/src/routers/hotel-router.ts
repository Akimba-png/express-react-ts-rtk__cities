import { Router } from 'express';
import { hotelController } from '../controllers/hotel-controller';

const hotelRouter = Router();

hotelRouter.get('/', hotelController.getHotels);
hotelRouter.get('/:id', hotelController.getOne);

export { hotelRouter };
