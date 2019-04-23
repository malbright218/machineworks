$(document).ready(function () {
    
    getUserData();

    $("#reset").on("click", function() {
        var id = $("#userChoice option:selected").attr("id")    
        console.log(id)
    })

    

    $("#goHome").on("click", home)
    function home() {
        console.log("click")
        $.get("/api/user", admin)
        function admin(data) {
            var session = sessionStorage.getItem("username")
            console.log(session)
            console.log(data)
            for (var i = 0; i < data.length; i++) {
                if (data[i].userName == session) {
                    console.log("exists")
                    var yes = data[i].isAdmin
                    console.log(yes)
                    if (yes === "yes") {
                        console.log("admin")
                        window.location.href = "admin.html"
                    } else {
                        console.log("profile")
                        window.location.href = "profile.html"
                    }

                }
            }
        }
    }

    function getUserData() {
        $.get("/api/user", display)

        function display(data) {
            console.log(data)
            for (var i = 0; i < data.length; i++) {
                var option = $("<option>")
                option.attr("id", data[i].id)
                option.attr("name", data[i].userName)
                option.append(data[i].userName)
                $("#userChoice").append(option)
            }
        }
    }
})










