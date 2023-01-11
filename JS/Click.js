$(document).ready(function () {
    
    let information;
    let img;
    // try
    // {
    //     $('.bigwork_workboxlist').slick();
    // } catch (error)
    // {
        
    // }
    $(".W_workbox_Like").click(function () {
        $(this).toggleClass("W_workbox_Likefull");

    })
    $(".link").click(function () {

        information = $(this).parent().children("div").children("div").children("p").text();
        img = $(this).parent().children(".W_workbox_T").attr("class").split(/\s+/);
        let a = img[1] + " " + information;
        // alert(a);
        document.cookie = a;

    })



})