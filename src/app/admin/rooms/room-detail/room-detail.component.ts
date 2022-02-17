import {Component, Input, OnInit} from '@angular/core';
import {Room} from "../../../models/Room";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
  @Input()
  room?:Room;
  constructor(private router:Router ,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  roomEdit():void{
    this.router.navigate(['admin','rooms'],{queryParams:{id:this.room?.id,action:'edit'}})
  }

}
