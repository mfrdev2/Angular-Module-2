import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../../data.service";
import {Room} from "../../models/Room";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, OnDestroy {
  rooms?: Array<Room>;
  selectedRoom?: Room;

  subscription!: Subscription;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.subscription = this.dataService.getRooms().subscribe(rooms => {
      this.rooms = rooms;
    })

    this.route.queryParams.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.selectedRoom = this.rooms?.find(room => room.id === +id);
      }

    })
  }

  setRoom(id: number): void {
    this.router.navigate(['admin', 'rooms'], {queryParams: {id: id}})
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
