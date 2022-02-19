import {Component, Input, OnInit} from '@angular/core';
import {Room} from "../../../models/Room";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../../data.service";

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
  @Input()
  room?:Room;
  constructor(private router:Router ,private route:ActivatedRoute ,private data:DataService) { }

  ngOnInit(): void {
  }

  roomEdit():void{
    this.router.navigate(['admin','rooms'],{queryParams:{id:this.room?.id,action:'edit'}});
  }

  deleteRoom():void{
    this.data.deleteRoom(this.room?.id!).subscribe(ob=>{
      this.router.navigate(['admin','rooms'])
    })
  }

}
