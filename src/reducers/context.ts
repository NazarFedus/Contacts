import { DELETE_CONTACT, FETCH_ERROR, FETCH_SUCCESS } from "./actions";
import { IAction } from "./contextTypes";

export const initialState = {
     contacts: [],
     deletedContacts: [],
     error: null
}

export const reducer = (state: typeof initialState, action: IAction): typeof initialState => {
     switch(action.type){
          case FETCH_SUCCESS: {
               return {
                    ...state,
                    contacts: action.payload
               };
          }
          case FETCH_ERROR: {
               return {
                    ...state,
                    error: action.payload
               };
          }
          case DELETE_CONTACT: {
               return {
                    ...state,
                    contacts: state.contacts.filter(e => e.id !== action.payload)
               }
          }
          default:
               return state;
     }
}
