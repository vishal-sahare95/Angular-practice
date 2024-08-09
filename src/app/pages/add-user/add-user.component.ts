import { Component ,inject,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Interface } from 'readline';
import { json } from 'stream/consumers';
import { User } from '../../interface/user';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit {

private fb=inject(FormBuilder)
form=this.fb.group({
  fName:['',Validators.required],
  lName:['',Validators.required],
  mobile:['',Validators.required],

})
dataw:User={
  fName: '',
  lName: '',
  mobile: ''
}
  ngOnInit(): void {
  

  }

  save() {
    debugger
    if (this.form.valid) {
      const a = this.form.value;
      const existingData = localStorage.getItem('data');
      
  
      if (existingData != null) {
     
       let localArray = JSON.parse(existingData); 
        localArray.push(a);
      localStorage.setItem('data', JSON.stringify(localArray));
      }else{
        let  localArray = [];
        localArray.push(a)
        localStorage.setItem('data',JSON.stringify(localArray))
      }
      this.getData()
     
    }
  }
  userData:any=[]
  getData(){
    const data = localStorage.getItem('data');
  if (data) {
    this.userData = JSON.parse(data);
  } else {
    this.userData = [];
  }
  
  }
}



