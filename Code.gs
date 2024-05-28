function doGet(e) {
  return HtmlService.createHtmlOutput("Web App is working. Please use the form on your local machine to submit data.");
}

function doPost(e) {
  var formObject = e.parameter;

  var url = "https://docs.google.com/spreadsheets/d/15z2Zjf603OyeCxLrtRNIyD7Qn10DQRdk213k42Fb3ok/edit#gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Sheet1");

  ws.appendRow([
    formObject.fullname,
    formObject.email,
    formObject.phone,
    formObject.message
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({"result": "success"}))
    .setMimeType(ContentService.MimeType.JSON);
}

function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    });
}
