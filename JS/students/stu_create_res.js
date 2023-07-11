// session getItem
let session = JSON.parse(sessionStorage.getItem("data"))
const courseName = document.getElementById("courseName");
const courseDay = document.getElementById("courseDay");
const courseCredit = document.getElementById("courseCredit");
const startTime = document.getElementById("startTime");
const endTime = document.getElementById("endTime");

const createOrModify = document.getElementById("createOrModify");

// 返回修改課程頁面&系統首頁
const modifybtn = document.getElementById("modify");
const homepagebtn = document.getElementById("homepage");



console.log(session.courName)
courseName.value = `${session.courName}`
courseDay.value = `${session.courDay}`
courseCredit.value = `${session.courCredit}`
startTime.value = `${session.startTime}`
endTime.value = `${session.endTime}`

modifybtn.addEventListener("click", function () {
     let arr = [{
          courSeq: session.courSeq,
          courName: courseName.value,
          courDay: courseDay.value,
          courCredit: courseCredit.value,
          startTime: startTime.value,
          endTime: endTime.value
     }];
     teacherUpdate(arr);
})


function teacherUpdate(arr) {
     const body = {
          // req.setList
          course: arr
     }
     console.log(body)
     fetch("http://localhost:8080/updateCourse", {

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
                    sessionStorage.setItem("data", JSON.stringify(data.course[0]));
                    //  刷新網頁
                    window.location.reload();


               } else {
                    alert(data.message)
               }
          })
}
