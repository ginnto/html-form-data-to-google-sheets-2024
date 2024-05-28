# HTML Form Data to Google Sheet

This repository contains code to create an HTML form that sends data to a Google Sheet using Google Apps Script. This README provides a step-by-step guide to set up and deploy the solution.

# Introduction

The motive behind this repository is to provide a comprehensive, updated tutorial on how to submit HTML form data to a Google Sheet. While working on a task to achieve this, I found that many existing tutorials were outdated or incomplete, leading to numerous errors and confusion. To save others from the same challenges, I've documented the entire process, including solutions to common errors, in this README.

## Prerequisites

1. A Google account.
2. Basic knowledge of HTML, JavaScript, and Google Sheets.

# Step 1: Set Up the Google Sheet

1. Create a new Google Sheet:
   - Go to Google Sheets.
   - Click on Blank to create a new sheet.
   - Rename your sheet (e.g., "Form Responses").
   - Rename the first sheet tab to "Sheet1".

2. Add column headers:
   - In the first row, add headers for each form field (e.g., "Full Name", "Email", "Phone", "Message").

# Step 2: Create the Google Apps Script

1. Open the script editor:
   - Go to your Google Sheet.
   - Click on Extensions > Apps Script.
##     Write the script:
![image](https://github.com/ginnto/html-form-data-to-google-sheets-2024/assets/92264484/ddfcf72d-2569-42c9-b2eb-caf04c8381bf)

> [!TIP]
> check Code.gs

        

##     Deploy the script as a web app:
       1. Click on Deploy > New deployment.
       2. Select Web app.
       3. Give your deployment a description.
       4. Under Execute as, select Me.
       5. Under Who has access, select Anyone.
       6. Click Deploy.
       7. Authorize the script if prompted.
       8. Copy the URL from the Web app URL field. This is your SCRIPT_URL.

## Step 3: Create the HTML Form
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">

  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" crossorigin="anonymous" />

  <title>Html Form Data to Google Sheet</title>
</head>

<body>
  <section class="bg-light py-3 py-md-5">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h4 class="mb-4 display-5 text-center">Contact Me</h4>
          <p class="text-secondary mb-5 text-center">The best way to contact me is to use the contact form below. Please fill out all of the required fields and I will get back to you as soon as possible.</p>
          <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle">
        </div>
      </div>

      <div
        id="success-message"
        style="
          display: none;
          margin: 20px;
          font-weight: bold;
          color: green;
          padding: 8px;
          background-color: beige;
          border-radius: 4px;
          border-color: aquamarine;
        "
      >Your message has been sent successfully!</div>

      <div class="row justify-content-lg-center">
        <div class="col-12 col-lg-9">
          <div class="bg-white border rounded shadow-sm overflow-hidden">
            <form id="myForm" method="POST" onsubmit="handleFormSubmit(event)">
              <div class="row gy-4 gy-xl-5 p-4 p-xl-5">
                <div class="col-12">
                  <label for="fullname" class="form-label">Full Name <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" id="fullname" name="fullname" required>
                </div>
                <div class="col-12 col-md-6">
                  <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                  <div class="input-group">
                    <span class="input-group-text">
                      <i class="fa-solid fa-envelope"></i>
                    </span>
                    <input type="email" class="form-control" id="email" name="email" required>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <label for="phone" class="form-label">Phone Number</label>
                  <div class="input-group">
                    <span class="input-group-text">
                      <i class="fa-solid fa-phone"></i>
                    </span>
                    <input type="tel" class="form-control" id="phone" name="phone">
                  </div>
                </div>
                <div class="col-12">
                  <label for="message" class="form-label">Message <span class="text-danger">*</span></label>
                  <textarea class="form-control" id="message" name="message" rows="3" required></textarea>
                </div>
                <div class="col-12">
                  <div class="d-grid">
                    <input class="btn btn-primary btn-lg" type="submit" value="Submit">
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <script>
    function handleFormSubmit(event) {
      event.preventDefault();
      var form = event.target;
      var formData = new FormData(form);

      fetch("YOUR_SCRIPT_URL", {
        method: 'POST',
        body: new URLSearchParams(formData),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(response => response.json())
        .then(data => {
          document.getElementById("myForm").reset();
          document.getElementById("success-message").style.display = "block";
        }).catch(error => {
          console.error('Error!', error.message);
        });
    }
  </script>
</body>
</html>

```
> [!TIP]
> check index.html 
> [!NOTE]
> Replace YOUR_SCRIPT_URL with the URL of your deployed Google Apps Script.

### Step 4: Test the Form

- Open index.html in your browser:
- Fill out the form and submit it.
- Check your Google Sheet to see if the data has been added to "Sheet1".

## Conclusion

 :star_struck: You have successfully created an HTML form that submits data to a Google Sheet using Google Apps Script. You can customize the form and script as needed for your specific use case.


live link: html-form-data-to-google-sheet.netlify.app
