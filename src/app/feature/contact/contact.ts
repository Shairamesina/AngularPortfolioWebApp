import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  sendEmail(event: Event): void {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const body = `
          Name: ${name}
          Email: ${email}
          Subject: ${subject}
          Message: ${message}
        `;
    window.location.href =
      `mailto:mesinashaira@gmail.com` +
      `?subject=${encodeURIComponent(String(subject))}` +
      `&body=${encodeURIComponent(body)}`;
  }
}