import {
    RECEIVE_CARDS,
    DELETE_CARD,
    VOTES_UPDATED,
    CREATE_CARD
} from '../constants';

import { createReducer } from './createReducer';

const initialState = {
    cards: [],
};

export default createReducer(initialState, {
    [RECEIVE_CARDS]: (state, payload) =>
        Object.assign({}, state, {
            cards: payload
        }),
    [DELETE_CARD]: (state, payload) =>
        Object.assign({}, state, {
            cards: state.cards.filter(card => card.id !== payload)
        }),
    [CREATE_CARD]: (state, payload) => {
        return Object.assign({}, state, {
            cards: [...state.cards, payload.card]
        })
    },
    [VOTES_UPDATED]: (state, payload) => {
        const updatedCards = [...state.cards]
        const updatedCardIndex = updatedCards.findIndex(card => card.id === payload.card.id)
        updatedCards[updatedCardIndex] = payload.card
        return Object.assign({}, state, {
            cards: updatedCards
        })
    }
});
