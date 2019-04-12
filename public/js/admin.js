$(document).ready(function () {

    var mName = $("#machineName");
    var mSerial = $("#serialNumber");
    var uName = $("#inputUser");
    var uPass = $("#inputPassword");
    

    $("#addMachine").on("click", postNewMachine)
    $("#addUser").on("click", postNewUser)

    

    function postNewMachine() {
        if (!mName.val().trim().trim()) {
            console.log("hahahahaha")
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
            console.log("hahahahaha")
            $("#targetMessage2").append("You need to add a user first.")
            return;
        }
        var newUser = {
            userName = uName.val().trim(),
            password = uPass.val().trim(),

        }
      }

})