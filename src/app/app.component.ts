import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { IconComponent } from './icon/icon.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,FirstComponent,IconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
