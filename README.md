# AccuImgGen
AccuImgGen - A Google Apps Script to generate images using DALL·E 3 API   and save them to Google Drive for direct use in Google Sheets.

AccuImgGen: 自動圖片生成工具 (Automated Image Generation Tool)
簡介 (Introduction)
AccuImgGen 是一款結合了 OpenAI 的 DALL·E 3 API 和 Google Sheets 的自動圖片生成工具。它允許用戶在 Google Sheets 中批量生成圖片，並自動將這些圖片儲存在 Google Drive 中，以防止圖床失效。

AccuImgGen is an automated image generation tool that combines OpenAI's DALL·E 3 API with Google Sheets. It allows users to generate images in bulk within Google Sheets and automatically saves these images to Google Drive to prevent link expiration.

功能 (Features)
批量圖片生成：基於用戶在 Google Sheets 中輸入的提示生成圖片。

直接顯示圖片：在 Google Sheets 中直接顯示生成的圖片。

自動儲存圖片：將生成的圖片自動儲存到 Google Drive。

Bulk Image Generation: Generates images based on prompts entered by the user in Google Sheets.

Direct Image Display: Displays generated images directly within Google Sheets.

Automatic Image Storage: Automatically saves generated images to Google Drive.

使用指南 (Usage Guide)
設定 API 密鑰和端點：替換腳本中的 'YOUR_DALL-E_3_API_KEY' 為你的 DALL·E 3 API 密鑰，並將 'CORRECT_DALL-E_3_API_ENDPOINT' 替換為正確的 API 端點。

準備 Google Sheets：在 Google Sheets 的 A 列中從第 2 行開始輸入圖片生成提示。

執行 AccuImgGen 腳本：在 Google Sheets 的 Apps Script 編輯器中運行此腳本。

Set up API Key and Endpoint: Replace 'YOUR_DALL-E_3_API_KEY' in the script with your DALL·E 3 API key and 'CORRECT_DALL-E_3_API_ENDPOINT' with the correct API endpoint.

Prepare Google Sheets: Enter image generation prompts in column A of Google Sheets, starting from row 2.

Run the AccuImgGen script: Execute this script in the Apps Script editor of Google Sheets.

安裝 (Installation)
使用指南：
請將 CORRECT_DALL-E_3_API_ENDPOINT 替換為實際的 DALL·E 3 API 端點。
將 YOUR_DALL-E_3_API_KEY 替換為您的 DALL·E 3 API 密鑰。
確保 Google Drive 中有一個名為 "AccuImgGen" 的資料夾，用於儲存生成的圖片。
此腳本將生成的圖片URL放置在試算表的 B 列，並將對應的 Google Drive 鏈接放置在 C 列。

貢獻 (Contributing)
歡迎並鼓勵社區貢獻！如果您有改進建議或想要貢獻代碼，請隨時提交 pull 請求或開啟 issue。

Contributions are welcome and encouraged! If you have suggestions for improvement or want to contribute code, feel free to submit a pull request or open an issue.
