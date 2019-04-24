$(document).ready(function () {

    getUserData();
    // FUNCTION TO RESET PASSWORD
    $("#reset").on("click", function () {
        var id = $("#userChoice option:selected").attr("id")
        var newPass;
        var passIn = prompt("Please enter a new password")
        if (passIn == null || passIn == "") {
            return;
        } else {
            newPass = passIn;
        }
        var updateUser = {};
        updateUser.id = id;
        updateUser.password = newPass
        updatePassword(updateUser)
    })

    function updatePassword(pass) {
        $.ajax({
            method: "PUT",
            url: "/api/user",
            data: pass
        })
    }
    ////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////
    //FUNCTION TO MAKE USER AN ADMIN
    $("#madmin").on("click", function () {
        console.log("make an admin")
        var id = $("#userChoice option:selected").attr("id")
        var updateUser = {};
        updateUser.id = id
        updateUser.isAdmin = "yes"
        updateAdmin(updateUser)
    })

    function updateAdmin(admin) {
        $.ajax({
            method: "PUT",
            url: "/api/user",
            data: admin
        })
    }
    ////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////
    //FUNCTION TO REMOVE ADMIN STATUS
    $("#radmin").on("click", function () {
        console.log("remove admin")
        var id = $("#userChoice option:selected").attr("id")
        var updateUser = {};
        updateUser.id = id
        updateUser.isAdmin = "no"
        removeAdmin(updateUser)
    })
    function removeAdmin(admin) {
        $.ajax({
            method: "PUT",
            url: "/api/user",
            data: admin
        })
    }
    ////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////
    //FUNCTION TO GO HOME
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