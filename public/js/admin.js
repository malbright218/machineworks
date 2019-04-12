$(document).ready(function () {

    var mName = $("#machineName");
    var mSerial = $("#serialNumber");
    var uName = $("#inputUser");
    var uPass = $("#inputPassword");
    

    $("#addMachine").on("click", postNewMachine)
    $("#addUser").on("click", postNewUser)
    $("#isAdmin").on("click", state)
    
    function state() {
        if ($("#isAdmin").attr("state") == 'no') {
            $("#isAdmin").attr("state", "yes")
        } else if ($("#isAdmin").attr("state") == 'yes') {
            $("#isAdmin").attr("state", "no")
        }
    }
    

    function postNewMachine() {
        if (!mName.val().trim().trim()) {
            $("#targetMessage1").append("You need to add a machine first.")
            return;
        }
        var newMachine = {
            name: mName.val().trim(),
            serial: mSerial.val().trim()
        }
        submitMachine(newMachine)
        $("#machineName").val('');
        $("#serialNumber").val('');        
    };

    function submitMachine(data) {
        $.post("/api/machine", data)
      };


      function postNewUser() {

        if (!uName.val().trim().trim()) {
            $("#targetMessage2").append("You need to add a user first.")
            return;
        }
        var newUser = {
            userName: uName.val().trim(),
            password: uPass.val().trim(),
            isAdmin: $("#isAdmin").attr("state")
        }
        submitUser(newUser)
        $("#inputUser").val('');
        $("#inputPassword").val('');
      }

      function submitUser(data, err) {
          $.post("/api/user", data)
          if(err) {
              console.log(err)
          }
      }

})