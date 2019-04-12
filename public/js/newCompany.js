$(document).ready(function () {

  var session = sessionStorage.getItem("username")
  console.log(session)

  var cName = $("#companyName");
  var cStreet = $("#companyStreet");
  var cCity = $("#companyCity");
  var cState = $("#companyState");
  var cZip = $("#companyZIP");
  var departments = $("#companyDepartments");





  //     function test(event) {
  //     event.preventDefault()
  //     console.log(cName.val().trim());
  //     console.log(cStreet.val().trim());
  //     console.log(cCity.val().trim());
  //     console.log(cState.val().trim());
  //     console.log(cZip.val().trim());
  //     console.log(depts.val().trim());
  //   }

  $("#companyNext").on("click", handleCompanyNew);


  function handleCompanyNew(event) {
    event.preventDefault();

    $.get("/api/users", logUsers)

    function logUsers(data) {
      console.log(session)
      console.log(data)
      var found = false;
      var userID;
      for (var i = 0; i < data.length; i++) {
        if (data[i].userName == session) {
          var userID = data[i].id;
          console.log(userID)
          found = true;
          break;
        }
      }
      console.log(userID)
      if (!cName.val().trim().trim()) {
        return;
      }

      var userData = sessionStorage.getItem("username")
      console.log(userData)

      var newCompany = {
        name: cName.val().trim(),
        address: cStreet.val().trim(),
        city: cCity.val().trim(),
        state: cState.val().trim(),
        zip: cZip.val().trim(),
        depts: departments.val().trim(),
        UserId: userID
      }
      submitCompany(newCompany)
      newWindow();
    }
  }

  function newWindow() {
    window.location.href = "portal.html"
  }

  function submitCompany(comp) {
    $.post("/api/company", comp)
  }










})