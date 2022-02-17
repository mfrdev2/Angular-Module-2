import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/User";
import {DataService} from "../../../data.service";
import {Router} from "@angular/router";

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
  userPassword!:string;
  userPassword2!:string;

  constructor(private data: DataService, private router: Router) {
  }

  ngOnInit(): void {
    this.userForForm = Object.assign({}, this.user)
    console.log('Loading' ,this.user.id)
  }

  onSubmit(): void {
    if (this.user.id == null) {
      this.data.addUser(this.userForForm,this.userPassword).subscribe(user=>{
        this.router.navigate(['admin', 'users'], {queryParams: {id: user.id, action: 'view'}})
      },error=>{
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

}
