import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, NavLink } from "react-router";
import { fetchData } from '../../redux/sliceTicket';
const Frames = () => {
    const dispatch = useDispatch();
    const { tickets } = useSelector((state) => state.ticket);
    console.log(tickets);

    useEffect(() => {
        dispatch(fetchData()); // Замените на ваш URL
    }, []);
    return (
        <>
            {
                tickets.map((item) => {
                    return (
                        <NavLink to={`/chat/${item.id}`} className="frames">
                            <span>{item.title}</span>
                            <span>5 марта 2025, 19:34 * {item.description}</span>
                        </NavLink>
                    )
                })
            }

        </>
    )
}
export default Frames;