import {EventEmitter, Injectable} from '@angular/core';
import {User} from "./models/User";
import {Room} from "./models/Room";

@Injectable({
  providedIn: 'root'
})
export class ResetService {
  resetForm = new EventEmitter<Room|User>()
  constructor() { }
}
