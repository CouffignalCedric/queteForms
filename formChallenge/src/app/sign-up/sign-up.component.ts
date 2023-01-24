import { Component } from '@angular/core';
import { User } from 'src/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  model: User = new User("","","","");
  submitted =false;
  constructor() {}


onSubmit() : void {
  this.submitted= true

  console.log(this.model)
}

}
