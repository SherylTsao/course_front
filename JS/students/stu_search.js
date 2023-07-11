
const stuName = document.getElementById("stuName");
const stuNumber = document.getElementById("stuNumber");
const search = document.getElementById("search");

search.addEventListener("click", function () {
     teacherSearch()
    
})



const resCourse = document.getElementById("resCourse");



function teacherSearch() {
     const body = {
          stuName: stuName.value,
          stuNumber: +stuNumber.value,
     }
     console.log(body)
     fetch("http://localhost:8080/search", {

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
               let list = data.students;
               let resTtr =  `<table  style="border-collapse:separate; border-spacing: 10px 5px; text-align:center">`
                    + "<tr>"
                    + "<th>"
                    + "課程流水號"
                    + "</th>"

                    

                    + "<th>"
                    + "課程學分數"
                    + "</th>" 


                    + "</tr>";
               for (let item of list) {
                    resTtr += "<tr>"
                    resTtr += `<th>${item.stuSeq}</th>`
                    resTtr += `<th>${item.courSeq}</th>`
                    resTtr += "</tr>"
               }
               resTtr += "</table>"
               resCourse.innerHTML = `${resTtr}`;
          })
}
