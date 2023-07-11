const stuNumber = document.getElementById("stuNumber");
const stuName = document.getElementById("stuName");
const courSeq = document.getElementById("courSeq");
const btn = document.getElementById("create");


btn.addEventListener("click", function () {
     
     create();

})


function create() {
     const body = {
          stuNumber: +stuNumber.value,
          stuName: stuName.value,
         
               courSeqList: [courSeq.value]
         
     }
     console.log(body)
     fetch("http://localhost:8080/create", {

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
                    // sessionStorage.setItem("data", JSON.stringify(data.student));
                    // 跳網頁
                    // window.location.href = "http://127.0.0.1:5500/Pages/students/stu_create_res.html"
               } else {
                    alert(data.message)
               }
          })
}