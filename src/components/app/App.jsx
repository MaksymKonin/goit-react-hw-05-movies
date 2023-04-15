import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// import HomePages from 'pages/homePages';
// import MoviesPages from 'pages/moviesPages';
// import MovieDetailsPages from 'pages/movieDetailsPages';
// import Layout from 'components/layout';
// import Cast from 'components/cast';
// import Reviews from 'components/reviews';

const HomePages = lazy(() => import('pages/homePages'));
const MoviesPages = lazy(() => import('pages/moviesPages'));
const MovieDetailsPages = lazy(() => import('pages/movieDetailsPages'));
const Layout = lazy(() => import('components/layout'));
const Cast = lazy(() => import('components/cast'));
const Reviews = lazy(() => import('components/reviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePages />} />
        <Route path="/movies" element={<MoviesPages />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPages />}>
          <Route path="cast" element={<Cast />} />
          <Route path="Reviews" element={<Reviews />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
