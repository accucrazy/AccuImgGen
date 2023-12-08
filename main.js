/**
 * AccuImgGen - A Google Apps Script to generate images using DALL·E 3 API
 * and save them to Google Drive for direct use in Google Sheets.
 */

/**
 * Main function to generate and save images.
 */
function accuImgGen() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const prompts = sheet.getRange('A2:A').getValues();
  const outputColumnImage = 'B';
  const outputColumnLink = 'C';

  prompts.forEach((prompt, index) => {
    if (prompt[0] !== '') {
      const imageData = callDallE3API(prompt[0]);
      if (imageData) {
        const imageBlob = UrlFetchApp.fetch(imageData).getBlob();
        const file = saveImageToDrive(imageBlob);
        const imageUrl = file.getUrl();
        const imageFormula = '=IMAGE("' + imageUrl + '")';
        sheet.getRange(outputColumnImage + (index + 2).toString()).setFormula(imageFormula);
        sheet.getRange(outputColumnLink + (index + 2).toString()).setValue(imageUrl);
      }
    }
  });
}

/**
 * Calls the DALL·E 3 API to generate an image based on the given prompt.
 * @param {string} prompt - The prompt to generate an image.
 * @returns {string} - URL of the generated image.
 */
function callDallE3API(prompt) {
  const url = 'CORRECT_DALL-E_3_API_ENDPOINT'; // Replace with the correct API endpoint
  const apiKey = 'YOUR_DALL-E_3_API_KEY'; // Replace with your actual API key
  const options = {
    method: 'post',
    contentType: 'application/json',
    headers: {
      Authorization: 'Bearer ' + apiKey,
    },
    payload: JSON.stringify({
      model: "dall-e-3",
      prompt: prompt,
      size: "1024x1024"
    }),
    muteHttpExceptions: true
  };

  try {
    const response = UrlFetchApp.fetch(url, options);
    if (response.getResponseCode() !== 200) {
      Logger.log('Error response: ' + response.getContentText());
      return null;
    }
    const jsonResponse = JSON.parse(response.getContentText());
    return jsonResponse.data[0].url;
  } catch (error) {
    Logger.log('Error calling DALL-E 3 API: ' + error);
    return null;
  }
}

/**
 * Saves an image blob to Google Drive and returns the file object.
 * @param {Blob} imageBlob - The image blob to save.
 * @returns {GoogleAppsScript.Drive.File} - The saved file object.
 */
function saveImageToDrive(imageBlob) {
  const folder = DriveApp.getFoldersByName("AccuImgGen").next(); // Make sure the folder exists
  const file = folder.createFile(imageBlob);
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  return file;
}
