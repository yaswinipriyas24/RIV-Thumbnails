# RIV Thumbnails

## Project Overview

*RIV Thumbnails* is a modern, single-page responsive website designed to help small content creators get *custom thumbnails* for their videos. Built with *HTML, CSS, and JavaScript, the website integrates **UPI payments* for monetization and *EmailJS* for contact form submissions.

The website allows users to:
- View portfolio samples
- Understand the service process
- Make secure payments via UPI
- Submit inquiries after payment

---

## Features

### 1. Header & Hero Section
- Logo, site title, and tagline.
- "Work With Us" button smoothly scrolls to the contact section.

### 2. About Section
- Explains the services and mission of RIV Thumbnails.
- Highlights pricing and revenue-sharing approach.
- Emphasizes important keywords for clarity.

### 3. How It Works Section
- Step-by-step process:
  1. Share video details
  2. Pay a small upfront fee (₹49)
  3. 2% revenue share after video performance
  4. Receive a custom thumbnail
- Semi-transparent step cards over background images for readability.

### 4. Portfolio Section
- Showcases 15 example thumbnails.
- Clickable images open in a *lightbox* for full-size viewing.
- Hover effect enlarges images slightly for interactivity.

### 5. Payment Section
- “Pay Now” button triggers a *UPI payment lightbox*.
- *Mobile Users:* Opens UPI apps directly (PhonePe, GPay).
- *Desktop Users:* Displays a QR code to scan.
- Payment status is tracked via a **hidden input field (paymentDone).
- Users cannot submit the contact form until payment is completed.

### 6. Contact Section
- Collects Name, Email, and Message.
- Submissions are sent via *EmailJS*.
- Validates required fields before submission.
- Alerts users to complete payment first if not done.

### 7. Smooth Scrolling
- Clicking internal links smoothly scrolls to target sections.

### 8. Responsive Design
- Works on desktop and mobile.
- Flexbox layout for portfolio gallery and about section.
- Adaptive background images and overlays for readability.

---

## Technical Stack
- *Frontend:* HTML5, CSS3, JavaScript (Vanilla)
- *Payment:* UPI integration with QR code support
- *Email Notifications:* EmailJS for contact form
- *Hosting:* Netlify (or any static hosting platform)

---

## Project Structure
```
riv-thumbnails/
├─ index.html
├─ style.css
├─ script.js
├─ images/
│  ├─ logo.jpg
│  ├─ background.jpg
│  ├─ upi-qr.jpg
│  └─ ...other thumbnails
```
---

## Setup Instructions

1. *Clone the repository:*
```bash
git clone <r>
```
2. *Open locally:*
   ```
   Open index.html in any browser.
   ```

3.*EmailJS Integration:*
* Replacethe following in script.js:
```
emailjs.init('YOUR_PUBLIC_KEY'); // Public Key
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {...});
```
4.*UPI Payment:*
* Replace UPI ID in script.js:
```
const upiLink = "upi://pay?pa=YOUR_UPI_ID&pn=RIV%20Thumbnails&am=49&cu=INR";
```
5.*Deploy on Netlify:*
* Drag & drop project folder into Netlify, or connect via GitHub.

## Usage Flow

1. User visits the website.
2. Clicks “Pay Now” to complete payment.
3. Mobile users open UPI apps; desktop users scan QR code.
4. After payment, user fills the contact form.
5. EmailJS sends the form data to the admin email.

---

## Key Features Recap

- Fully responsive and visually appealing
- Smooth scrolling for navigation
- Lightbox for portfolio images
- UPI payment integration
- EmailJS contact form with payment validation
- Form submission restricted until payment is completed

---

## Author

*RIV Thumbnails Team*  
© 2025

