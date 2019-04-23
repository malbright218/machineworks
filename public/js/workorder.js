$(document).ready(function () {

    renderMachines();
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

            console.log(newOrder)
            addOrder(newOrder)
        }
    }

    function addOrder(order) {
        $.post("/api/order", order)
        
    }



})