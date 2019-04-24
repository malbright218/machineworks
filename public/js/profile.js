$(document).ready(function () {

    renderMachinesToList();
    $("#addOrder").on("click", generateWorkOrder)

    function renderMachinesToList() {
        $.get("api/machine", machData)

        function machData(data) {
            for (var i =0; i < data.length; i++) {
                var blankoption = $("<option></option>")
                blankoption.attr("value", data[i].id)
                blankoption.append(data[i].name)
                $("#machineChoices").append(blankoption)
            }
        }
    }

    function generateWorkOrder() {
        console.log("clicked")
        $.get("api/machine", orderData)

        function orderData(data) {
            console.log(data)
            var rowsToAdd = [];
            for (var i = 0; i < data.length; i++) {
                rowsToAdd.push(createMachineRow(data[i]))
            }
            console.log(rowsToAdd)
            
        }
    }

    function createMachineRow(data) {
        var option = $("<option>");
        option.attr("value", data.id)
        option.text(data.name)
        return option;
    }
  
})