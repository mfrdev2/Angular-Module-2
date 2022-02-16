import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {DataService} from "../../data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  users?: Array<User>;

  selectedUser?: User

  constructor(private data: DataService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.subscription = this.data.getUsers().subscribe(users => {
      this.users = users;
    })
    this.route.queryParams.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.selectedUser = this.users?.find(user => user.id === +id);
      }
    })
  }

  setUser(id: number): void {
    this.router.navigate(['admin', 'users'], {queryParams: {id: id}})
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
