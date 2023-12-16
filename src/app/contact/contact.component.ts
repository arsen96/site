import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MailService } from '../services/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitted = false;
  form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    subject:new FormControl(''),
    tel:new FormControl('')
  });

  constructor(public formBuilder:FormBuilder,public http:HttpClient,public mailService:MailService){}

  ngOnInit(){
    this.form = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: [''],
        tel:[''],
        email: ['', [Validators.required, Validators.email]],
        subject: [''],
        content: ['',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(150)
        ]],
      },
    );

    this.form.valueChanges.subscribe(x => {
      this.submitted = false;
  })
  }

  get registerFormControl():any {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    if(this.form.valid){
      const data = {
        subject:this.form.value.subject,
        email:this.form.value.email,
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        content:this.form.value.content,
        tel:this.form.value.tel
      }
      this.mailService.sendEmail("http://localhost:3000/sendmail", data).subscribe(
        data => {
          setTimeout(() => {
            this.submitted = false;
            this.form.value.firstName.value = "";
          }, 2000);

          console.log("datadatadata",data)
        },
        err => {
          console.log(err);
        },() => {
        }
      );
    }
   
  }

}
