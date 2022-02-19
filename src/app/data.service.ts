import {Injectable} from '@angular/core';
import {Layout, LayoutCapacity, Room} from "./models/Room";
import {User} from "./models/User";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private rooms: Array<Room>;
  private users: Array<User>

  getRooms(): Observable<Array<Room>> {
    return of(this.rooms);
  }

  getUsers(): Observable<Array<User>> {
    return of(this.users);
  }

  updateUser(user: User): Observable<User> {
    const originalUser = this.users.find(u => u.id === user.id);
    originalUser!.name = user.name;
    return of(originalUser!)
  }

  updateRoom(newRoom: Room): Observable<Room> {
    const originalUser = this.rooms.find(r => r.id === newRoom.id);
    originalUser!.name = newRoom.name;
    originalUser!.location = newRoom.location;
    originalUser!.capacities = newRoom.capacities;
    return of(originalUser!)
  }

  addUser(user: User ,password:string): Observable<User>{
    user.id = this.users.length+1;
    this.users.push(user)
    return of(user)
  }

  addRoom(room: Room): Observable<Room>{
    room.id = this.rooms.length+1;
    this.rooms.push(room)
    return of(room)
  }

  deleteRoom(id:number): Observable<any>{
    const room = this.rooms.find(r=>r.id === id);
    this.rooms.splice(this.rooms.indexOf(room!),1);
    return of(null)
  }

  deleteUser(id:number): Observable<any>{
    const user = this.users.find(r=>r.id === id);
    this.users.splice(this.users.indexOf(user!),1);
    return of(null)
  }

  resetPassword(id:number):Observable<any>{
    return of(null);
  }

  constructor() {
    this.rooms = new Array<Room>();
    //---------------------------
    const room1 = new Room();
    room1.id = 1;
    room1.name = 'First Room';
    room1.location = 'First Floor'

    const capacity1 = new LayoutCapacity();
    capacity1.layout = Layout.THEATER
    capacity1.capacity = 50;

    const capacity2 = new LayoutCapacity();
    capacity2.layout = Layout.USHAPE
    capacity2.capacity = 20;

    room1.capacities.push(capacity1);
    room1.capacities.push(capacity2);
    //---------------------------------------

    //---------------------------
    const room2 = new Room();
    room2.id = 2;
    room2.name = 'Second Room';
    room2.location = 'Second Floor'

    const capacity3 = new LayoutCapacity();
    capacity3.layout = Layout.USHAPE
    capacity3.capacity = 60;

    const capacity4 = new LayoutCapacity();
    capacity4.layout = Layout.BOARD
    capacity4.capacity = 70;

    room2.capacities.push(capacity3);
    room2.capacities.push(capacity4);
    //---------------------------------------
    this.rooms.push(room1);
    this.rooms.push(room2);

    //----------------------- initialize user array ---------------------------
    this.users = new Array<User>();
    const user1 = new User();
    user1.id = 1;
    user1.name = 'Mr.X';

    const user2 = new User();
    user2.id = 2;
    user2.name = 'Mr.Y';

    const user3 = new User();
    user3.id = 3;
    user3.name = 'Mr.Z';

    this.users.push(user1)
    this.users.push(user2)
    this.users.push(user3)
  }
}
