import React, { useState } from 'react';
import Page from '../../Page';
import Ticket from '../../page/ticket/ticket';
import ResultList from '../resultList/ResultList';
import './nav.scss'
import { Routes, Route, NavLink } from "react-router";

const Nav = () => {
    const [currentLine, setCurrentLine] = useState<number>(0)
    const nav = [
        {
            id: 1,
            to: '/',
            text: 'Общие вопросы'
        },
        {
            id: 2,
            to: '/ticket',
            text: 'Заявки'
        },
        {
            id: 3,
            to: '/',
            text: 'Анализ проблем'
        }
    ]
    return (
        <>
            <nav>
                {
                    nav.map((item, index) => {
                        return (<>
                            <NavLink className={`${currentLine === index ? 'line' : ''}`} onClick={() => setCurrentLine(index)} key={item.id} to={item.to}>{item.text}</NavLink>
                        </>)
                    })
                }
            </nav >
            <Routes>
                <Route path="/:id" element={<Page />} />
                <Route path="/ticket" element={<Ticket />} />
            </Routes>
        </>
    )
}
export default Nav;