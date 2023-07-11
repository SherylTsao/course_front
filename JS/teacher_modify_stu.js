const modifyStuNumDOM = document.getElementById("modifyStuNum");
const modifyStuNameDOM = document.getElementById("modifyStuName");
const button = document.getElementById("teacherModifyStu");

button.addEventListener("click", function () {

     teacherModifyStu();
})


function teacherModifyStu() {
     const body = {
          stuNumber: +modifyStuNumDOM.value,
          stuName: modifyStuNameDOM.value,
     }
     console.log(body)
     fetch("http://localhost:8080/updateStudents", {

          method: "POST",
          headers: {
               'Content-Type':
                    'application/json',
          },
          body: JSON.stringify(body)

     })
          .then(function (response) {
               return response.json()
          })
          .then(function (data) {
               console.log(data)
          })
}