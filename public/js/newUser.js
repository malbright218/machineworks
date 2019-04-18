$(document).ready(function () {

  var userNew = $("#newUserName");
  var passNew = $("#newUserPassword");
  
  // function test(event) {
  //   event.preventDefault()

  //   console.log(userNew.val().trim());
  //   console.log(passNew.val().trim())
  // }

  $("#addNewUser").on("click", handleAddUser);
  $("#userIsAdmin").on("click", setAdminState)

  function setAdminState() {
    if($("#userIsAdmin").attr("state") === "no") {      
      $("#userIsAdmin").attr("state", "yes")
    } else if ($("#userIsAdmin").attr("state") === "yes") {      
      $("#userIsAdmin").attr("state", "no")
    }
  }

  function handleAddUser(event) {
    event.preventDefault();
    $.get("/api/company", newUser)

    function newUser(data) {
      console.log(data)    


      if (!userNew.val().trim().trim()) {
        return;
      }
      var generateUser = ({
        userName: userNew.val().trim(),
        password: passNew.val().trim(),
        isAdmin: $("#userIsAdmin").attr("state"),
        CompanyId: 1
      })

      console.log(generateUser)
      addUser(generateUser)
      window.location.href="admin.html"
    }    
  }

  function addUser(user1) {
    $.post("/api/user", user1)
  }


})


