import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AddExpTabFormService {

  constructor() { }



  form:FormGroup = new FormGroup({
    $key: new FormControl(null),
    title: new FormControl('', Validators.required),
    level: new FormControl('',Validators.required),
    exp: new FormControl('',Validators.required)
  });

  initializeFormGroup(){
    this.form.setValue({
      $key:null,
      title:'',
      level:'',
      exp:''
    })

  }


}
