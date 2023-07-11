// session getItem
let session = JSON.parse(sessionStorage.getItem("data"))
const courseName = document.getElementById("courseName");
const courseDay = document.getElementById("courseDay");
const courseCredit = document.getElementById("courseCredit");
const startTime = document.getElementById("startTime");
const endTime = document.getElementById("endTime");

// 返回修改課程頁面&系統首頁
const modifybtn = document.getElementById("modify");
const homepagebtn = document.getElementById("homepage");


console.log(session)
courseName.innerText = `${session.myCourse.courName}`
courseDay.innerText = `${session.myCourse.courDay}`
courseCredit.innerText = `${session.myCourse.courCredit}`
startTime.innerText = `${session.myCourse.startTime}`
endTime.innerText = `${session.myCourse.endTime}`
