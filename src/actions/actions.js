import {UPDATE_NUMBERS} from "../constant/constant.js"

export const updateNumbers = phones => ({
  type: UPDATE_NUMBERS,
  payload: phones
});

export const putNumber = item => ({
  type: 'ADD_NUMBER',
  item
})

export const cleanCart = () =>({
  type: 'CLEAN_CART'
})

export const deleteNumber = id => {
  return {
      type: 'DELETE_NUMBER',
      id
  };
}

