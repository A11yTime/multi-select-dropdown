import { Component, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drop-down',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent {
  
  isDropdownOpen = false;
  selectedOptions: string[] = [];
  options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  @ViewChildren('optionElement') optionElements!: QueryList<ElementRef>;

  // Toggle dropdown visibility
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  
    if (this.isDropdownOpen && this.options.length > 0) {
      setTimeout(() => {
        // Focus the first option when dropdown opens
        const firstOption = this.optionElements.get(0);
        if (firstOption) {
          firstOption.nativeElement.focus();
        }
      });
    }
  }
  

  // Toggle selection of an option
  toggleOption(option: string) {
    const index = this.selectedOptions.indexOf(option);
    if (index === -1) {
      this.selectedOptions.push(option);
    } else {
      this.selectedOptions.splice(index, 1);
    }

    // After selection, focus the selected option element
    this.focusSelectedOption(option);
  }

  // Focus on the selected option element
  focusSelectedOption(option: string) {
    const index = this.options.indexOf(option);
    const optionElements = this.optionElements.toArray();
    const optionElement = optionElements[index];

    if (optionElement) {
      optionElement.nativeElement.focus();  // Set focus on the selected item
    }
  }

  // Move focus using arrow keys
  moveFocus(direction: 'up' | 'down', currentIndex: number) {
    let newIndex = currentIndex;
    if (direction === 'down' && currentIndex < this.options.length - 1) {
      newIndex++;
    } else if (direction === 'up' && currentIndex > 0) {
      newIndex--;
    }

    this.focusSelectedOption(this.options[newIndex]);
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
