import { createSelector } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';
import { getOffers } from './app-data/selector';
import { getActiveFilter, getCurrentSortType } from './app-interface/selector';
import { SortingOptions } from '../const';

export const getSortedOffers = createSelector(
  getOffers,
  getActiveFilter,
  getCurrentSortType,
  (offers, activeFilter, currentSortType) => {
    const filteredOffers = offers.filter(
      (offer) => offer.city.name === activeFilter
    );
    switch (currentSortType) {
      case SortingOptions.Popular:
        return filteredOffers;
      case SortingOptions.LowPrice:
        return filteredOffers.sort((a: Offer, b: Offer) => a.price - b.price);
      case SortingOptions.HighPrice:
        return filteredOffers.sort((a: Offer, b: Offer) => b.price - a.price);
      case SortingOptions.TopRated:
        return filteredOffers.sort((a: Offer, b: Offer) => b.rating - a.rating);
      default:
        return filteredOffers;
    }
  }
);
