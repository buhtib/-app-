var meituan = (function() {
    return {
        init() {
            this.response();
            this.event();

        },
        event() {
            var _this = this;
        },
        response() {
            var  changefont = function() {
                let devicewidth = document.documentElement.clientWidth;
                document.documentElement.style.fontSize = devicewidth / 3.5 + 'px';
                console.log(devicewidth, document.documentElement.style.fontSize);
            }
            window.addEventListener('load', changefont);
            window.addEventListener('resize', changefont);
            
        }
    }
}())