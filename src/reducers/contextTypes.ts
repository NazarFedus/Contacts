import { IContact } from "../components/ContactCard/ContactCardTypes";

export interface IAction {
  type: string;
  payload?: IContact[] | undefined | number | string;
}

export interface IState {
  contacts: IContact[];
  deletedContacts: IContact[];
  error: string | null;
}
