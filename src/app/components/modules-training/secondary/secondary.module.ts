import { NgModule } from '@angular/core';
import { SecondaryComponent } from './secondary.component';
import { SecondaryExtraComponent } from './secondary-extra/secondary-extra.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SecondaryComponent,
    SecondaryExtraComponent
  ],
  imports: [RouterModule.forChild([
    { path: 'secondary', component: SecondaryComponent, children: [
        { path: 'extra', component: SecondaryExtraComponent }
      ]
    }
  ])],
  exports: [RouterModule]
})
export class SecondaryModule {

}
