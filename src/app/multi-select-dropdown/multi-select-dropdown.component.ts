import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multi-select-dropdown',
  templateUrl: './multi-select-dropdown.component.html',
  styleUrls: ['./multi-select-dropdown.component.css'],
  standalone: true,  // Mark as standalone
  imports: [CommonModule]  // Import CommonModule for ngFor and other directives
})
export class MultiSelectDropdownComponent {
  isDropdownOpen = false;
  selectedOptions: string[] = [];
  options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  // Toggle dropdown visibility
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Toggle selection of an option
  toggleOption(option: string) {
    const index = this.selectedOptions.indexOf(option);
    if (index === -1) {
      this.selectedOptions.push(option);
    } else {
      this.selectedOptions.splice(index, 1);
    }
  }

  // Close the dropdown if clicked outside
  onOutsideClick(event: MouseEvent) {
    const dropdown = document.querySelector('.dropdown-container');
    if (dropdown && !dropdown.contains(event.target as Node)) {
      this.isDropdownOpen = false;
    }
  }

  ngOnInit() {
    document.addEventListener('click', this.onOutsideClick.bind(this));
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.onOutsideClick.bind(this));
  }
}
