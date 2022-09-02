import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../models/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-profil-view',
  templateUrl: './profil-view.component.html',
  styleUrls: ['./profil-view.component.css']
})
export class ProfilViewComponent implements OnInit {

  user: User | void;

  userForm: FormGroup;

  constructor(private userService: UserService, private route: ActivatedRoute,
              private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.user = this.userService.getUserBy('id', +id);

    this.userForm = this.formBuilder.group({
      'firstname': ['', [Validators.required]],
      'lastname': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required]]
    });
  }

  /**
   * Method called when the user click on the submit button
   */
  onSubmitEditUser() {
    this.userService.updateUser(this.user);
    this.router.navigate(['books']);
  }

}
