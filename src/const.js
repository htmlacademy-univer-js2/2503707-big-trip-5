import { isFutureEvent, isPastEvent, isPresentEvent } from './utils.js';

const EVENT_TYPES = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];

const CITIES = ['Amsterdam', 'Chamonix', 'Geneva', 'Rome', 'Hamburg', 'Munich', 'Copenhagen'];

const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.'
];

const OFFERS = ['Rent a car', 'Add luggage', 'Add breakfast', 'Switch to business', 'Upgrade to business class'];

const FilterType = {
  EVERYTHING:'everything',
  FUTURE:'future',
  PRESENT: 'present',
  PAST:'past',
};

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => isFutureEvent(point.startDatetime)),
  [FilterType.PRESENT]: (points) => points.filter((point) => isPresentEvent(point.startDatetime, point.endDatetime)),
  [FilterType.PAST]: (points) => points.filter((point) => isPastEvent(point.endDatetime))
};

export {EVENT_TYPES, CITIES, DESCRIPTIONS, OFFERS, filter};
