import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/User";
import {DataService} from "../../../data.service";
import {Router} from "@angular/router";
import {ResetService} from "../../../reset.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @Input()
  user!: User
  userForForm!: User;

  warningMessage!: string;
  userPassword!: string;
  userPassword2!: string;

  nameIsValid = false;
  passwordIsValid = false;
  passwordDoesMatch = false;

  constructor(private data: DataService, private router: Router,private resetForm:ResetService) {
  }

  ngOnInit(): void {
      this.initializeForm();
      this.resetForm.resetForm.subscribe(roomOrUser=>{
        if(roomOrUser instanceof User){
          this.user = roomOrUser;
          this.initializeForm();
        }
      })
  }

  onSubmit(): void {
    if (this.user.id == null) {
      this.data.addUser(this.userForForm, this.userPassword).subscribe(user => {
        this.router.navigate(['admin', 'users'], {queryParams: {id: user.id, action: 'view'}})
      }, error => {
        console.error(error)
      })
    } else {
      this.data.updateUser(this.userForForm).subscribe(user => {
        this.router.navigate(['admin', 'users'], {queryParams: {id: user.id, action: 'view'}})
      }, error => {
        console.error(error)
      })
    }
  }

  checkNameValid(): void {
    if (this.userForForm.name) {
      this.nameIsValid = this.userForForm.name.trim().length > 0;
    } else {
      this.nameIsValid = false;
    }
  }

  checkPasswordValid(): void {
    if (this.userForForm.id != null) {
      this.passwordDoesMatch = true;
      this.passwordIsValid = true;
    } else {
      this.passwordDoesMatch = this.userPassword === this.userPassword2;
      if (this.userPassword) {
        this.passwordIsValid = this.userPassword.trim().length > 0;
      } else {
        this.passwordIsValid = false;
      }
    }

  }

  private initializeForm() {
    this.userForForm = Object.assign({}, this.user)
    this.checkNameValid();
    this.checkPasswordValid();
    console.log('Loading', this.user.id)
  }
}
