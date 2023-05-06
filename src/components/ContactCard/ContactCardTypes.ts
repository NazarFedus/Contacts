export interface IContact {
     id: number,
     name: string,
     username: string,
     email: string,
     phone: string,
     address: IAddress,
     company: {bs: string, catchPhrase: string, name: string}
}

export interface IContactProps {
     user: IContact,
     key: number,
     onDelete: (id: number) => void;
}

interface IAddress{
     street: string,
     suite: string,
     city: string,
     zipcode: string,
     geo: {lat: string, lng: string}
}

