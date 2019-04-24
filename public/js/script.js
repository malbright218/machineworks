$(document).ready(function () {
    sessionStorage.clear();
    var clicks = [];
    var u = []
    companyInfo();

    function companyInfo() {
        $.get("/api/company", getComp)
    };
    function getComp(data) {
        // console.log(data)
    };



    $("#loginButton").on("click", login)


    function login() {
        console.log("click")
        $.get("/api/user", getUser)
        function getUser(data) {
            // console.log(data.length)
            for (var i = 0; i < data.length; i++) {
                // console.log(data[i].userName)
                if ( (data[i].userName == $("#inputUser").val().trim()) && (data[i].password == $("#inputPassword").val().trim()) && (data[i].isAdmin === 'yes') ) {
                    window.location.href = "admin.html"
                    sessionStorage.setItem("username", data[i].userName)
                    sessionStorage.setItem("admin", data[i].isAdmin)
                    break;
                } else if ( (data[i].userName == $("#inputUser").val().trim()) && (data[i].password == $("#inputPassword").val().trim()) ) {
                    window.location.href = "workorder.html"
                    sessionStorage.setItem("username", data[i].userName)
                    sessionStorage.setItem("admin", data[i].isAdmin)
                    break;
                }
                
                
            }
            clicks.push(1)
            var message = $("<p></p>");
            message.attr("id", "loginError")
            message.append("Your username or password is incorrect");
            $("#messages").html(message)

            if(clicks.length >= 3) {
                var div = $("<div></div>")
                div .addClass("d-flex justify-content-center")
                var a = $("<a href='#'></a>")
                a.append("Forgot your password?")
                div.append(a)
                $("#messages").html(div)
            }



        };
    }




















})