/**
 * Created by Lenovo on 2017/1/5.
 */


var bubble = function () {
    var bubble = $('.bubbles');
    // 定义基本值
    var min_bubble_count = 30;
    var max_bubble_count = 70;
    var min_bubble_size = 13;
    var max_bubble_size = 20;

    // 随机选出泡泡数
    var bubble_count = min_bubble_count + Math.floor(Math.random()*(max_bubble_count + 1));

    //创建泡泡
    for (var i = 0; i < bubble_count; i++) {
        bubble.append('<div class="bubble-container"><div class="bubble"></div></div>');
    }

    bubble.find('.bubble-container').each(function () {

        // 泡泡位置
        var pos_rand = Math.floor(Math.random()*101);

        // 泡泡大小
        var size_rand = min_bubble_size + Math.floor(Math.random()*(max_bubble_size + 1))

        // 泡泡升起时间
        var delay_rand = Math.floor(Math.random() * 16);

        // 速度3-8s
        var speed_rand = 3 + Math.floor(Math.random() * 9);

        // 2s
        var blur_rand = Math.floor(Math.random() * 3);

        // Cache the this selector
        var $this = $(this);

        $this.css({
            'left' : pos_rand + '%',
            // 设置完成时间
            '-webkit-animation-duration' : speed_rand + 's',
            '-moz-animation-duration' : speed_rand + 's',
            '-ms-animation-duration' : speed_rand + 's',
            'animation-duration' : speed_rand + 's',
            // 设置开始时间
            '-webkit-animation-delay' : delay_rand + 's',
            '-moz-animation-delay' : delay_rand + 's',
            '-ms-animation-delay' : delay_rand + 's',
            'animation-delay' : delay_rand + 's',
            //模糊泡泡
            '-webkit-filter' : 'blur(' + blur_rand  + 'px)',
            '-moz-filter' : 'blur(' + blur_rand  + 'px)',
            '-ms-filter' : 'blur(' + blur_rand  + 'px)',
            'filter' : 'blur(' + blur_rand  + 'px)',
        });

        $this.children('.bubble').css({
            'width' : size_rand + 'px',
            'height' : size_rand + 'px'
        });
    })
}

bubble();