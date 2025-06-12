import {
  Component,
  ElementRef,
  ViewChildren,
  ViewChild,
  QueryList,
  OnInit,
  OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drop-down',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropDownComponent implements OnInit, OnDestroy {
  isDropdownOpen = false;
  selectedOption: string | null = null;
  options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  focusedIndex = 0;

 
  @ViewChildren('optionElement') optionElements!: QueryList<ElementRef>;
  @ViewChild('dropdownTrigger', { static: false }) dropdownTrigger!: ElementRef;

  ngOnInit() {
    document.addEventListener('click', this.onOutsideClick.bind(this));
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.onOutsideClick.bind(this));
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;

    if (this.isDropdownOpen) {
      setTimeout(() => {
        this.focusedIndex = 0;

        if (this.selectedOption) {
          const selectedIndex = this.options.indexOf(this.selectedOption);
          if (selectedIndex !== -1) {
            this.focusedIndex = selectedIndex;
          }
        }

        this.focusOption(this.focusedIndex);
      });
    }
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.closeDropdownAndFocusTrigger();
  }

  focusOption(index: number) {
    const element = this.optionElements.get(index);
    if (element) {
      element.nativeElement.focus();
      element.nativeElement.scrollIntoView({ block: 'nearest' });
    }
  }

  moveFocus(direction: 'up' | 'down', currentIndex: number) {
    if (direction === 'up' && currentIndex > 0) {
      this.focusedIndex = currentIndex - 1;
    } else if (direction === 'down' && currentIndex < this.options.length - 1) {
      this.focusedIndex = currentIndex + 1;
    }

    this.focusOption(this.focusedIndex);
  }

  handleKey(event: KeyboardEvent, index: number, option: string) {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.moveFocus('down', index);
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.moveFocus('up', index);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        this.selectOption(option);
        break;
      case 'Escape':
        event.preventDefault();
        this.closeDropdownAndFocusTrigger();
        break;
    }
  }

  closeDropdownAndFocusTrigger() {
    this.isDropdownOpen = false;
    setTimeout(() => {
      if (this.dropdownTrigger) {
        this.dropdownTrigger.nativeElement.focus();
      }
    });
  }

  onOutsideClick(event: MouseEvent) {
    const dropdown = document.querySelector('.dropdown-container');
    if (dropdown && !dropdown.contains(event.target as Node)) {
      this.isDropdownOpen = false;
    }
  }
}
