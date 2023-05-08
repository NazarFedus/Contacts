import {useState} from "react";
import axios from "axios";
import { ISubmitValues } from "../pages/ContactFormPage/ContactFormPageTypes";

export function useSubmit() {
  const [response, setResponse] = useState(null);
     function submit(data: ISubmitValues){
          console.log('Sending data on server:', data);

     axios.post(`http://localhost:3000/contacts`, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log(response.data);
        setResponse(response.data)
      })
      .catch(error => {
        console.error(error);
        setResponse(error);
      });
  };

     return {submit, response}
}