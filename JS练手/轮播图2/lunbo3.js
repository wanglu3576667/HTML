(function (){

    //获取轮播图片Dom节点
    var image = $('.window>.photos>img')

    //初始化class属性
    state()

    //开始轮播
    starTimer()
/*----------------------------------------------------------------------------------------------------*/







    function starTimer(){

        var n = 0;

        setInterval(()=>{
            
            image.eq(n).removeClass().addClass('active1').one('transitionend',(event)=>{
                $(event.currentTarget).removeClass().addClass('active-1')     
            })
           //完美
            if (n === image.length-1){n=0}else{n++}
           
            image.eq(n).removeClass().addClass('active0')

        },1500)  
    }

   



   function state(){

    image.eq(0).addClass('active0')

    for(let index=1;index<image.length;index++){
        image.eq(index).addClass('active-1')
    }

   }
})()