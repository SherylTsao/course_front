const deleteCourseNum = document.getElementById("deleteCourseNum");
// const stuName = document.getElementById("stuName");
// const courSeq = document.getElementById("courseSeq");
const btn = document.getElementById("teacherDeleteStu");


btn.addEventListener("click", function () {

     deleteCourseByTeacher();

})


function deleteCourseByTeacher() {
     const body = {
          courSeq: +deleteCourseNum.value,
          // courSeq: +courSeq.value,

          // courSeqList: [courSeq.value]

     }
     console.log(body)
     fetch("http://localhost:8080/deleteCourse", {

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
                    alert(data.message)
               } else {
                    alert(data.message)
               }
          })
}