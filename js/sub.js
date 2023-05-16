$(function(){
    subInit()
    $(document).on('click','a[href="#"]',function(e){
        e.preventDefault();
    })
})

function subInit(){
    gnb()
    familySite()

}// end main

function gnb(){
    var $gnbli =$('#nav .gnb > li');
    var $lang = $('#header .util .lang li a:last');
    var $logo = $('#header h1 a img')
    var $menu = $('#header .util div a img')
    var $subMenu = $('.sub-header #nav .gnb .menu a')
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

    })

} //end gnb
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
