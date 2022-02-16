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

  warningMessage!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
