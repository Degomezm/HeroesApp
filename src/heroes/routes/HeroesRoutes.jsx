import React from 'react'
import { Navbar } from '../../ui'
import { Navigate, Outlet } from 'react-router-dom'
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages'


export const childHeroesRoutes = [
        {
            path: "/marvel",
            element: <MarvelPage />,
        },
        {
            path: "/dc",
            element: <DcPage />,
        },
        {
            path: "/search",
            element: <SearchPage />,
        },
        {
            path: "/hero/:id",
            element: <HeroPage />,
        },
        {
            path: "/",
            element: <Navigate to={"/dc"} />,
        },
      ]

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />
        <div className="container">
            <Outlet />
        </div>
    </>
  )
}
