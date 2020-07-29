import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StalkSomeoneComponent} from '../components/stalk-someone/stalk-someone.component';
import {SearchUserComponent} from '../components/search-user/search-user.component'; // CLI imports router

const routes: Routes = [
  { path: '', component: SearchUserComponent},
  { path: 'stalk', component: StalkSomeoneComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
