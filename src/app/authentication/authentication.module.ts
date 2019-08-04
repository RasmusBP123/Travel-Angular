import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [ RegisterComponent, LoginComponent ],
	imports: [ CommonModule, FormsModule, AuthenticationRoutingModule ]
})
export class AuthenticationModule {}
