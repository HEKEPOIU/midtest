$(document).ready(function () {
    
    let information;
    let img;
    let nowpic = 0;
    // alert(piclist[0] .html);

    $("#next").click(function () {
        nowpic++;
        if (nowpic == 1)
        {
            $(".W_workbox_other").addClass("offset");
        }
        if (nowpic == 2)
        {
            $(".W_workbox_other").addClass("offset1");
        }
        if (nowpic == 3)
        {
            $(".W_workbox_other").addClass("offset2");
        }
        if (nowpic == 4)
        {
            nowpic = 0
            $(".W_workbox_other").removeClass("offset").removeClass("offset1").removeClass("offset2").addClass("offset0");
        }
    })
    $("#pre").click(function () {
        nowpic--;
        if (nowpic == 2)
        {
            $(".W_workbox_other").removeClass("offset2");
        }
        if (nowpic == 1)
        {
            $(".W_workbox_other").removeClass("offset1");
        }
        if (nowpic == 0)
        {
            $(".W_workbox_other").removeClass("offset");
        }
        if (nowpic == -1)
        {
            nowpic = 3
            $(".W_workbox_other").addClass("offset").addClass("offset1").addClass("offset2");
        }
    })
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