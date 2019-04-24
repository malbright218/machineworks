$(document).ready(function () {

    renderMachines();
    renderNav();
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

    function renderMachines() {
        $.get("/api/machine", display)

        function display(data) {
            console.log(data)
            for (var i = 0; i < data.length; i++) {
                var option = $("<option>")
                option.attr("id", data[i].id)
                option.attr("name", data[i].name)
                option.append(data[i].name)
                $("#machineChoice").append(option)
            }
        }
    }

    $("#addOrder").on("click", getMachines)

    function getMachines() {
        $.get("/api/machine", machData)
        function machData(data) {
            console.log(data)
            var spec = $("#machineChoice option:selected").attr("name");
            var text = $("#noteArea")
            var userPost = sessionStorage.getItem("username")
            var hours = $("#inputHours")
            var id = $("#machineChoice option:selected").attr("id")
            var newOrder = {
                machineSpec: spec,
                textBody: text.val().trim(),
                postedBy: userPost,
                length: hours.val().trim(),
                MachineId: id
            }
            addOrder(newOrder)
        }
    }

    function addOrder(order) {
        $.post("/api/order", order)
    }


function adminNav() {
    var alink = $("<a>")
    alink.addClass("navbar navbar-brand nav-link")
    alink.append("ADMIN")

    var div = $("<div>")
    div.addClass("collapse navbar-collapse")
    div.attr("id", "navbarNav")

    var list = $("<ul>")
    list.addClass("navbar-nav")

    var li1 = $("<li>")
    li1.addClass("nav-item active")
    var a1 = $("<a>")
    a1.addClass("navbar nav-link")
    a1.attr("href", "signup.html")
    a1.append("Create Users")
    li1.append(a1)

    var li2 = $("<li>")
    li2.addClass("nav-item active")
    var a2 = $("<a>")
    a2.addClass("navbar nav-link")
    a2.attr("href", "viewusers.html")
    a2.append("View Users")
    li2.append(a2)

    var li3 = $("<li>")
    li3.addClass("nav-item active")
    var a3 = $("<a>")
    a3.addClass("navbar nav-link")
    a3.attr("href", "create.html")
    a3.append("Create Machines")
    li3.append(a3)

    var li4 = $("<li>")
    li4.addClass("nav-item active")
    var a4 = $("<a>")
    a4.addClass("navbar nav-link")
    a4.attr("href", "machines.html")
    a4.append("View Machines")
    li4.append(a4)

    var li5 = $("<li>")
    li5.addClass("nav-item active")
    var a5 = $("<a>")
    a5.addClass("navbar nav-link")
    a5.attr("href", "workorder.html")
    a5.append("Create Work Order")
    li5.append(a5)

    var li6 = $("<li>")
    li6.addClass("nav-item active")
    var a6 = $("<a>")
    a6.addClass("navbar nav-link")
    a6.attr("href", "index.html")
    a6.append("Sign Out")
    li6.append(a6)

    list.append(li1, li2, li3, li4, li5, li6)
    div.append(list)
    
    $("#targetNav").append(alink, div)
}

function userNav() {
    var alink = $("<a>")
    alink.addClass("navbar navbar-brand nav-link")
    alink.append("USER")

    var div = $("<div>")
    div.addClass("collapse navbar-collapse")
    div.attr("id", "navbarNav")

    var list = $("<ul>")
    list.addClass("navbar-nav")

    var li4 = $("<li>")
    li4.addClass("nav-item active")
    var a4 = $("<a>")
    a4.addClass("navbar nav-link")
    a4.attr("href", "machines.html")
    a4.append("View Machines")
    li4.append(a4)

    var li5 = $("<li>")
    li5.addClass("nav-item active")
    var a5 = $("<a>")
    a5.addClass("navbar nav-link")
    a5.attr("href", "workorder.html")
    a5.append("Create Work Order")
    li5.append(a5)

    var li6 = $("<li>")
    li6.addClass("nav-item active")
    var a6 = $("<a>")
    a6.addClass("navbar nav-link")
    a6.attr("href", "index.html")
    a6.append("Sign Out")
    li6.append(a6)

    

    list.append(li4, li5, li6)
    div.append(list)
    
    $("#targetNav").append(alink, div)
}


    function renderNav() {
        $.get("/api/user", getUser)
        function getUser(data) {
            console.log(data)
            for (var i = 0; i < data.length; i++) {
                var current = sessionStorage.getItem("admin")
                console.log(current)
                console.log(data[i].isAdmin)
                if (current === 'yes') {
                    console.log("isAdmin")
                    adminNav();
                    break;
                } else {
                    console.log("isUser")
                    userNav();
                    break;
                }
            }
        }
    }
})