$(document).ready(function() {

    console.log("jQuery is ready!");

    $(".info").css("font-style", "italic");

    $("#changeText").click(function() {
        $("#greeting").text("Hello, welcome!");
    });

    $("#light").click(function() {
        $("body").css("background", "white");
        $("body").css("color", "black");
    });

    $("#dark").click(function() {
        $("body").css("background", "black");
        $("body").css("color", "white");
    });

    $("#hide").click(function() {
        $("#about").hide();
    });

    $("#show").click(function() {
        $("#about").show();
    });

    $("#toggle").click(function() {
        $("#about").toggle();
    });

    $("#fadeIn").click(function() {
        $("#photo1").fadeIn();
        $("#photo2").fadeIn();
    });

    $("#fadeOut").click(function() {
        $("#photo1").fadeOut();
        $("#photo2").fadeOut();
    });

    $("#fadeToggle").click(function() {
        $("#photo1").fadeToggle();
        $("#photo2").fadeToggle();
    });

    $(".slide1").click(function() {
        $(this).next(".panel").slideToggle();
    });

    $("#addSkill").click(function() {
        var skill = $("#skillInput").val();

        if (skill != "") {
            $("#skills").append("<li>" + skill + "</li>");
        }
    });

    $("#prependSkill").click(function() {
        var skill = $("#skillInput").val();

        if (skill != "") {
            $("#skills").prepend("<li>" + skill + "</li>");
        }
    });

    $("#removeSkill").click(function() {
        $("#skills li:last").remove();
    });

    $("#changeLink").click(function() {
        $("#myLink").attr("href", "https://www.youtube.com");
        $("#myLink").text("Open YouTube");
    });

    $("#send").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();

        if (name != "" && email != "") {
            $("#result").text("Thank you, " + name + "!");
        } else {
            $("#result").text("Please fill in all fields.");
        }
    });

    $("#animateBars").click(function() {
        $("#htmlBar").animate({width: "80%"}, 1000);
        $("#cssBar").animate({width: "70%"}, 1000);
        $("#jsBar").animate({width: "60%"}, 1000);
    });

});