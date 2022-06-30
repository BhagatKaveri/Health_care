
let user;

const button =document.getElementById("cf-submit");

 const pemail = document.getElementById("dname");
 
 const password = document.getElementById("pass");
 button.addEventListener('click',(event) => {

   event.preventDefault();

   postData('http://localhost:8000/api/v1/doctor/logindoctor',  {    
    "pemail": pemail.value,
    "password":password.value,
 })
  .then(data => {
   // console.log(data);
//     var login_success = false;  /* set this to true if the login was a success */

// if(login_success == false)
// {
//     document.getElementById("login_failed").innerHTML = "Login Failed.";
// }
// else
// {
//   console.log(data);
//      window.location.href = "index.html";
// }

    console.log(data); // JSON data parsed by `data.json()` call
    //window.location.href='index.html';
  });

 })

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
