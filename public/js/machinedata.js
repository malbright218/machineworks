$(document).ready(function () {
    sessionStorage.setItem("machine", "")
    getMachineData();

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

    function getMachineData() {
        $.get("/api/machine", data)

        function data(info) {
            console.log(info)
            for (var i = 0; i < info.length; i++) {
                var emptyHours = [];
                var totalHours = 0;
                var blankrow = $("<tr>")
                var blankdataName = $("<td>")
                blankdataName.append(info[i].name)

                var blankdataSerial = $("<td>")
                var blankdataCount = $("<td>")
                var blankdataHours = $("<td>")
                
                blankdataSerial.append(info[i].serial)
                blankdataCount.append(info[i].WorkOrders.length)
                for (var j = 0; j < info[i].WorkOrders.length; j++) {
                    emptyHours.push(Number(info[i].WorkOrders[j].length))
                }
                for (var k = 0; k < emptyHours.length; k++) {
                    totalHours += emptyHours[k]
                }
                blankdataHours.append(totalHours.toFixed(2))
                blankrow.append(blankdataName, blankdataSerial, blankdataCount, blankdataHours)

                $("#machineData").append(blankrow)
            }
        }
    }
})










