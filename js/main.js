$(function(){
    mainInit()
    $(document).on('click','a[href="#"]',function(e){
        e.preventDefault();
    })
})

function mainInit(){
    gnb()
    mainVisual()
    familySite()

}// end main

function gnb(){
    var $gnbli =$('#nav .gnb > li');
    var $lang = $('#header .util .lang li a:last');
    var $logo = $('#header h1 a img')
    var $menu = $('#header .util div a img')
    $gnbli.hover(function(){
        $('#header').css({backgroundColor:'#fff'})
        $('#header').stop().animate({height:220},300)
        $gnbli.find('ul').hide()
        $('#nav .gnb .menu > a').css({color:'#333'})
        $lang.css({color:'#333'})
        $(this).find('ul').show()
        $logo.attr('src','images/common/logo_2.png')
        $menu.attr('src','images/common/menu_icon1.png')
    })
    $('#header').on('mouseleave',function(){
        $('#header').stop().animate({height:110},300)
        $(this).animate({backgroundColor:'transparent'},100)
        $('#nav .gnb .menu > a').css({color:'#fff'})
        $lang.css({color:'#fff'})
        $logo.attr('src','images/common/logo_1.png')
        $menu.attr('src','images/common/menu_icon.png')

    })

} //end gnb
function mainVisual(){
    var $pagingli = $('#visual .paging li')
    var current = 0, old=0, len= $('#visual .main-banner li').length
    var timer = 0, interval = 6000;
    var isplay = true;

    timer = setInterval(make , interval)
    function make(){
        current++;
        if (current > len -1 ){
            current = 0
        }
        banner()
    }
    $pagingli.on('click',function(){
        current = $(this).index()
        if(current != old) {
            banner()
            $('#visual .paging li.on').css({opacity:0}).animate({opacity:1})
        
        }
        if(!isplay){
            clearInterval(timer);
        }
        
       
    })
    $('.play').on('click',function(){
        if(isplay){
            clearInterval(timer);
            $('.play i').removeClass();
            $('.play i').addClass('xi-play');

        }else {
            timer = setInterval(make , interval);
            $('.play i').removeClass();
            $('.play i').addClass('xi-pause');
        }
        isplay = !isplay
    })
    function banner() {
        $('#visual .main-banner li').eq(current).css({opacity:0}).animate({opacity:1},900)
        $('#visual .main-banner li').eq(old).css({opacity:1}).animate({opacity:0},900)
        $pagingli.removeClass('on')
        $pagingli.eq(current).addClass('on')
        clearInterval(timer);
        timer = setInterval(make , interval);
        old = current ;


    }
    
}// end mainVisual
function familySite(){
    var $familyul = $('#footer .familySite ul')
    var h = $familyul.height()

    $familyul.height(0)
    var isplay = false;
    $('#footer .familySite .title').on('click',function(){
        if(isplay){
            $familyul.animate({height:0},400)
            $('#footer .familySite').css({backgroundColor:''})

        }else {
            $familyul.animate({height:h},400)
            $('#footer .familySite').css({backgroundColor:'#000'})
        }
        isplay = !isplay
        
    })

}// end family site
