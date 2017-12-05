document.addEventListener('DOMContentLoaded', function(){
        var header = document.getElementsByTagName('header')[0]
    var component = document.getElementsByClassName('component');
    for(var i = 1; i < component.length; i++){
    component[i].style.cssText = 'background-image: url(img/'+i+'.jpg)'
}
var menu = document.getElementsByTagName('header')[0]
function scrolling(sw){
    if(sw){
        menu.className = ''
    }else{
        menu.className = 'start'
    }
}
window.addEventListener('scroll', function(){
    if(document.body.scrollTop > 0){
        scrolling(true)
    }else{
        scrolling(false)
    }
})
})
function TOscroll(jh){
        var point = $(jh).offset().top
        var hhg = ($('body').height()/100)*2
        $('body').animate({
            scrollTop: point-hhg
        }, point)
        maskk(true)
    }
    function TOP(){
        var point = $('body').scrollTop()
        $('body').animate({
            scrollTop: 0
        }, point)
        maskk(true)
    }
function maskk(op){
    if(op){
        $('.mask').fadeOut()
    }else{
        $('.mask').fadeIn()
    }
}