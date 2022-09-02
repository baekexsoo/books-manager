import { Injectable } from '@angular/core';
import {UserService} from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;
  userIdAuth: number;

  constructor(private userService: UserService) { }

  /**
   * Method for signin the user
   */
  signIn(email: string, password: string) {

    return new Promise(
      (res, rej) => {

          setTimeout(() => {

            const user = this.userService.getUserBy('email', email);

            if(user) {
              if(user.password === password) {
                this.isAuth = true;
                this.userIdAuth = user.id;
                res();
              }
              rej("Le mot de passe ne correspond pas.");
            }

            rej("L'adresse e-mail n'existe pas.");
          }, 1000)

      }
    );

  }

  /**
   * Method for signout the user
   */
  signOut() {
    this.isAuth = false;
    this.userIdAuth = null;
  }
}
