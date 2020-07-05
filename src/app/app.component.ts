import { Component } from '@angular/core';
import{ FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userforms';
  userforms;
  userDetails = [];

  constructor(private fb: FormBuilder) {

    this.userforms = this.fb.group({
      'name': this.fb.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      'email': this.fb.control('', [Validators.required, Validators.email]),
      'dob': this.fb.control('', Validators.required),
      'country': this.fb.control('IN'),
      'gender': this.fb.control('', Validators.required),
      'maritialstatus': this.fb.control('', Validators.required),
      'favfood': this.fb.control(''),
      'mobile': this.fb.control('', Validators.required),
      'address': this.fb.array([
        this.fb.group({
          'street': this.fb.control('', [Validators.required]),
          'doorno': this.fb.control('', [Validators.required]),
          'zipcode': this.fb.control('', [Validators.required])
        }),
        this.fb.group({
          'street': this.fb.control('', [Validators.required]),
          'doorno': this.fb.control(''),
          'zipcode': this.fb.control('')
        }),
        this.fb.group({
          'street': this.fb.control('', [Validators.required]),
          'doorno': this.fb.control(''),
          'zipcode': this.fb.control('')
        })
      ]),
    })
  }
  submitForm(){
    console.log(this.userforms)
    
       console.log(this.userforms.value);
       this.userDetails.push(this.userforms.value);
       console.log(this.userDetails);
    
    console.log(this.userDetails)
   }


}


