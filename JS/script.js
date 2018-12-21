$(document).ready(function() {
    $("#quiz form").submit(function(event) {
        var first= $("input#first").val();
        var second= $("input#second").val();
        $(".first").text(firstInput);
        $(".second").text(secondInput);

        $(".submit").show();
    })
})

