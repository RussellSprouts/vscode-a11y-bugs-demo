# Minimal samples for VSCode extension accessibility bugs

1. JAWS reads "has flows from" after each element in Webview.

    Steps to reproduce:
    - Clone this repo
    - `npm install`
    - Launch the extension development host (`F5`)
    - Run the `A11Y Bug: JAWS reads "has flows from"` command (`Ctrl-Shift-P`, then search for `A11Y`)
    - Navigate focus inside of the webview that opens. Tabbing to the button works
    - JAWS will unnecessarily read "has flows from" after each element.

Note: To debug the webview HTML, run the "`Developer: Open Webview Developer Tools`" command.