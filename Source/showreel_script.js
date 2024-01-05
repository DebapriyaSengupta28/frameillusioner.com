// Function to get the user's country based on IP
async function getUserCountry() {
   try {
     const apiKey = '27b0f6564aea4b85b5df0a2780d565ca'; // Replace with your ipgeolocation.io API key
     const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`);
     
     if (response.ok) {
       const data = await response.json();
       console.log('User country based on IP:', data.country_name);
       return data.country_code2;
     } else {
       console.error('Error fetching user country:', response.statusText);
       return null;
     }
   } catch (error) {
     console.error('Error fetching user country:', error);
     return null;
   }
 }
 
 // Declare phoneInput in the global scope
 let phoneInput;

 // Function to initialize intlTelInput with the user's country based on IP
 async function initializeIntlTelInput() {
   const input = document.querySelector("#phone");
 
   // Get the user's country based on IP
   const userCountry = await getUserCountry();
   console.log('User country for intlTelInput:', userCountry);
 
   // Initialize intlTelInput with the user's country
   phoneInput = window.intlTelInput(input, {
     utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
     initialCountry: userCountry || "in",
     preferredCountries: ["us", "gb", "ca", "au", "de", "fr", "in"],
   });
 
   // Log the selected country (for verification)
   console.log('Selected country in intlTelInput:', phoneInput.getSelectedCountryData());
 }
 
 // Call the function to initialize intlTelInput with user's country based on IP
 initializeIntlTelInput();

 const verificationResult = document.querySelector("#verificationResult");
 const notification = document.getElementById("notification");
 const notificationText = document.getElementById("notificationText");
 
 function verifyPhoneNumber() {
   const phoneNumber = phoneInput.getNumber();
   const countryCode = "+" + phoneInput.getSelectedCountryData().dialCode;
 
   verificationResult.style.display = "block";
   verificationResult.innerHTML = `Your phone number is: <strong>${countryCode} ${phoneNumber.substr(countryCode.length)}</strong>`;
 }
 
 function validateInputs() {
   const nameInput = document.getElementById("name");
   const emailInput = document.getElementById("email");
   const companyInput = document.getElementById("company");
   const phoneInput = document.getElementById("phone");
 
   nameInput.style.borderColor = "#ccc";
   emailInput.style.borderColor = "#ccc";
   companyInput.style.borderColor = "#ccc";
   phoneInput.style.borderColor = "#ccc";
 
   if (!nameInput.value || !emailInput.value || !companyInput.value || !phoneInput.value) {
     if (!nameInput.value) {
       nameInput.style.borderColor = "red";
     }
     if (!emailInput.value) {
       emailInput.style.borderColor = "red";
     }
     if (!companyInput.value) {
       companyInput.style.borderColor = "red";
     }
     if (!phoneInput.value) {
       phoneInput.style.borderColor = "red";
     }
 
     console.log("Provide all the information.");
     return false;
   }
 
   // All information provided, show notification
   showNotification();
 
   // Reset the form and close the request box after user closes the alert
   const requestForm = document.getElementById("requestForm");
   requestForm.reset();
   closeBox();
 
   return true;
 }
 
 function showNotification() {
   alert('Request Button Clicked!');
 }
 
 function showRequestBox() {
   const requestBox = document.getElementById("requestBox");
   const overlay = document.getElementById("request_box_overlay");
   const requestForm = document.getElementById("requestForm");
 
   requestForm.reset();
 
   requestBox.style.display = "block";
   overlay.style.display = "block";
 }
 
 function closeBox() {
   const requestBox = document.getElementById("requestBox");
   const overlay = document.getElementById("request_box_overlay");
   const phoneInput = document.getElementById("phone"); // Get the phone input
 
   requestBox.style.display = "none";
   overlay.style.display = "none";
 
   // Reset the phone input value
   phoneInput.value = "";
 
   // Reset the border color of the phone input
   phoneInput.style.borderColor = "#ccc";

  // Reset and hide the verification result
  verificationResult.innerHTML = "";
  verificationResult.style.display = "none";   
}

