// ===============================
// Smooth scrolling for anchor links
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===============================
// Gallery hover effect
// ===============================
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.style.transform = "scale(1.05)";
    img.style.transition = "transform 0.3s";
  });
  img.addEventListener('mouseleave', () => {
    img.style.transform = "scale(1)";
  });
});

// ===============================
// Portfolio Lightbox functionality
// ===============================
const galleryItems = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = item.src;
  });
});

function closeLightbox() {
  lightbox.style.display = 'none';
}

// ===============================
// UPI Payment Lightbox functionality
// ===============================
const upiLink = "upi://pay?pa=9966019301@ybl&pn=RIV%20Thumbnails&am=49&cu=INR";

const payBtn = document.getElementById('payBtn');        
const upiLightbox = document.getElementById('upiLightbox'); 
const closeBtn = document.getElementById('closeLightbox');  
const upiPayBtn = document.getElementById('upiPayBtn');     

const paymentDoneInput = document.getElementById('paymentDone'); 
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

// Show UPI lightbox when Pay Now is clicked
if (payBtn) {
  payBtn.addEventListener('click', (e) => {
    e.preventDefault();
    upiLightbox.style.display = 'flex';
  });
}

// Close lightbox when clicking the X icon
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    upiLightbox.style.display = 'none';
  });
}

// Handle mobile vs desktop payments
if (upiPayBtn) {
  upiPayBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (isMobile) {
      // Open UPI app directly
      window.location.href = upiLink;
      paymentDoneInput.value = "true"; // mark payment done for mobile
      upiLightbox.style.display = 'none';
      alert("Payment page opened. After completing payment, submit the form.");
    } else {
      // Desktop users scan QR
      alert("Please scan the QR code using your UPI app on your phone and then submit the form.");
    }
  });
}

// Close lightbox if user clicks outside the box
if (upiLightbox) {
  upiLightbox.addEventListener('click', (e) => {
    if (e.target === upiLightbox) {
      upiLightbox.style.display = 'none';
    }
  });
}

// ===============================
// Contact Form using EmailJS
// ===============================
const contactForm = document.querySelector('#contact form');

contactForm.addEventListener('submit', function(e){
  e.preventDefault();

  // Check if payment is done
  if(document.getElementById('paymentDone').value !== "true"){
    alert("⚠ Please complete the payment first. Once payment is done, you can submit your details and we will receive your message.");
    return; // stop form submission
  }

  const name = contactForm.querySelector('input[name="name"]').value.trim();
  const email = contactForm.querySelector('input[name="_replyto"]').value.trim();
  const message = contactForm.querySelector('textarea[name="message"]').value.trim();

  // Send email via EmailJS
  emailjs.send('service_hny7wft', 'template_snaymw6', {
    from_name: name,
    reply_to: email,
    message: message
  })
  .then(() => {
    alert("✅ Your message has been sent successfully!");
    contactForm.reset();
    document.getElementById('paymentDone').value = "false"; // reset payment flag
  })
  .catch((err) => {
    console.error(err);
    alert("❌ Error sending message. Please try again.");
  });
});