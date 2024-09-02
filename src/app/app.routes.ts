import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'node:path';
import { MainBodyComponent } from './main-body/main-body.component';
import { AboutComponent } from './links/about/about.component';
import { RegistrationComponent } from './links/registration/registration.component';
import { ContactComponent } from './links/contact/contact.component';

export const routes: Routes = [
    {path:'', component:MainBodyComponent},
    {path:'about', component:AboutComponent},
    {path:'register', component:RegistrationComponent},
    {path:'contact', component:ContactComponent},
];
