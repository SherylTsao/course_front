const courseNameDOM = document.getElementById("courseName");
const courseDayDOM = document.getElementById("courseDay");
const courseCreditDOM = document.getElementById("courseCredit");
const startTimeDOM = document.getElementById("startTime");
const endTimeDOM = document.getElementById("endTime");
const button = document.getElementById("create");

button.addEventListener("click", function () {
     teacherCreate();
})


function teacherCreate() {
     const body = {
          "courName": courseNameDOM.value,
          "courDay": courseDayDOM.value,
          "courCredit": +courseCreditDOM.value,
          "startTime": startTimeDOM.value,
          "endTime": endTimeDOM.value,

     }
     console.log(body)
     fetch("http://localhost:8080/createCourse", {

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

               if (data.message != null && data.message == "successful!!") {
                    // session setItem
                    sessionStorage.setItem("data", JSON.stringify(data.myCourse));
                    // 跳網頁
                    window.location.href = "http://127.0.0.1:5500/Pages/teacher/teacher_create_course_res.html"
               } else {
                    alert(data.message)
               }
          })
}