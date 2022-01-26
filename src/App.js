import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Layout } from './components/Navigation/Layout';
import Loader from './components/Loader/Loader';
// import HomePage from './views/HomePage/HomePage';
// import MoviesPage from './views/MoviesPage/MoviesPage';
// import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';
// import Cast from './views/Cast/Cast';
// import Reviews from './views/Reviews/Reviews';

const HomePage = lazy(() => import('./views/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./views/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage/MovieDetailsPage'),
);
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

export default function App() {
  return (
    <>
      <Suspense fallback={Loader}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
