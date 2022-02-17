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

  constructor(private data: DataService,private router:Router) {
  }

  ngOnInit(): void {
    this.userForForm = Object.assign({}, this.user)
  }

  onSubmit(): void {
    this.data.updateUser(this.userForForm).subscribe(data => {
      this.router.navigate(['admin','users'],{queryParams:{id:data.id,action:'view'}})
    }, error => {
      console.error(error)
    })
  }

}
