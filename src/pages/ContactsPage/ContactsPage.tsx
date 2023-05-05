import React, { FC, useEffect, useState } from "react";

import search from "./icons/search 2.svg";
import action1 from "./icons/action1.svg";
import action2 from "./icons/action2.svg";
import contact from "./icons/contact_action.svg";
import axios from "axios";
import { IContact } from "../../components/ContactCard/ContactCardTypes";
import ContactCard from "../../components/ContactCard/ContactCard";

const ContactsPage: FC = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(response);
        setContacts(response.data);
      } catch (e) {
        console.log(e);
        throw e;
      }
    };
    fetchContacts();
  }, []);

  console.log(contacts);

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
          <button className="flex flex-row items-center">
            <img src={contact} alt="contact" />
            New Contact
          </button>
        </div>
      </header>
      <main className="flex flex-wrap justify-between gap-[24px] mt-[30px]">
        <div className="flex flex-wrap justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {contacts.map((user: IContact) => (
            <div className="card-container mb-4" key={user.id}>
              <ContactCard user={user} />
            </div>
          ))}
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default ContactsPage;
