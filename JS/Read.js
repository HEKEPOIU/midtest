$(document).ready(function () {
    
    let infor = document.cookie.split(/\s+/);
    $(".bigwork_img").addClass(infor[0]);
    $(".bigwork_title").text(infor[1]);
    $(".bigwork_des").text(infor[2]) ;

})