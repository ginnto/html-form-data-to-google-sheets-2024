# HTML Form Data to Google Sheet

This repository contains code to create an HTML form that sends data to a Google Sheet using Google Apps Script. This README provides a step-by-step guide to set up and deploy the solution.

## Prerequisites

    A Google account.
    Basic knowledge of HTML, JavaScript, and Google Sheets.

# Step 1: Set Up the Google Sheet

    Create a new Google Sheet:
        Go to Google Sheets.
        Click on Blank to create a new sheet.
        Rename your sheet (e.g., "Form Responses").
        Rename the first sheet tab to "Sheet1".

    Add column headers:
        In the first row, add headers for each form field (e.g., "Full Name", "Email", "Phone", "Message").

# Step 2: Create the Google Apps Script

    Open the script editor:
        Go to your Google Sheet.
        Click on Extensions > Apps Script.
##     Write the script:
![image](https://github.com/ginnto/html-form-data-to-google-sheets-2024/assets/92264484/ddfcf72d-2569-42c9-b2eb-caf04c8381bf)

### check Code.gs

        

##     Deploy the script as a web app:
       1 Click on Deploy > New deployment.
       2 Select Web app.
       3 Give your deployment a description.
       4 Under Execute as, select Me.
       5 Under Who has access, select Anyone.
       6 Click Deploy.
       7 Authorize the script if prompted.
       8 Copy the URL from the Web app URL field. This is your SCRIPT_URL.

## Step 3: Create the HTML Form
#### check index.html 
### Replace YOUR_SCRIPT_URL with the URL of your deployed Google Apps Script.


live link: html-form-data-to-google-sheet.netlify.app
