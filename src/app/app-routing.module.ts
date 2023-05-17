import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmsListComponent } from './sms-list/sms-list.component';
import { SmsDetailsComponent } from './sms-details/sms-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'sms', pathMatch: 'full' },
  { path: 'sms', component: SmsListComponent },
  { path: 'sms/:id', component: SmsDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
