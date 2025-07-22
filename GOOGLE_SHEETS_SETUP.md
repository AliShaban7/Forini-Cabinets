# Google Sheets Integration Setup for Forini Cabinets

## 🎯 Goal

Submit forms on your website → Data goes directly to Google Sheets

## 📋 Step-by-Step Setup

### Step 1: Create Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it: "Forini Cabinets - Form Submissions"
4. **Copy the Sheet ID** from the URL

**Example URL:**

```
https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
```

**Sheet ID:** `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

### Step 2: Set Up Apps Script

1. Go to [script.google.com](https://script.google.com)
2. Click **"New Project"**
3. **Delete** the default code
4. **Copy and paste** the code from `google-apps-script-WORKING.js`
5. **Replace** `YOUR_GOOGLE_SHEET_ID_HERE` with your actual Sheet ID
6. **Save** the project (Ctrl+S)
7. Name it: "Forini Form Handler"

### Step 3: Deploy as Web App

1. Click **"Deploy"** → **"New deployment"**
2. Click the gear icon → Select **"Web app"**
3. **Description:** "Forini Form Handler v1"
4. **Execute as:** "Me"
5. **Who has access:** "Anyone"
6. Click **"Deploy"**
7. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/AKfyc...../exec`)

### Step 4: Update Website Forms

Once you have the **Web App URL**, I'll update your website forms to use it.

## 🔧 What Happens

1. User fills form on your website
2. JavaScript sends data to Google Apps Script
3. Apps Script adds row to your Google Sheet
4. User sees success message

## ✅ Benefits

- ✅ Data goes directly to Google Sheets
- ✅ Users stay on your website
- ✅ Automatic timestamp
- ✅ Organized data in spreadsheet
- ✅ No monthly limits
- ✅ You own all the data

## 🚨 Important Notes

- Make sure the Google Sheet is **accessible to your Apps Script**
- The Apps Script must be **deployed as a web app**
- Set permissions to **"Anyone"** for the web app to work
- Test the setup with the test form first

## 📊 Sheet Structure

The script will automatically create these columns:

- **Timestamp** - When form was submitted
- **Name** - Customer name
- **Phone** - Phone number
- **Email** - Email address
- **Service** - Type of service requested
- **Message** - Project details

**Please complete Steps 1-3 and share the Web App URL with me!**
