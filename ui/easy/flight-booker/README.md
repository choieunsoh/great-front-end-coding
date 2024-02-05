## Solution

This question evaluates your knowledge of form validation and dependent form fields.

## Rendering

We can use `<input type="date">` to render native datepickers, which has over 96% browser support globally at this time of writing. Native datepickers also come with the min attributes, which we can use for ensuring that only valid dates are chosen.

The input fields and buttons are also wrapped in a `<form>` so that we can leverage native form submission and validation. Submission can be trigged by clicking the "Book" button or hitting `Enter` on any of the form fields. The browser will first validate the inputs and trigger the submit event if the fields are valid.

## State

Since we need to toggle the display of the return field, we will need a state value to track whether the selected flight is "One-way" or "Return" to know whether to render the return date input.

The formatDate function converts a JavaScript `Date` object into a `YYYY-MM-DD` string which is the format expected by `<input type="date">`.

Using a controlled form is more convenient here as having state for the date values allows us to specify the current departure date as the min of the return date field and leverage the browser's form validation during submission. Otherwise, we'll have to write custom validation logic in the submission handler.

## Test Cases

- One-way flight
  - Only one datepicker is shown.
  - Submission is blocked when a date in the past is selected.
  - Submitting with a date in the future shows the success message.
- Return flight
  - Two datepickers are shown.
  - Submission is blocked when dates in the past are selected.
  - Submission is blocked when the return date is earlier than the start date.
  - Submitting with dates in the future shows the success message.

## Accessibility

- Since the `<input>` fields don't have visible labels, aria-labels can be used to label the fields for screenreaders.
- Wrapping the fields in a <form> enables default form submission behavior.

## User Experience

- The datepickers are prefilled with tomorrow's date as a nice default.
