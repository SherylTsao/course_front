const addStuNumDOM = document.getElementById("addStuNum");
const addStuNameDOM = document.getElementById("addStuName");
const button = document.getElementById("teacherAddStu");

button.addEventListener("click", function () {

     teacherAddStu();
})


function teacherAddStu() {
     const body = {
          stuNumber: +addStuNumDOM.value,
          stuName: addStuNameDOM.value,
     }
     console.log(body)
     fetch("http://localhost:8080/createStudents", {

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