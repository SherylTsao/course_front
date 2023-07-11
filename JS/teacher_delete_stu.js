const deleteStuNumDOM = document.getElementById("deleteStuNum");
const deleteStuNameDOM = document.getElementById("deleteStuName");
const button = document.getElementById("teacherDeleteStu");

button.addEventListener("click", function () {

     teacherDeleteStu();
})


function teacherDeleteStu() {
     const body = {
          stuNumber: +deleteStuNumDOM.value,
          stuName: deleteStuNameDOM.value,
     }
     console.log(body)
     fetch("http://localhost:8080/deleteStudents", {

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