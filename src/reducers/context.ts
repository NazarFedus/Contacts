import { IContact } from "../components/ContactCard/ContactCardTypes";
import { DELETE_CONTACT, FETCH_ERROR, FETCH_SUCCESS } from "./actions";
import { IAction, IState } from "./contextTypes";

export const initialState = {
     contacts: [],
     deletedContacts: [],
     error: null
}

export const reducer = (state: IState, action: IAction): IState => {
     switch(action.type){
          case FETCH_SUCCESS: {
               return {
                    ...state,
                    contacts: action.payload as IContact[]
               };
          }
          case FETCH_ERROR: {
               return {
                    ...state,
                    error: action.payload as string
               };
          }
          case DELETE_CONTACT: {
               return {
                    ...state,
                    contacts: state.contacts.filter((e: IContact) => e.id !== action.payload)
               }
          }
          default:
               return state;
     }
}
