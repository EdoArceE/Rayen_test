import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ExploreComponent } from './components/explore/explore.component';
import { DescubrirUsuariosComponent } from './components/descubrir-usuarios/descubrir-usuarios.component';
import { PostsComponent } from './components/posts/posts.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ExploreComponent,
    DescubrirUsuariosComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
  ],

})
export class IndexModule { }
