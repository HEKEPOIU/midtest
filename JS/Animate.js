$(document).ready(function () {
  try{
    lottie.loadAnimation({
        wrapper: animate,
        animType: 'svg',
        autoplay: true,
        loop: true,
        path: '../json/3d.json'
    });
  }
  catch{}
  try{
    lottie.loadAnimation({
        wrapper: animate1,
        animType: 'svg',
        autoplay: true,
        loop: true,
        path: '../json/2d.json'
    });
  }
  catch{}
  try
  {
    lottie.loadAnimation({
      wrapper: main_vision_eyes_blurstar,
      animType: 'svg',
      autoplay: true,
      loop: true,
      path: './json/base.json'
  });
  }
  catch{}
})