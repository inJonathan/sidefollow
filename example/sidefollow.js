/*
 *   name: SideFollow
 * author: Jonathan
 *   date: 2016-12-15
 *   site: caozhuo.net
 *
 */

(function($) {
    $.fn.sideFollow = function(dtime) {

        var floating = $(this);
        var originalTop = parseInt($(this).css('top'));

        dtime ? dtime = dtime : dtime = 1000;

        goFollow(); // 页面加载后先执行一次

        // 滚动条监控
        $(window).scroll(function() {
            goFollow();
        });

        function goFollow() {
            var scrollTop = $(this).scrollTop();
            floating.animate({
                top: originalTop + scrollTop
            }, {
                duration: dtime,
                queue: false // 动画不进入动画队列
            });
        }

    }
})(jQuery);