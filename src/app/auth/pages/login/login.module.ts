import { NgModule } from '@angular/core';
import { LoginPage } from './login.page';

import { LoginPageRoutingModule } from './login-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
      LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
