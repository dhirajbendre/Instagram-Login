const firebaseConfig = {
  //   copy your firebase config informations
  
    apiKey: "AIzaSyAqitcKGIzxVMFyGFmOPeN-MKi8ma1JF9M",
    authDomain: "contactform-118a7.firebaseapp.com",
    databaseURL: "https://contactform-118a7-default-rtdb.firebaseio.com",
    projectId: "contactform-118a7",
    storageBucket: "contactform-118a7.appspot.com",
    messagingSenderId: "479688628751",
    appId: "1:479688628751:web:30cfab64e3870db520617a"
 
  
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var Password = getElementVal("Password");

  saveMessages(name, emailid, Password);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, Password) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    Password: Password,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
