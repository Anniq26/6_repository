import React from "react";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import FactsPage from "./pages/FactsPage";
import LinkLayout from "./layouts/LinkLayout";
import { Link, Route, Routes } from "react-router-dom";

const router = [
   
    {
        element: <LinkLayout/>,
        path: '/',
        children: [
            {
                element: <MainPage/>,
                index: true
            },
            {
                element: <MainPage/>,
                path:'/main',
            },
            {
                element: <AboutPage/>,
                path: '/about'
            },
            {
                element:<FactsPage/>,
                path:'/facts'
            }
        ]
    }
]

export default router