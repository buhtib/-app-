var meituan = (function () {
    return {
        init() {
            this.response();
            this.event();

        },
        event() {
            var _this = this;
        },

        // 实现html的font-size动态更新
        response() {
            var _this = this;
            var devicewidth = $('html').width();
            $('html').css('font-size' , devicewidth / 3.75 + 'px');
            window.addEventListener('load', _this.response);
            window.addEventListener('resize',_this.response);

        }
    }
}())