import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
const Chat = () => {
    const dispatch = useDispatch();
    const { tickets } = useSelector((state) => state.ticket);
    console.log(tickets);
    return (
        <>
            <div className='chatPanel'>
                <h1>Чат</h1>
                {
                    tickets.map((item) => {
                        return (

                            <div className='message'>
                                <span className='name'>{item.title}</span>
                                <span>{item.description}</span>
                            </div>

                        )
                    })
                }
                <form action="" method="post">
                    <div className="tocket-block">
                        <span>Сообщение</span>
                        <textarea class="inputField--mgSyJ" name="message"></textarea>
                    </div>
                    <span className="application">Оставье заявку</span>
                </form>
            </div>
        </>
    )
}
export default Chat;