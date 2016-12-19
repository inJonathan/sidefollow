/*
 *   name: SideFollow
 * author: Jonathan
 *   date: 2016-12-15
 *   site: caozhuo.net
 *
 */

(function($) {
    $.fn.sideFollow = function(options) {

        var floating = $(this);
        var originalTop = parseInt($(this).css('top'));

        var dft = { //以下为该插件的属性及其默认值
            time: 1000
        };

        var ops = $.extend(dft, options);  // 可使用 options 替换默认参数

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
                duration: ops.time,
                queue: false // 动画不进入动画队列
            });
        }

    };
})(jQuery);