# Vue issue tracker practice

Build a simple issue tracker application with Vue. The application should be able to create, display, and manage issues.

Each issue should include the following properties: id, title, description, labels (an array of related labels), and resolved (boolean) status.

## Task 1: Create a new issue form

### Task 1.1: Create a new issue form

Create a form to submit new issues to the list.

The form should contain the following fields:

-   Text input: Title
-   Checkbox group: Labels
-   Textarea: Description

The available labels should be rendered as checkboxes with the following options:

-   id: 1, name: bug, color: #8b2424
-   id: 2, name: duplicate, color: #2c2c2c
-   id: 3, name: feature, color: #4c1eca
-   id: 4, name: question, color: #df339d
-   id: 5, name: wontfix, color: #000000

### Task 1.2: Validate the form

When creating a new issue, validate the user input using the following rules:

-   Title and description must not be empty.
-   Title must be at least 5 characters long.
-   Description must not exceed 300 characters.

If a validation error occurs:

-   Display the error message below the corresponding field.
-   Highlight the input border and label in red.

### Task 1.3: Create a new issue

If validation passes:

-   Add the new issue to the list displayed below the form.
-   Clear the form after a successful submission.

## Task 2: Display and manage issues

### Task 2.1: Display issues

Below the form, render the list of created issues. Each issue should display:

-   A checkbox to mark it as resolved.
-   The title.
-   The selected labels (each with its corresponding background color).
-   A `Show more` button.

### Task 2.2: Mark an issue as resolved

When clicking the checkbox, toggle the issue's resolved status. When an issue is resolved, display it with reduced opacity.

### Task 2.3: Show more details

When the `Show more` button is clicked:

-   Show the description of the selected issue.
-   Clicking the button again should hide the description.
-   Only one issue's details can be visible at a time.
