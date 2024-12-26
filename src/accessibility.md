## Use of ARIA Roles and Properties
* role="button": Ensures that the dropdown button is recognized as a clickable element. This is important for screen reader users, as it tells them they can interact with the element like a button.
* aria-expanded: This property is used to indicate whether the dropdown is expanded or collapsed. It should be dynamically updated based on the dropdown's state (true or false) so that screen readers announce whether the dropdown is open or closed.
* aria-controls: This attribute is used to associate the button with the dropdown list it controls. It links the dropdown button to the id of the list of options (options-list in this case), so that users understand the relationship between the button and the dropdown.
* aria-labelledby: If there’s a descriptive label or heading for the dropdown (like h2 in your example), aria-labelledby should link to the heading element to announce what the dropdown is about when the user focuses on it.
* aria-describedby: Can be used to provide additional context or instructions to users. For example, you can use it to describe how the dropdown works or to explain more about the options within the dropdown.
## Keyboard Accessibility
