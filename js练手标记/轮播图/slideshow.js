(function(){
    
    var button = $('.button>span');
    var timer=null;
    var buttonSub=0;
    
    //添加点击事件
    for (let index=0;index<button.length;index++){
        button.eq(index).on('click',function(event){
            $(event.currentTarget).addClass('red').siblings('.red').removeClass('red')
            buttonSub =  $(event.currentTarget).index()
            $('.photos').eq(0).css({transform:'translate('+( buttonSub*-200)+'px)'})
        })
    }
    
    //立即执行函数，自动轮播
    (function (){
        beginTimer()
        $('.viewport').eq(0).on('mouseenter',function(){
            window.clearInterval(timer)
            }).on('mouseleave',function(){
                beginTimer()
            })
    }())
    /* --------------------------------------------------------------------------------------------------*/
    //封装计时器
    function beginTimer(){
        let n=buttonSub
        timer = setInterval(()=>{
            let index = (n++)%button.length
            button.eq(index).trigger('click') 
        },1000)
    }
})()


