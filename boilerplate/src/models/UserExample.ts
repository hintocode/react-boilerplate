export default class User implements UserInterface {
  name:string
  email:string

  constructor({ firstname, lastname, email }:UserRawData) {
    this.name = `${firstname} ${lastname}`
    this.email = email
  }

  sayHello():string {
    return `Hello! I'm ${this.name}!`
  }
}

export type UserRawData = {
  firstname:string,
  lastname:string,
  email:string
}

interface UserInterface {
  name:string,
  email:string,
  sayHello():string
}
