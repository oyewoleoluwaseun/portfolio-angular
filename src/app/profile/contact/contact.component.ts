import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, NgForm  } from '@angular/forms';


import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  url = 'https://formspree.io/f/mayzjlay'; 
  messageSent = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {}
  
  ngOnInit(): void {
	}

  onSubmit(form: NgForm) {
    this.httpClient.post(this.url, form.value).subscribe(
      response => {
        this.messageSent = true;
        form.resetForm();
      },
      error => {
        this.errorMessage = 'An error occurred while sending your message. Please try again later.';
      }
    );
  }
}