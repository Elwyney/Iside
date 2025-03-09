import Page from '../../Page';
import Ticket from '../../page/ticket/ticket';
import ResultList from '../resultList/ResultList';
import './nav.scss'
import { Routes, Route, NavLink } from "react-router";

const Nav = () => {
    return (
        <>
            <nav>
                <NavLink to='/'>Общие вопросы</NavLink>
                <NavLink to='/ticket'>Заявки</NavLink>
                <a href="">Анализ проблем</a>
            </nav>
            <Routes>
                <Route path="/:id" element={<Page />} />
                <Route path="/ticket" element={<Ticket />} />
            </Routes>
        </>
    )
}
export default Nav;