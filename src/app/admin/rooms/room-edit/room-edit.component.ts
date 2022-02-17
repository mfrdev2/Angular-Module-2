import {Component, Input, OnInit} from '@angular/core';
import {Room} from "../../../models/Room";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.css']
})
export class RoomEditComponent implements OnInit {
  @Input()
  room?:Room

  roomForm = new FormGroup({
    roomName:new FormControl('roomName'),
    location:new FormControl('location')
  })


  constructor() { }

  ngOnInit(): void {
    this.roomForm.patchValue({
      roomName: this.room?.name,
      location:this.room?.location
    })
  }

  onSubmit():void{
    console.log(this.roomForm)
  }

}
