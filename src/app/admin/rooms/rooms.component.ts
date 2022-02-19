import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../../data.service";
import {Room} from "../../models/Room";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {ResetService} from "../../reset.service";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, OnDestroy {
  rooms?: Array<Room>;
  selectedRoom?: Room;

  subscription!: Subscription;
  action?: string;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router,private resetForm:ResetService) {
  }

  ngOnInit(): void {
    this.subscription = this.dataService.getRooms().subscribe(rooms => {
      this.rooms = rooms;
    })

    this.route.queryParams.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.selectedRoom = this.rooms?.find(room => room.id === +id);
        this.action = params['action'];
      }
      if (params['action'] == 'add') {
        this.selectedRoom = new Room();
        this.action = 'edit';
        this.resetForm.resetForm.emit(this.selectedRoom);
      }

    })
  }

  setRoom(id: number): void {
    this.router.navigate(['admin', 'rooms'], {queryParams: {id: id, action: 'view'}})
  }

  addRoom(): void {
    this.router.navigate(['admin', 'rooms'], {queryParams: {action: 'add'}})
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
