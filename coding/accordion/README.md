# Solution

Implementing a basic (not fully accessible) Accordion component in React is quite simple due to the fact that only one state value is needed, the expanded/collapsed states of each section. React also helps to keep the state and the UI in sync, which is a little more troublesome to do so in Vanilla JavaScript.

## Props (API Design)

Part of the complexity of building a component is designing the API for it. In the case of React, it would be the props of the component. At the bare minimum, we will need the following props:

- items: A list of item objects. Each item is an object with the fields:
  - value: A unique identifier for the accordion item.
  - title: The text label to show in the accordion title.
  - contents: The contents to show when the section is expanded.

## State

We can use ES6 Set to keep track of the sections which are expanded. When the section title is clicked, check if the section's value is within the set. The value will be removed from the set if it's inside and added it into the set otherwise.

# Test Cases

- All the provided sections should be displayed.
- Clicking on a collapsed section's title should expand it.
- Clicking on an expanded section's title should collapse it.
- Test that all sections are allowed to expand and collapse independently.
- Test that you are able to initialize multiple instances of the component, each with independent states.

# Accessibility

Interactive elements need to be focusable, so we'll use a `<button>` for the title.

**The ARIA Authoring Practices Guide for Accordion** has a long list of guidelines for the ARIA roles, states, and properties to add to the various elements of an accordion. **Accordion II** and **Accordion III** will focus on improving the accessibility of the Accordion component.
