import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/User";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../../data.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input()
  user!: User

  constructor(private route: ActivatedRoute, private router: Router, private data: DataService) {
  }

  ngOnInit(): void {

  }

  editUser(): void {
    this.router.navigate(['admin', 'users'], {queryParams: {id: this.user.id, action: "edit"}})
  }

  deleteUser(): void {
    this.data.deleteUser(this.user?.id!).subscribe(ob => {
      this.router.navigate(['admin', 'users'])
    })
  }

}
