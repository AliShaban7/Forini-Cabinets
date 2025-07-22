# Google Sheets Integration for Forini Cabinets

## ✅ Current Setup

Your website now uses **Google Sheets** for form handling - data goes directly to your spreadsheet!

### What's Already Configured:

1. **Main Contact Form** (`index.html`)
2. **Overlay Popup Form** (`index.html`)
3. **Test Form** (`test-form.html`)

All forms use your Google Apps Script: `AKfycbyg9mWDwzbKhMax6UCTOjs5qvmeKEAPrNx0N7OxZOpx6z0ruLs4Q7slh3PY-H13xl8`

## 📧 How It Works

- **Direct to Google Sheets**: All form data goes to your spreadsheet
- **No Monthly Limits**: Completely free with Google Account
- **You Own the Data**: Full control over your customer information
- **Automatic Timestamps**: Each submission includes date/time
- **Organized Data**: Clean columns for easy analysis
- **Real-time Updates**: See submissions immediately in your sheet

## 🔧 To Customize

If you want to change the Google Sheet or modify the script:

1. Go to [script.google.com](https://script.google.com)
2. Find your "Forini Form Handler" project
3. Update the `SHEET_ID` variable with a different Google Sheet ID
4. Re-deploy the web app after making changes

## 📊 Google Sheet Structure

The script automatically creates these columns:
- **Timestamp** - When form was submitted
- **First Name** - Auto-split from the name field
- **Last Name** - Auto-split from the name field  
- **Phone** - Phone number (**REQUIRED**)
- **Email** - Email address (Optional)
- **Service** - Type of service requested (Optional)
- **Message** - Project details (Optional)

### 🎯 Required vs Optional Fields:

**Required Fields (users must fill):**
- ✅ **Name** - Automatically split into First/Last Name in Google Sheets
- ✅ **Phone** - Contact number

**Optional Fields (users can skip):**
- 📧 **Email** - Email address
- 🏠 **Service** - Type of service (Kitchen, Closets, Bathroom, Furniture, Other)
- 💬 **Message** - Project details

## 🚀 Testing

- Visit `test-form.html` to test form submissions
- Test with minimal data (just name + phone)
- Check your Google Sheet for real-time updates
- Name will be automatically split into First/Last columns

## 🔧 Benefits of This Setup

**vs Third-party Services:**
- ✅ You own all the data
- ✅ No monthly submission limits
- ✅ No external dependencies
- ✅ Direct integration with Google Sheets

**User Experience:**
- ✅ Reduced form friction (fewer required fields)
- ✅ Faster form completion
- ✅ Users stay on your website
- ✅ Clear indication of optional vs required fields

**Data Management:**
- ✅ Automatic name splitting (First/Last)
- ✅ Clean, organized data in Google Sheets
- ✅ Easy to export and analyze
- ✅ Real-time updates
