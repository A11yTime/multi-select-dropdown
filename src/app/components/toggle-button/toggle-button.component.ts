import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle-button',
  standalone: true,   // Marking the component as standalone
  imports: [CommonModule],
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent {
  isExpanded: boolean = false;  // Initial state of the content (collapsed)

  // Toggle the expanded/collapsed state
  toggleContent() {
    this.isExpanded = !this.isExpanded;
  }
}
