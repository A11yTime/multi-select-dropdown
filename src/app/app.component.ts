import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { MultiSelectDropdownComponent } from './multi-select-dropdown/multi-select-dropdown.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
// import { MultiSelectDropdown1Component } from './multi-select-dropdown1/multi-select-dropdown1.component';
import { CommonModule } from '@angular/common';
//import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, DropDownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multidd';
}
