import {Component, Input, OnInit} from '@angular/core';
import {Layout, LayoutCapacity, Room} from "../../../models/Room";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.css']
})
export class RoomEditComponent implements OnInit {
  @Input()
  room?: Room

  roomForm!:FormGroup;

  layouts = Object.keys(Layout);
  values = Object.values(Layout);



  constructor(private formBuilder:FormBuilder) {
  }

  getKey(val:any):string{
    return Object.keys(Layout)[Object.values(Layout).indexOf(val)]
  }

  ngOnInit(): void {
    this.roomForm = this.formBuilder.group(
      {
        roomName: this.room?.name,
        location: this.room?.location
      }
    )

    for(let layout of this.values){
      let layoutCapacity:LayoutCapacity | undefined;
      if(this.getKey(layout).trim() === 'THEATER'){
        layoutCapacity = this.room?.capacities.find(lc=>lc.layout === Layout.THEATER);
      }
      if(this.getKey(layout).trim() === 'USHAPE'){
        layoutCapacity = this.room?.capacities.find(lc=>lc.layout === Layout.USHAPE);
      }

      if(this.getKey(layout).trim() === 'BOARD'){
        layoutCapacity = this.room?.capacities.find(lc=>lc.layout === Layout.BOARD);
      }

      const initialCapacity = layoutCapacity == null? 0:layoutCapacity.capacity;
      this.roomForm.addControl(`layout${this.getKey(layout)}` , this.formBuilder.control(initialCapacity));
    }

    console.log(typeof (Layout.BOARD))
  }



  onSubmit(): void {
    if(this.room){
      this.room.name =  this.roomForm?.controls['roomName'].value;
      this.room.location = this.roomForm?.value['location'];

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
        let control = this.roomForm?.controls[`layout${this.getKey(layout)}`];
        layoutCapacity.capacity =(!isNaN(control?.value))?control?.value:'';

        this.room.capacities.push(layoutCapacity);

      }
    }





    console.log(this.roomForm?.controls['roomName'].value);
    console.log(this.roomForm?.value['location']);
    console.log(this.room?.capacities)
    console.log(this.roomForm)
  }

}
