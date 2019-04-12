$(document).ready(function () {

  var user = $("#newUsername");
  var pass = $("#newPassword");

  function test(event) {
    event.preventDefault()

    console.log(user.val().trim());
    console.log(pass.val().trim())
  }

  $("#addUser").on("click", handleUserSignUp);


  function handleUserSignUp(event) {
    event.preventDefault();
    $.get("/api/company", newUser)

    function newUser(data) {
      console.log(data)
      if (!user.val().trim().trim()) {
        return;
      }
      var generateUser = ({
        userName: user.val().trim(),
        password: pass.val().trim(),
        UserId: data[0].id
      })
      addUser(generateUser)
    }    
  }

  function addUser(user1) {
    $.post("/api/user", user1)
  }


})


