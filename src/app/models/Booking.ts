import { Layout, Room } from "./Room";
import { User } from "./User";

export class Booking {
  id: number;
  room: Room;
  user: User;
  layout: Layout;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  participants: number;


  constructor(
    id: number,
    room: Room,
    user: User,
    layout: Layout,
    title: string,
    date: string,
    startTime: string,
    endTime: string,
    participants: number
) {
    this.id = id
    this.room = room
    this.user = user
    this.layout = layout
    this.title = title
    this.date = date
    this.startTime = startTime
    this.endTime = endTime
    this.participants = participants
  }

  getDateAsDate() {
    return new Date(this.date);
  }
}

