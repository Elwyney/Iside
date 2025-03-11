import { configureStore } from '@reduxjs/toolkit';
import sliceTicket from './sliceTicket';

const store = configureStore({
    reducer: { ticket: sliceTicket}
});

export default store;