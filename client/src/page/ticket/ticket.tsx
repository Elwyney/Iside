import Frames from './frames';
import './ticket.scss';

const Ticket = () => {
    return (
        <>
            <div className="tocket-block">
                <span>Сообщение</span>
                <textarea class="inputField--mgSyJ" name="message"></textarea>
            </div>
            <span className="application">Оставье заявку</span>
            <Frames />
        </>
    )
}
export default Ticket;