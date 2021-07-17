$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.Top').addClass("sticky");
        }else{
            $('.Top').removeClass("sticky");
        }
    })
});