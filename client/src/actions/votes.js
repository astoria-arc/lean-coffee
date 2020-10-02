import { getCards } from './cards';

export function createVote(cardId) {
   return (dispatch, getState) => {
     return fetch('/api/v1/votes', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         card_id: cardId
       })
    })
    .then(response => {
      return response.json()
    })
    .then(json => {
      dispatch(getCards())
    })
  }
}

