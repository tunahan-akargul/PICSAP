# 🍞 Snackbar Component Usage Guide

A reusable snackbar/toast notification component for your web applications.

## 📁 Files Included

- `snackbar.css` - Component styles
- `snackbar.js` - Component functionality
- `example-usage.html` - Example implementation

## 🚀 How to Use in Any HTML File

### Step 1: Include the Files

Add these lines to your HTML `<head>` section:

```html
<!-- Bootstrap Icons (required for icons) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">

<!-- Include the snackbar component CSS -->
<link rel="stylesheet" href="snackbar.css">
```

Add this line before your closing `</body>` tag:

```html
<!-- Include the snackbar component JavaScript -->
<script src="snackbar.js"></script>
```

### Step 2: Use the Functions

Simply call these functions anywhere in your JavaScript:

```javascript
// Success message (green)
showSuccessSnackbar('File uploaded successfully!');

// Alert/Error message (red)
showAlertSnackbar('Something went wrong!');

// Info message (blue)
showInfoSnackbar('New update available');

// Warning message (yellow)
showWarningSnackbar('Please check your input');

// Custom message with custom icon and type
showCustomSnackbar('Custom message', 'success', 'bi-heart-fill');
```

## 🎨 Available Snackbar Types

### 1. Success Snackbar
```javascript
showSuccessSnackbar('Success message here');
```
- **Color**: Green
- **Icon**: Check circle
- **Use for**: Successful operations

### 2. Alert Snackbar
```javascript
showAlertSnackbar('Error message here');
```
- **Color**: Red (matches your theme)
- **Icon**: Warning triangle
- **Use for**: Errors, failures

### 3. Info Snackbar
```javascript
showInfoSnackbar('Information message here');
```
- **Color**: Blue
- **Icon**: Info circle
- **Use for**: General information

### 4. Warning Snackbar
```javascript
showWarningSnackbar('Warning message here');
```
- **Color**: Yellow
- **Icon**: Warning triangle
- **Use for**: Warnings, cautions

### 5. Custom Snackbar
```javascript
showCustomSnackbar('Custom message', 'type', 'icon-class');
```
- **Parameters**: 
  - `message`: Your custom message
  - `type`: CSS class for styling
  - `icon`: Bootstrap icon class (e.g., 'bi-heart-fill')

## ⚡ Advanced Features

### Custom Duration
```javascript
// Show for 5 seconds instead of default 3 seconds
showSuccessSnackbar('This stays longer', 5000);
```

### Multiple Snackbars
```javascript
// Show multiple snackbars - they stack automatically
showSuccessSnackbar('First message');
showAlertSnackbar('Second message');
showInfoSnackbar('Third message');
```

### Programmatic Usage
```javascript
// Access the manager directly for advanced usage
snackbarManager.success('Success message');
snackbarManager.alert('Error message');
snackbarManager.info('Info message');
snackbarManager.warning('Warning message');
```

## 📱 Features

- ✅ **Auto-dismiss**: Disappears after 3 seconds (customizable)
- ✅ **Smooth animations**: Fade in/out effects
- ✅ **Stacking**: Multiple snackbars stack vertically
- ✅ **Responsive**: Works on all screen sizes
- ✅ **Theme matching**: Uses your existing font and colors
- ✅ **No dependencies**: Only requires Bootstrap Icons
- ✅ **Easy integration**: Just include 2 files

## 🎯 Example Integration

### In your HTML file:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page</title>
    
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    
    <!-- Your existing styles -->
    <link rel="stylesheet" href="style.css">
    
    <!-- Include snackbar component -->
    <link rel="stylesheet" href="snackbar.css">
</head>
<body>
    <!-- Your page content -->
    <button onclick="showSuccessSnackbar('Hello World!')">Test Snackbar</button>
    
    <!-- Include snackbar component -->
    <script src="snackbar.js"></script>
</body>
</html>
```

### In your JavaScript:
```javascript
// Example usage in form submission
document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate form processing
    if (isFormValid()) {
        showSuccessSnackbar('Form submitted successfully!');
    } else {
        showAlertSnackbar('Please fill all required fields');
    }
});

// Example usage in file upload
function handleFileUpload(files) {
    if (files.length > 0) {
        showInfoSnackbar(`${files.length} files selected`);
        // Process files...
        showSuccessSnackbar('Files uploaded successfully!');
    } else {
        showWarningSnackbar('Please select files to upload');
    }
}
```

## 🔧 Customization

### Modify Colors
Edit `snackbar.css` to change colors:
```css
.snackbar.success {
    background-color: #your-color;
    border: 2px solid #your-border-color;
}
```

### Modify Position
Edit `snackbar.css` to change position:
```css
.snackbar {
    top: 30px;    /* Change to bottom: 30px for bottom position */
    right: 30px;  /* Change to left: 30px for left position */
}
```

### Modify Duration
Change default duration in `snackbar.js` or pass custom duration:
```javascript
// Custom duration (in milliseconds)
showSuccessSnackbar('Message', 5000); // 5 seconds
```

## 📄 File Structure
```
your-project/
├── snackbar.css          # Component styles
├── snackbar.js           # Component functionality  
├── example-usage.html    # Example implementation
├── index.html            # Your main page
├── fileChange.html       # Your photo converter
└── style.css            # Your existing styles
```

## 🎉 That's It!

You now have a fully functional, reusable snackbar component that you can use across all your HTML files. The component automatically handles positioning, animations, and cleanup! 