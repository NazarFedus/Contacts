export interface IContact {
     id: number,
     name: string,
     username: string,
     email: string,
     address: IAddress,
     company: {bs: string, catchPhrase: string, name: string}
}

interface IAddress{
     street: string,
     suite: string,
     city: string,
     zipcode: string,
     geo: {lat: string, lng: string}
}

