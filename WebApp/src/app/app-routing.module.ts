import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './erros/pagenotfound/pagenotfound.component';
import { FreteComponent } from './cadastros/frete/frete.component';

const routes: Routes = [
  {path: '**', component: PagenotfoundComponent},
  {path: 'frete', component: FreteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
