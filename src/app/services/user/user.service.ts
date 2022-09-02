import { Injectable } from '@angular/core';
import {User} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<User>;

  constructor() {

    this.users = [];

    this.users.push(new User('Thomas', 'CHEVALIER', 'contact@thomaschevalier.fr', 'azerty'));
    this.users.push(new User('Admin', 'Admin', 'admin@thomaschevalier.fr', 'azerty'));

  }

  /**
   * Search a user by a field name and value
   * @param searchedAttr
   * @param searchedValue
   */
  getUserBy(searchedAttr, searchedValue): User | void {
    for(const user of this.users) {
      if(user[searchedAttr] === searchedValue) {
        return user;
      }
    }
    return null;
  }

  /**
   * Method for update a user
   * @param editedUser
   */
  updateUser(editedUser: User | void) {
    if(editedUser instanceof User) {
      for (let i = 0; i < this.users.length - 1; i++) {
        if (this.users[i].id === editedUser.id) {
          this.users[i] = editedUser;
          break;
        }
      }
    }
  }
}
