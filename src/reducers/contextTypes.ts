import { IContact } from "../components/ContactCard/ContactCardTypes";

export interface IAction {
  type: string;
  payload?: any;
}

export interface IState {
  contacts: IContact[];
  deletedContacts: IContact[];
  error: string | null;
}
