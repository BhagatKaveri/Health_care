let data;
const button = document.getElementById("cf-submit")
const pname = document.getElementById("name")
const pemail = document.getElementById("email")
const select_date = document.getElementById("")
const select_time =document.getElementById("")
const speciality =document.getElementById("")
const mobile = document.getElementById("phone")
const message=document.getElementById("message")
    





button.addEventListener("click", () => {
    event.preventDefault();

   /* var data = JSON.stringify({
        //"pid": pid.value,
        "pname": pname.value,
        "pemail": pemail.value,
        "select_date":select_date.value,
        "select_time":select_date.value,
        "speciality":speciality.value,
        "mobile": mobile.value,
        "message": message.value,

    });*/
    console.log(pname);



  //  console.log(data);
})
//console.log(data);
// async function postData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

// postData('http://localhost:8000/api/v1/appointment/makeappointment',  {
    
//     //"pid":pid.value ,
//     "pname":pname.value,
//     "pemail":pemail.value ,
//     "select_date":select_date.value,
//     "select_time":select_date.value,
//     "speciality":speciality.value,
//     "mobile":mobile.value,
     

//  })
//   .then(data => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });


