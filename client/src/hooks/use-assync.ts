import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { Offer, OfferServer } from '../types/offer';
import { Comment, CommentServer } from '../types/comment';
import { api } from './../store/store';
import { adaptCommentToClient, adaptOfferToClient, notify } from '../util';
import { ApiRoute, AppRoute, StatusCode, ErrorToastParam } from '../const';

export const useAssync = (id: string) => {
  const [roomData, setRoomData] = useState<[Offer, Offer[], Comment[]] | []>(
    []
  );
  const navigate = useNavigate();
  useEffect(() => {
    Promise.all([
      api
        .get<OfferServer>(`${ApiRoute.Offers}${id}`)
        .then((response) => adaptOfferToClient(response.data)),
      api
        .get<OfferServer[]>(`${ApiRoute.Offers}${id}/nearby`)
        .then((response) =>
          response.data.map((offer) => adaptOfferToClient(offer))
        ),
      api
        .get<CommentServer[]>(`${ApiRoute.Comments}${id}`)
        .then((response) =>
          response.data.map((comment) => adaptCommentToClient(comment))
        ),
    ])
      .then((data) => setRoomData(data))
      .catch((error: AxiosError) => {
        if (error.response?.status === StatusCode.NotFound) {
          navigate(AppRoute.NotFound);
        } else {
          notify();
          setTimeout(
            () => navigate(AppRoute.Main), ErrorToastParam.OfferShowTime
          );
        }
      });
  }, [id, navigate]);

  return roomData;
};
