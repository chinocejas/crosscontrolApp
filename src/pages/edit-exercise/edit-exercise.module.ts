import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditExercise } from './edit-exercise';

@NgModule({
  declarations: [
    EditExercise,
  ],
  imports: [
    IonicPageModule.forChild(EditExercise),
  ],
})
export class EditExerciseModule {}
