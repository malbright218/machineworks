$(document).ready(function () {

    getMachineData();
    getOrderData();

    function data(info) {
        console.log(info)
    }

    function getMachineData() {
        $.get("/api/machine", data)  
        function data(info) {
            console.log(info)
            for (var i = 0; i < info.length; i++) {
                var blankrow = $("<tr>")
                var blankdataName = $("<td>")
                var blankdataSerial = $("<td>")
                var blankdataCount = $("<td>")
                var blankdataHours = $("<td>")

                blankdataName.append(info[i].name)
                blankdataSerial.append(info[i].serial)
                blankdataCount.append("4")
                blankdataHours.append("10.25")
                blankrow.append(blankdataName, blankdataSerial, blankdataCount, blankdataHours)

                $("#machineData").append(blankrow)
            }
        }
        
    }

    function getOrderData() {
        $.get("/api/order", data)
    }
})