$(document).ready(function () {
    var session = sessionStorage.getItem("username")
    console.log(session)
    var deptNo = [];
    var d = [];
    var m = [];
    console.log(deptNo)
    getUserInfo();

    function getUserInfo() {
        $.get("/api/users", getInfo)
    }

    function getInfo(data) {
        // console.log(session)
        // console.log(data)
        var found = false;
        var departmentNo;
        for (var i = 0; i < data.length; i++) {
            if (data[i].userName == session) {
                var departmentNo = data[i].Companies[0].depts;
                // console.log(departmentNo)
                found = true;
                break;
            }
        }
        deptNo.push(departmentNo);
        var number = deptNo[0];
        console.log(number)

        for (var i = 0; i < number; i++) {
            //  Generating the department card shell
            var blankcard = $("<div></div>");
            blankcard.addClass("card");
            //  Generating the card title and appending to the shell
            var blankhead = $("<div></div>");
            blankhead.addClass("card-header");
            var headinfo = $("<h3>Department Info</h3>");
            blankhead.append(headinfo);
            //  Generating the card body and appending to the shell
            var blankbody = $("<div></div>");
            blankbody.addClass("card-body");
            //  Generating a form and appending it to the blank body
            var formblank = $("<form></form>")
            blankbody.append(formblank)
            //  Generating the form fields and appending them to the form
            var inputdiv1 = $("<div></div>");
            var inputdiv2 = $("<div></div>");
            var inputspan1 = $("<span></span>");
            inputdiv1.addClass("input-group form-group")
            inputdiv2.addClass("input-group-prepend")
            inputspan1.addClass("input-group-text")
            var icon1 = $("<i class='fas fa-signature'></i>");
            var textInput = $("<input type='text' placeholder='Name'></input>")
            textInput.addClass("form-control")
            textInput.attr('id', 'dept' + i)
            inputspan1.append(icon1);
            inputdiv2.append(inputspan1);
            inputdiv1.append(inputdiv2, textInput);
            formblank.append(inputdiv1);
            // Repeating for the second form field
            var inputdiv3 = $("<div></div>");
            var inputdiv4 = $("<div></div>");
            var inputspan2 = $("<span></span>");
            inputdiv3.addClass("input-group form-group")
            inputdiv4.addClass("input-group-prepend")
            inputspan2.addClass("input-group-text")
            var icon2 = $("<i class='fas fa-cogs'></i>");
            var textInput = $("<input type='text' placeholder='No. of Machines'></input>")
            textInput.addClass("form-control")
            textInput.attr('id', 'mach' + i)
            inputspan2.append(icon2);
            inputdiv4.append(inputspan2);
            inputdiv3.append(inputdiv4, textInput);
            formblank.append(inputdiv3);
            blankcard.append(blankhead, blankbody)

            $("#deptRender").append(blankcard)
        }
    }

    $("#companyNext").on("click", function () {
        $.get("/api/users", logUsers)

        function submitCompany(comp) {
            $.post("/api/department", comp)
          }

        function logUsers(data) {
            console.log(data)
            for (var i = 0; i < data.length; i++) {
                if (data[i].userName == session) {
                    var userID = data[i].Companies[0].id;
                    console.log(userID)
                    found = true;
                    break;
                }
            }
            console.log(userID)
            for (var i = 0; i < deptNo[0]; i++) {
                console.log(deptNo[0].length)

                d.push("#dept" + i)
                m.push("#mach" + i)
                console.log("Company ID " + userID)
                console.log($(d[i].val().trim()))
                console.log(m)

                

                // var newDepartment = {
                //     name: d[i].val().trim
                // }



            }
        }













    })














})