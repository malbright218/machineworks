$(document).ready(function () {

    var machNew = $("#machineName");
    var serialNew = $("#machineSerial");
    
    // function test(event) {
    //   event.preventDefault()
  
    //   console.log(userNew.val().trim());
    //   console.log(passNew.val().trim())
    // }
  
    $("#addNewMach").on("click", handleNewMach); 
   
  
    function handleNewMach(event) {
      event.preventDefault();
      $.get("/api/company", newUser)
  
      function newUser(data) {
        console.log(data)    
  
  
        if (!machNew.val().trim().trim()) {
          return;
        }
        var generateMach = ({
          name: machNew.val().trim(),
          serial: serialNew.val().trim()
        })
  
        console.log(generateMach)
        addMach(generateMach)
        window.location.href="admin.html"
      }    
    }
  
    function addMach(mach) {
      $.post("/api/machine", mach)
    }
  
  
  })
  
  
  