import React, { useState } from 'react';
import Page from '../../page/NewsDashboard';
import './nav.scss'
import { Routes, Route, NavLink } from "react-router";

const Nav = () => {
    const [currentLine, setCurrentLine] = useState<number>(0)
    const nav = [
        {
            id: 1,
            to: '/',
            text: 'Общие вопросы'
        }
    ]
    return (
        <>
            <nav>
                <span>Общие вопросы</span>
            </nav >
        </>
    )
}
export default Nav;