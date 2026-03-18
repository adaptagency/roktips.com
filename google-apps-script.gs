/**
 * RokTips lead capture endpoint (Google Apps Script)
 *
 * Sheet columns expected (in this order):
 * Timestamp | First name | Email | Phone country | Phone | Channel | Message | User agent | Page
 *
 * Add a new "Message" column AFTER "Channel" in your Google Sheet.
 */

function doPost(e) {
  try {
    var params = (e && e.parameter) || {};

    var firstName = (params.first_name || '').trim();
    var email = (params.email || '').trim();
    var phoneCountry = (params.phone_country || '').trim();
    var phone = (params.phone || '').trim();
    var channel = (params.channel || '').trim();
    var message = (params.message || '').trim(); // "B2B" or "B2C"
    var userAgent = (params.user_agent || '').trim();
    var page = (params.page || '').trim();

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Sheet1') || ss.getSheets()[0];

    sheet.appendRow([
      new Date(),
      firstName,
      email,
      phoneCountry,
      phone,
      channel,
      message,
      userAgent,
      page
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

