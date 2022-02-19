import {Component, Input, OnInit} from '@angular/core';
import {Layout, LayoutCapacity, Room} from "../../../models/Room";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.css']
})
export class RoomEditComponent implements OnInit {
  @Input()
  room?: Room

  roomForm = new FormGroup({
    roomName: new FormControl('roomName'),
    location: new FormControl('location')
  })

  layouts = Object.keys(Layout);
  values = Object.values(Layout);



  constructor() {
  }

  getKey(val:any):string{
    return Object.keys(Layout)[Object.values(Layout).indexOf(val)]
  }

  ngOnInit(): void {
    this.roomForm.patchValue({
      roomName: this.room?.name,
      location: this.room?.location

    })


    for(let layout of this.values){
      this.roomForm.addControl(`layout${this.getKey(layout)}` , new FormControl(`layout${this.getKey(layout)}`))
    }

    console.log(typeof (Layout.BOARD))
  }



  onSubmit(): void {
    if(this.room){
      this.room.name =  this.roomForm.controls['roomName'].value;
      this.room.location = this.roomForm.value['location'];

      this.room.capacities = new Array<LayoutCapacity>()
      for(let layout of this.values){
        const layoutCapacity = new LayoutCapacity();

        if(this.getKey(layout).trim() === 'THEATER'){
          layoutCapacity.layout = Layout.THEATER;
        }else if( this.getKey(layout) === 'USHAPE'){
          layoutCapacity.layout = Layout.USHAPE;
        }else if( this.getKey(layout) === 'BOARD'){
          layoutCapacity.layout = Layout.BOARD
        }
        let control = this.roomForm.controls[`layout${this.getKey(layout)}`];
        layoutCapacity.capacity =(!isNaN(control.value))?control.value:'';

        this.room.capacities.push(layoutCapacity);

      }
    }





    console.log(this.roomForm.controls['roomName'].value);
    console.log(this.roomForm.value['location']);
    console.log(this.room?.capacities)
    console.log(this.roomForm)
  }

}
