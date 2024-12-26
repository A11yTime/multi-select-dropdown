import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { faChevronDown, faChevronUp, faCheck } from '@fortawesome/free-solid-svg-icons';  
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';  
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multi-select-dropdown1',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './multi-select-dropdown1.component.html',
  styleUrl: './multi-select-dropdown1.component.css'
})
export class MultiSelectDropdown1Component implements AfterViewInit{
  @ViewChild('selectedOption') selectedOption: ElementRef | undefined;
  isDropdownOpen = false;
  selectedOptions: string[] = [];
  options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  // Assign icons to instance variables
  faChevronDown = faChevronDown;  // Dropdown down icon
  faChevronUp = faChevronUp;      // Dropdown up icon when open
  faCheck = faCheck;               // Checkmark icon for selected items

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
    this.focusOnSelectedOption();
  }
    // Programmatically set focus to the selected option
    focusOnSelectedOption() {
      if (this.selectedOption) {
        this.selectedOption.nativeElement.focus();
      }
    }
  
    ngAfterViewInit() {
      // You can perform any logic after view initialization, if necessary
    }
}
