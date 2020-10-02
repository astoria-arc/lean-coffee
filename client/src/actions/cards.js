import history from '../history'
import {
    RECEIVE_CARDS,
    DELETE_CARD
} from '../constants/index';

export function getCards() {
   return (dispatch, getState) => {
     return fetch('/api/v1/cards', {
       method: 'GET',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       }
     })
    .then(response => {
      return response.json()
    })
    .then(json => {
      dispatch({type: RECEIVE_CARDS, payload: json})
    })
  }
}

export function createCard(title) {
   return (dispatch, getState) => {
     return fetch('/api/v1/cards', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         title: title
       })
    })
    .then(response => {
      return response.json()
    })
    .then(json => {
      dispatch(getCards())
      history.push('/cards')
    })
  }
}

export function deleteCard(cardId){

  return (dispatch, getState) => {
    return fetch(`/api/v1/cards/${cardId}`, {
      method: 'DELETE'
    })

    .then(response => {
      dispatch({type: DELETE_CARD, payload: cardId})
    })
  }
}
