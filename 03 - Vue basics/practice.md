# Vue basics practice

Build a simple animated a progress bar

-   Render a progress bar with a visible container (e.g., border or background) even at 0%.
-   Start at 0% and increase the value to 100% by 1% every 100 milliseconds.
-   Render the progress bar based on the progress value.
-   Change the bar color from red to orange (50%) to green (100%) as progress increases.
-   After progress exceeds 5%, display the numeric percentage centered inside the bar.

## Hints

-   Bind the bar width via a style binding.
-   Compute the color based on thresholds (e.g., red < orange < green).
