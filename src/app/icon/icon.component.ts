import { Component } from '@angular/core';
import { FirstComponent } from '../first/first.component';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [FirstComponent],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent {

}
