import { IContact } from "../components/ContactCard/ContactCardTypes";

export interface IAction {
     type: string,
     payload?: number | string | boolean| IContact[] | undefined;
}