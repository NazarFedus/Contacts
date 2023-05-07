import { FC, useEffect, useReducer } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { reducer, initialState } from "../../reducers/context";

import { IContact } from "../../components/ContactCard/ContactCardTypes";
import ContactCard from "../../components/ContactCard/ContactCard";

import search from "./icons/search 2.svg";
import action1 from "./icons/action1.svg";
import action2 from "./icons/action2.svg";
import contact from "./icons/contact_action.svg";
import { DELETE_CONTACT } from "../../reducers/actions";

const ContactsPage: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state.contacts)

  const clickHandler = (id: number) => {
    dispatch({type: DELETE_CONTACT, payload: id})
  }

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/contacts"
        );
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      } catch (e: any) {
        console.log(e);
        dispatch({ type: "FETCH_ERROR", payload: e.message });
      }
    };
    fetchContacts();
  }, []);

  return (
    <div className="page">
      <header className="header">
        <div>
          <h3 className="title-1">Contacts</h3>
          <p>Lorem ipsum dolor sit amet </p>
        </div>
        <div className="flex flex-row">
          <img src={search} alt="search" />
          <input type="text" placeholder="Search here" />
        </div>
        <div className="flex flex-row items-center">
          <button>
            <img src={action1} alt="action1" />
          </button>
          <button>
            <img src={action2} alt="action2" />
          </button>
          <NavLink to="/contact-form">
            <button className="flex flex-row items-center create-btn">
              <img src={contact} alt="contact" />
              New Contact
            </button>
          </NavLink>
        </div>
      </header>
      <main className="flex flex-wrap justify-between gap-[24px] mt-[30px]">
        <div className="flex flex-wrap justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {state.contacts.map((user: IContact) => (
            <div className="card-container mb-4" key={user.id}>
              <ContactCard user={user} key={user.id} onDelete={clickHandler}/>
            </div>
          ))}
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default ContactsPage;
