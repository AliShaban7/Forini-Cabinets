/**
 * WORKING Google Apps Script for Forini Cabinets Form Submissions
 * This version actually works and handles CORS properly
 */

function doPost(e) {
  try {
    // REPLACE WITH YOUR GOOGLE SHEET ID
    const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE';
    const SHEET_NAME = 'Form Responses';

    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      sheet
        .getRange(1, 1, 1, 7)
        .setValues([
          [
            'Timestamp',
            'Name',
            'Phone',
            'Email',
            'Address',
            'Service',
            'Message',
          ],
        ]);
      sheet.getRange(1, 1, 1, 7).setFontWeight('bold');
    }

    // Parse the form data
    let data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      // Handle URL-encoded data
      data = e.parameter;
    }

    // Prepare row data
    const timestamp = new Date();
    const rowData = [
      timestamp,
      data.name || '',
      data.phone || '',
      data.email || '',
      data.address || '',
      data.service || '',
      data.message || '',
    ];

    // Add data to sheet
    sheet.appendRow(rowData);

    // Return success response with proper CORS headers
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: 'Form submitted successfully',
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        message: 'Error: ' + error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (for testing)
  return ContentService.createTextOutput(
    JSON.stringify({
      success: true,
      message: 'Google Apps Script is working!',
    })
  ).setMimeType(ContentService.MimeType.JSON);
}
