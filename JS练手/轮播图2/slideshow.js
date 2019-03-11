
/*思路：1.写HTML文档时让首尾图片一致 2.轮播到尾图，待尾图过度效过全部执行完，让图集瞬间回到初始原点，因首尾图片一致，所以完美衔接 */
(function(){

    //初始化变量
    var buttons = $('.button>span')
    var timer=null
    var buttonsSub=0
    
    //遍历按钮，添加点击事件
    for (var index=0;index<buttons.length;index++){
        setClickEvent()
    }

    //计时器，开始轮播
    beginTimer()

   //添加鼠标事件，鼠标移入移除控制轮播
    setMouseEvent()





    
    /* --------------------------------------------------------------------------------------------------*/





    //单击事件
    function setClickEvent(){

        buttons.eq(index).on('click',function(event){
            activeClass($(event.currentTarget),'red')
            //记住当前绑定监听事件的节点下标，因为轮播位置是基于这个下标的
            buttonsSub =  $(event.currentTarget).index()

            $('.photos').eq(0).css({transform:'translate('+( buttonsSub*-200)+'px)',transition:'1s'})

        })
    }

    //鼠标事件
    function setMouseEvent(){

        $('.viewport').eq(0).on('mouseenter',function(){

            window.clearInterval(timer)

            }).on('mouseleave',function(){

                beginTimer()
            })
    }

    //切换按钮class类
    function activeClass(node,className){

        node.addClass(className).siblings('.'+className).removeClass(className)

    }

    //封装计时器，核心
    function beginTimer(){

        //轮播位置
        let n=buttonsSub

        timer = setInterval(()=>{
            let index = n++
            buttons.eq(index).trigger('click')

            //为了欺骗人眼，因首尾图一样，当轮播到尾图时，首图对应的按钮变红
            if (index === buttons.length-1){
                activeClass(buttons.eq(0),'red')
            }

            /*因为过度时间是一秒，所以要等一秒后过度完最后一张图片再把图集瞬间回到初始位置，
            然后n=1（在1.5秒后再执行计时器的时候直接过渡到第二张图片实现无缝轮播）。*/
            if (n === buttons.length){
                n=1
                setTimeout(() => {
                    $('.photos').eq(0).css({transform:'translate(0px)',transition:'none'})
                },1000)
            }

        },1500)
    }

})()


