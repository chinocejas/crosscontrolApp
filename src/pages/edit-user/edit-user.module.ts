import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditUser } from './edit-user';

@NgModule({
  declarations: [
    EditUser,
  ],
  imports: [
    IonicPageModule.forChild(EditUser),
  ],
})
export class EditUserModule {}
