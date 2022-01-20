
import {
  CountDownTimer,
  CurrentTimer,
  Home,
  MovieContainer,
  PageNotFound
} from "../plays";

const plays = [
  {
    name: 'CurrentTimer',
    component: () => {return <CurrentTimer />},
    path: '/clock',
  },
  {
    name: 'CountDownTimer',
    component: () => {return <CountDownTimer targetDate = {'Jan 25, 2022 15:37:25'} />},
    path: '/countdown',
  },
  {
    name: 'Home',
    component: () => {return <Home />},
    path: '/',
    index: true,
  },
  {
    name: 'MovieContainer',
    component: () => {return <MovieContainer />},
    path: '/movies',
  },
  {
    name: 'PageNotFound',
    component: () => {return <PageNotFound />},
    path: '/*',
  },
];

export const getPlays = () => {
  return plays;
};


