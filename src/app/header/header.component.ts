import { Component } from '@angular/core';
import { AboutComponent } from '../links/about/about.component';
import { ContactComponent } from '../links/contact/contact.component';
import { RegistrationComponent } from '../links/registration/registration.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AboutComponent, ContactComponent, RegistrationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
