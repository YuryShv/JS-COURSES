display = function (data) {
    $("#data").append("<tr><td>" + data.Id + "</td><td>" + data.Name + "</td></tr>");
}

$("#count").click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(1pdpon0x4s4l4fndqdzmqgde))/TripPinServiceRW/Photos/$count",
        success: function (data) {
            alert("There are " + data + " photos!");
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
})
$("#expand").click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(1pdpon0x4s4l4fndqdzmqgde))/TripPinServiceRW/Photos?$expand=People",
        success: function (data) {
            alert(data);
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage + "\nError");
        }
    });
})

$("#orderby").click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(1pdpon0x4s4l4fndqdzmqgde))/TripPinServiceRW/Photos?$orderby=Id",
        success: function (data) {
            $("#data").empty();
            for (var i = 0; i < data.value.length; i++) {
                display(data.value[i]);
            }
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
})

$("#search").click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(1pdpon0x4s4l4fndqdzmqgde))/TripPinServiceRW/Photos?$search=Trip",
        success: function (data) {
            alert("Search")
            $("#data").empty();
            for (var i = 0; i < data.value.length; i++) {
                display(data.value[i]);
            }
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
})

$("#select").click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(1pdpon0x4s4l4fndqdzmqgde))/TripPinServiceRW/Photos?$select=Name",
        success: function (data) {
            $("#data").empty();
            for (var i = 0; i < data.value.length; i++) {
                display(data.value[i]);
            }
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
})

$("#skip").click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(1pdpon0x4s4l4fndqdzmqgde))/TripPinServiceRW/Photos?$skip=9",
        success: function (data) {
            $("#data").empty();
            for (var i = 0; i < data.value.length; i++) {
                display(data.value[i]);
            }
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
})


$("#top").click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(1pdpon0x4s4l4fndqdzmqgde))/TripPinServiceRW/Photos?$top=5",
        success: function (data) {
            $("#data").empty();
            for (var i = 0; i < data.value.length; i++) {
                display(data.value[i]);
            }
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
})

$("#filter").click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(1pdpon0x4s4l4fndqdzmqgde))/TripPinServiceRW/Photos?$filter=Name eq 'Trip Photo 11'",
        success: function (data) {
            $("#data").empty();
            for (var i = 0; i < data.value.length; i++) {
                display(data.value[i]);
            }
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
})
$("#triple-filter").click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(1pdpon0x4s4l4fndqdzmqgde))/TripPinServiceRW/Photos?$filter=Name eq 'Trip Photo 12' or Name eq 'Trip Photo 11' or Name eq 'Trip Photo 14'",
        success: function (data) {
            $("#data").empty();
            for (var i = 0; i < data.value.length; i++) {
                display(data.value[i]);
            }
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
})

$("#triple-parameter").click(function () {
    $.ajax({
        type: "get",
        async: true,
        url: "https://services.odata.org/V4/(S(1pdpon0x4s4l4fndqdzmqgde))/TripPinServiceRW/Photos?$select=Name, Id&&$top=4&&$filter=startswith(Name,'Trip')&&$skip=5",
        success: function (data) {
            $("#data").empty();
            for (var i = 0; i < data.value.length; i++) {
                display(data.value[i]);
            }
        },
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
})
