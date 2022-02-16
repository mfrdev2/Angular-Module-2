import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MenuComponent} from './menu/menu.component';
import {CalenderComponent} from './calender/calender.component';
import {RoomsComponent} from './admin/rooms/rooms.component';
import {UsersComponent} from './admin/users/users.component';
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { RoomDetailComponent } from './admin/rooms/room-detail/room-detail.component';
import { UserDetailComponent } from './admin/users/user-detail/user-detail.component';
import { UserEditComponent } from './admin/users/user-edit/user-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const roots: Routes = [
  {path: 'admin/users', component: UsersComponent},
  {path: 'admin/rooms', component: RoomsComponent},
  {path: '', component: CalenderComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CalenderComponent,
    RoomsComponent,
    UsersComponent,
    PageNotFoundComponent,
    RoomDetailComponent,
    UserDetailComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(roots)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
