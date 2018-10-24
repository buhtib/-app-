var meituan = (function () {
    return {
        init() {
            this.response();
            this.event();

        },
        event() {
            var _this = this;
        },

        response() {
            var _this = this;
            var devicewidth = $('html').width();
            
            if (devicewidth >= 375) {
                $('html').css('font-size' , 100 + 'px')
            }else {
                $('html').css('font-size' , devicewidth / 3.75 + 'px');
            }
            console.log($('html').css('font-size'));
            window.addEventListener('load', _this.response);
            window.addEventListener('resize',_this.response);

        }
    }
}())