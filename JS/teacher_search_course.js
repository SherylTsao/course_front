// session getItem
let session = JSON.parse(sessionStorage.getItem("data"))
// const courName = document.getElementById("courName");
const coursSeq = document.getElementById("courSeq");
const search = document.getElementById("search");
// const createOrModify = document.getElementById("createOrModify");
const inputNameOrSeq = document.getElementById("inputNameOrSeq");
inputNameOrSeq.innerHTML = `<input type="text" disabled="disabled" style="height:40px">`;
let btnUpdate = ""
let btnDelete = ""
search.addEventListener("change", function () {
     if (search.value == "課程名稱") {
          // let input1 = document.createElement('input');
          // input1.id="input1"
          // inputNameOrSeq.appendChild(input1);
          inputNameOrSeq.innerHTML = `<input type="text" style="height:40px;" id="input1">`;
     } else if (search.value == "課程代碼") {
          inputNameOrSeq.innerHTML = `<input type="number" style="height:40px;" id="input2">`;

     }
     else {
          inputNameOrSeq.innerHTML = `<input type="text" disabled="disabled" style="height:40px">`;
     }
})
// 返回修改課程頁面&系統首頁
const modifybtn = document.getElementById("modify");
const homepagebtn = document.getElementById("homepage");


const resCourse = document.getElementById("resCourse");

// 連接後端查詢
const button = document.getElementById("searchbtn");

button.addEventListener("click", function () {
     let input1 = document.getElementById("input1");
     let input2 = document.getElementById("input2");
     console.log(input1)
     console.log(input2)

     if (input1 != null) {

          teacherSearch(input1.value, 0);
     } else if (input2 != null) {
          teacherSearch(null, input2.value);

     }
     else {
          teacherSearch();
     }
})


function teacherSearch(inputValue1, inputValue2) {
     const body = {
          courName: inputValue1,
          courSeq: +inputValue2,
     }
     console.log(body)
     fetch("http://localhost:8080/readCourse", {

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
               console.log(data);
               // 依照課程名稱查詢
               let list = data.course;
               // 依照課程代碼查詢
               let course = data.myCourse;

               let resTtr = `<table  style="border-collapse:separate; border-spacing: 10px 5px; text-align:center">`
                    + "<tr>"
                    + "<th>"
                    + "編碼"
                    + "</th>"
                    + "<th>"
                    + "課程"
                    + "</th>"
                    + "<th>"
                    + "星期"
                    + "</th>" + "<th>"
                    + "上課時間"
                    + "</th>" + "<th>"
                    + "下課時間"
                    + "</th>" + "<th>"
                    + "學分數"
                    + "</th>"
                    + "</tr>";
               // 判斷是否為list
               if (list != null) {
                    for (let item of list) {
                         resTtr += "<tr>"
                         resTtr += `<th>${item.courSeq}</th>`
                         resTtr += `<th>${item.courName}</th>`
                         resTtr += `<th>${item.courDay}</th>`
                         resTtr += `<th>${item.startTime}</th>`
                         resTtr += `<th>${item.endTime}</th>`
                         resTtr += `<th>${item.courCredit}</th>`
                         resTtr += `<th><button id="btnUpdate" value="${item.courSeq}">修改</button><button id="btnDelete" value="${item.courSeq}">刪除</button></th>`
                         resTtr += "</tr>"
                    }
               } else {
                    resTtr += "<tr>"
                    resTtr += `<th>${course.courSeq}</th>`
                    resTtr += `<th>${course.courName}</th>`
                    resTtr += `<th>${course.courDay}</th>`
                    resTtr += `<th>${course.startTime}</th>`
                    resTtr += `<th>${course.endTime}</th>`
                    resTtr += `<th>${course.courCredit}</th>`
                    resTtr += `<th><button id="btnUpdate_${course.courSeq}" value="">修改</button><button id="btnDelete" value="${course.courSeq}">刪除</button></th>`
                    resTtr += "</tr>"
               }

               resTtr += "</table>"
               resCourse.innerHTML = `${resTtr}`;
               // btnUpdate = document.getElementById("btnUpdate");
               // btnDelete = document.getElementById("btnDelete");
               // console.log(btnUpdate + "!!")
               // btnUpdate.addEventListener("click",function(){
               //      alert(btnUpdate.value+"~~")
               // })
          })
}
console.log(btnUpdate)



