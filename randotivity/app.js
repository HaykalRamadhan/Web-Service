var button1 = document.getElementById("main__btn");
button1.addEventListener("click", findactivity)

function findactivity(){
  var type = document.getElementById("type").value;
  var range = document.getElementById("outputrange1").value;
  if(type="random"){
    fetch("http://www.boredapi.com/api/activity?participant="+range)
    .then(Response=>Response.json())
    .then(data=>{
      console.log(data.activity);
      document.getElementById("hero__description").innerText = data.activity;
    })
  }
  if(type!="random"){
    fetch("http://www.boredapi.com/api/activity?type="+type+"&participants="+range)
    .then(Response=>Response.json())
    .then(data=>{
      console.log(data.activity);
      document.getElementById("hero__description").innerText = data.activity;
    })
  }
}