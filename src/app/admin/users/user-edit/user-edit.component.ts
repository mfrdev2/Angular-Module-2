import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/User";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @Input()
  user!:User
  userForForm!:User;

  warningMessage!:string;

  constructor() { }

  ngOnInit(): void {
    this.userForForm = Object.assign({},this.user)
  }

  onSubmit():void{
  console.log(this.userForForm.name);
  }

}
