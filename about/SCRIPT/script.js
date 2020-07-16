var about_top = $('.about').offset().top;
var main_top = $('.main').offset().top;
var my_info_top = $('.my-info').offset().top;
var me_top = $('.me').offset().top;
var skills_top = $('.skills').offset().top;



$(document).ready(function(){
    page=0;
    $('.open').delay(4000).fadeOut();

})



var X =0;
$('.ham-btn').click(function(){
    X++;
    X=X%2;

    console.log(X);
    if(X == 1){
        $('.ham-nav').stop().animate({left:'120'+'px'},1000);
        $('.nav-line').css({background:'black'});
        $('.ham-line').css({background:'black'});
        $('.indi').css({color:'black'});
        $('.nav-bg-slide').animate({top:'0'})
    }else if(X == 0){
        $('.ham-nav').stop().animate({left:'-120'+'%'},1000);
        $('.nav-line').css({background:'white'});
        $('.ham-line').css({background:'white'});
        $('.indi').css({color:'white'});
        $('.nav-bg-slide').animate({top:'-100'+'%'})
    }
})
    $(window).on('scroll', function(){
    var percent = ($(window).scrollTop() / ($(document).outerHeight() - $(window).height())) * 100;
    console.log(percent);
    $('.right-pro-down').css({height:percent+'%'});   
         if(percent == 100){
             $('.to-bottom').removeClass('on');
             $('.to-bottom span').eq(0).addClass('off1');
             $('.to-bottom span').eq(1).addClass('off2');
             $('.sub-bottom').find('.head-bottom').stop().animate({top:'0'}); 
             $('.start-text p').stop().animate({top:'0'})
             
             
         }
          if(percent != 100){
             $('.to-bottom').addClass('on');
             $('.to-bottom span').eq(0).removeClass('off1');
             $('.to-bottom span').eq(1).removeClass('off2');
              
        
              
           }
})



    $('html').on('mousewheel',function(event){
        delta=event.originalEvent.wheelDelta
        has_animate=$('html').is(':animated');
        var win_top = $(document).scrollTop();
        var percent = ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100;

//         $('.right-pro-down').stop().animate({height:percent+'%'})
//          console.log(percent+'per');
//        console.log(about_top);
//        console.log(main_top);
//        console.log(my_info_top);
//        console.log(me_top);
//        console.log(skills_top);
//        console.log(win_top);
        
   


  
//      if(!has_animate && delta<0 && page<4){
//          page++;
//        
//      }else if(!has_animate && delta>0 && page>0){
//          page--
//       
//      }
        if(win_top > skills_top){
          $('.skills').find('span').eq(0).stop().animate({width:'60'+'%'})
           $('.skills').find('span').eq(1).stop().animate({width:'50'+'%'})
           $('.skills').find('span').eq(2).stop().animate({width:'40'+'%'})
           $('.skills').find('span').eq(3).stop().animate({width:'20'+'%'})
           $('.skills').find('span').eq(4).stop().animate({width:'20'+'%'})
      }
        
        
        
      }
    )





















