function current(){
  let date= new Date()
  let hour= date.getHours()
  let minute= date.getMinutes()
  let second= date.getSeconds()
  let session="AM"


  if(hour==0) {
    hour=12
  }
  if(hour>12){
    hour=hour-12
    session="PM"
  }
  let time=hour+":"+minute+":"+second+" "+session
  
  document.getElementById("dabba").innerText=time
  setTimeout(function(){
    current()
  },1000)
}

current()



