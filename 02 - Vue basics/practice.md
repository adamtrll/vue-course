# Vue basics practice

Build an interactive user interface where you let users pick a person from a list and see some of their details. Make sure to clearly show when the app is loading.

## Task 1: Build a users select and details view

-   Fetch all users from `https://jsonplaceholder.typicode.com/users` when the app ready.
-   Render a select input whose options come from the downloaded users.
-   Bind the `<select>` to a reactive `selectedUserId` variable.
-   When a user is selected, display their name and email below the select.

## Task 2: Improve UX

-   Show a visible loading message while users are being fetched.
-   Disable the `<select>` while loading.
-   If the request fails, display an error message.

## Hints

-   Use `v-model` to bind the selected user id to `selectedUserId`.
-   Use `v-for` to render the options for the select input.
-   Download the users from the API when the Vue app is mounted.
