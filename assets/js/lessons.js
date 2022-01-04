// modal function
$("#modal-popup-btn").on("click", function() {
    $("#covid-modal").fadeIn();
});

$(".modal-footer").on("click", "button", function() {
    $("#covid-modal").css("display", "none");
});

$(".modal-header").on("click", "button", function() {
    $("#covid-modal").css("display", "none");
});
