// 1.gnb 마우스오버, 포커스 시 밑줄 > span.bar
$(function(){
    $('.gnb > li > a').on('mouseenter focus', function(){
        var bar = $(this).position().left;
        var widNum = $(this).width();
        $('span.bar').css({'left':bar + 'px', 'width':widNum + 'px', opacity:1});
    });
    $('.gnb li a').on('mouseleave', function(){
        $('span.bar').css({'left':0, 'width':0, 'opacity':0});
    });
});

// .circle_box .svg 애니메이션(길이 구하기)
// $(function(){
//     $('.svgAni').find('path').each(function(i, path){
//         var length = path.getTotalLength();
//         alert(length);  
//     });
// });

//스크롤애니메이션
$(function(){
    $('.animate').scrolla({
        mobile: true,  //모바일버전시 활성화
        once: false //스크롤시 딱 한번만 하고 싶을 땐 true
    });
 });

//4.배경색 변경
// $(window).on('scroll resize', function(){
//     var scrollTop = $(document).scrollTop();
//     bgColor();
//     function bgColor(){
//         if(scrollTop > 1400){
//             $('body').addClass('on');
//         }else {
//             $('body').removeClass('on');
//         }
//         if(scrollTop > 2700){
//             $('body').removeClass('on');
//         }
//     }
// });

// 햄버거 메뉴
$(function(){
    $('.menu_open button.open').on('click', function(){
        $('.menu_open .menu_wrap').addClass('on');
    });
    $('.menu_open .menu_wrap .close').on('click', function(){
        $('.menu_open .menu_wrap').removeClass('on');
    });
});