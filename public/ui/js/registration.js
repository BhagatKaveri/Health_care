// //const { json } = require("body-parser");


//  const button =document.getElementById("cf-submit")
//  const pid = document.getElementById("pid")
//  const pname = document.getElementById("pname")
//  const pemail = document.getElementById("pemail")
//  const mobile = document.getElementById("mobile")
//  const password = document.getElementById("password")
//  button.addEventListener('click',(event) => {

//    event.preventDefault();
   
//      //var data = json.stringfy({
//      "pid":pid.value,
//      "pname":pname.value,
//      "pemail":pemail.value,
//      "mobile":mobile.value,
//      "password":password.value,
//   // });
 
//  console.log(data);

//   })
// // const { json } = require("body-parser");

// // async function postData(url = '', data = {}) {
// //     // Default options are marked with *
// //     const response = await fetch(url, {
// //       method: 'POST', // *GET, POST, PUT, DELETE, etc.
// //       mode: 'cors', // no-cors, *cors, same-origin
// //       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
// //       credentials: 'same-origin', // include, *same-origin, omit
// //       headers: {
// //         'Content-Type': 'application/json'
// //         // 'Content-Type': 'application/x-www-form-urlencoded',
// //       },
// //       redirect: 'follow', // manual, *follow, error
// //       referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
// //       body: JSON.stringify(data) // body data type must match "Content-Type" header
// //     });
// //     return response.json(); // parses JSON response into native JavaScript objects
// //   }
  

 
// //   postData('http://localhost:9000/api/v1/patient/register',  {
// //       "pid":"11",
// //       "pname":"nera sawkar",
// //       "pemail": "nha@gmail.com",
// //       "mobile":"87685457433",
// //       "password":"670067892"
      

// //    })
  
// //     .then(user => {
// //       console.log(user); // JSON data parsed by `data.json()` call
// //     });
  


// 8888888888888888888888888888888888888888888888


let data;
const button = document.getElementById("button")
const pid = document.getElementById("empid")
const pname = document.getElementById("firstname")
const pemail = document.getElementById("email")
const mobile = document.getElementById("phone_number")
const password= document.getElementById("password")



button.addEventListener("click", () => {
    event.preventDefault();

    var data = JSON.stringify({
        "pid": pid.value,
        "pname": pname.value,
        "pemail": pemail.value,
        "mobile": mobile.value,
        "password": password.value,

    });




    console.log(data);
})
console.log(data);
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('http://localhost:8000/api/v1/patient/register',  {
    
    "pid":pid.value ,
    "pname":pname.value,
    "pemail":pemail.value ,
    "mobile":mobile.value,
     "password":password.value,
     
 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });



// function formValidation() {


//     if (empid.value.length < 2 || empid.value.length > 20) {
//         alert("empid length should be more than 2 and less than 21 charaters");
//         userName.focus();
//         return false;
//     }
//     if (firstname.value.match(a - zA - Z)) {
//         alert("Name length should be more than 2 and less than 21 charaters");
//         userName.focus();
//         return false;
//     }

//     if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
//         alert("Please enter a valid email!");
//         email.focus();
//         return false;
//     }

//     if (!phone_number.value.match(/^[1-9][0-9]{9}$/)) {
//         alert("Phone number must be 10 characters long number and first digit can't be 0!");
//         phone_number.focus();
//         return false;
//     }

//     if (Gender.Gender.value === "") {
//         alert("Please select your gender!");
//         return false;


// checking zip code
// if (!zipcode.value.match(/^[0-9]{6}$/)) {
//     alert("Zip code must be 6 characters long number!");
//     zipcode.focus();
//     return false;
// }
// return true;