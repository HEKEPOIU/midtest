$(document).ready(function () {
    
    let information;
    let img;
    $(".W_workbox_Like").click(function () {
        $(this).toggleClass("W_workbox_Likefull");

    })
    $(".link").click(function () {

        information = $(this).children("div").children("p").text();
        img = $(this).parent().children(".W_workbox_T").attr("class").split(/\s+/);
        let a = img[1] + " " + information;
        document.cookie = a;

    })



})