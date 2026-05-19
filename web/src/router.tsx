import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import App from './App'

const Home           = lazy(() => import('./pages/Home'))
const Search         = lazy(() => import('./pages/Search'))
const Library        = lazy(() => import('./pages/Library'))
const Downloads      = lazy(() => import('./pages/Downloads'))
const Settings       = lazy(() => import('./pages/Settings'))
const Playlist       = lazy(() => import('./pages/Playlist'))
const LikedSongs     = lazy(() => import('./pages/LikedSongs'))
const Album          = lazy(() => import('./pages/Album'))
const Artist         = lazy(() => import('./pages/Artist'))
const NowPlaying     = lazy(() => import('./pages/NowPlaying'))
const RecentlyPlayed = lazy(() => import('./pages/RecentlyPlayed'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true,                element: <Home /> },
      { path: 'search',             element: <Search /> },
      { path: 'library',            element: <Library /> },
      { path: 'downloads',          element: <Downloads /> },
      { path: 'settings',           element: <Settings /> },
      { path: 'playlist/:id',       element: <Playlist /> },
      { path: 'liked',              element: <LikedSongs /> },
      { path: 'album/:id',          element: <Album /> },
      { path: 'artist/:id',         element: <Artist /> },
      { path: 'now-playing',        element: <NowPlaying /> },
      { path: 'recently-played',    element: <RecentlyPlayed /> },
    ],
  },
])
