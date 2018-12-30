;
(function ($) {
    $(function () {

        // Begin input common focus and blur for value.
        $('input:text, input:password, input[type="email"], input[type="number"], textarea').focus(function () {
            if (this.value == this.defaultValue) {
                this.value = ''
            }
        })
        $('input:text, input:password, input[type="email"], input[type="number"], textarea').blur(function () {
            if (!this.value) {
                this.value = this.defaultValue;
            }
        })
        // Ends input common focus and blur for value.

        //this is for dropdown-menu-arrow
        $('.main-nav > ul > li').find('ul').parent().addClass("Submenu");
        if ($(window).width() < 768) {
            $(".main-nav > ul > li.Submenu > a").bind('click', 'touchend', function (e) {
                e.preventDefault();
                $(".main-nav > ul > li").find("> ul:visible").slideUp();
                if ($(this).parent().find("> ul:visible").length) {
                    $(this).removeClass("active");
                    $(this).parent().find("> ul").slideUp()
                } else {
                    $(this).addClass("active")
                    $(this).parent().find("> ul").slideDown();
                }
            });

        }
        //this is for brand-carousel
        if ($(window).width() > 767) {
            $('#brand-carousel').slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }

        $('#testimonial-slider').slick({
            dots: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]

        });


        //this client-carousel
        if ($(window).width() < 767) {
            $('#client-carousel').slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay: true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false
                        }
                    }
                ]
            });
        }




        //this is feature-carousel
        if ($(window).width() < 767) {
            $('#features-carousel').slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay: true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false,
                        }
                    }
                ]
            });
        }



        //this is mobile mene
        $('.phone-icon').bind('click', 'touchend', function () {
            $('.header-area').addClass('open');
            $('body').css({
                overflow: 'hidden'
            })
        });
        $('.menu-close').bind('click', 'touchend', function () {
            $('.header-area').removeClass('open');
            $('body').css({
                overflow: 'inherit'
            })
        });


        //this is assistence
        $('.assistant-trigger').bind('click', 'touchend', function () {
            $('.assistant-content-wrap').fadeIn();
        });
        $('.assistant-close').bind('click', 'touchend', function (e) {
            e.stopPropagation();
            $('.assistant-content-wrap').fadeOut();
        });


        $(".testimonial-slider-item blockquote").html(function () {
            var text = $(this).text().trim().split(" ");
            var last = text.pop();
            var first = text.shift();
            var firstW = first.innerHTML = '<span class="firstWord">' + first + '</span>';
            var lastW = last.innerHTML = '<span class="lastWord">' + last + '</span>';
            var fistContent = firstW + " " + text.join(" ");
            return firstW + " " + text.join(" ").concat(" " + lastW);
        })

        $(".graphics-title").html(function () {
            var text = $(this).text().trim().split(" ");
            var first = text.shift();
            var firstW = first.innerHTML = '<span class="firstWord">' + first + '</span>';
            var fistContent = firstW + " " + text.join(" ");
            return fistContent;
        })


        //this is header animation
        $(window).scroll(function () {
            var srcTop = $(window).scrollTop();
            if (srcTop >= 200) {
                $('.header-area').addClass('downScl');
            } else {
                $('.header-area').removeClass('downScl');
            }
        });


        var headerHeight = $(".header-area").outerHeight();
        $("#scroll-down a").click(function (e) {
            e.preventDefault();
            $("html, body").animate({
                scrollTop: $("#after-hero-section").offset().top - headerHeight
            }, 1000);

        })

        $("#go-to-next").click(function (e) {
            e.preventDefault();
            $("html, body").animate({
                scrollTop: $("#third-section").offset().top - headerHeight
            }, 1000);

        })

        $(".service-tab-nav-item").click(function(){
            var itemDescription = $(this).find(".service-content-item").html();
            $(".service-tab-nav-item").removeClass("active");
            $(this).addClass("active");
            $("#service-content-wrap .service-content-item").html(itemDescription);

        })

        if($(window).width() < 768 ){

            $(".service-nav-title").click(function(){
                var $_this = $(this);

                $(".service-content-item:visible").slideUp();
                if($_this.parent().find(".service-content-item:visible").length){
                    $_this.parent().find(".service-content-item").slideUp();
                }else{
                    $_this.parent().find(".service-content-item").slideDown(function(){
                        $("html, body").animate({
                            scrollTop: $_this.parent().offset().top - headerHeight
                        }, 1000, function(){
                            $_this.fadeOut(2);
                        });
                    });
                    $(".service-nav-title").fadeIn();
                }
            });
        }


        //this is client
        if($('.cloud-carousel').length){
            $('.cloud-carousel').slick({
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false
            });

        };

        //this is for addClass to body
        if($('.cloud-direct-content, .contact-content, .careers-content, .about-content, .faqs').length){
            $('body').addClass('new-style')
        }

        //this is for search
        $('.search-triger').on('click touch', function(){
            $(this).parents('.search-wrap').toggleClass('open')
        })
        $('.search-wrap input[type="text"]').keyup(function(){

            $(this).parents('.search-wrap').addClass('value-added')
            if (!this.value) {
                this.value = this.defaultValue;
                $(this).parents('.search-wrap').removeClass('value-added')
            }
        })

        //FAQs Accordion Function
        $(".accordium-item").each(function(){
            var $this = $(this);
            $this.find(" > h6").on("click touch", function(){
                $(".accordium-item").removeClass("active")
                $(".accordium-item p").slideUp();
                if($this.find("p:visible").length){
                    $(".accordium-item").removeClass("active")
                    $(".accordium-item p").slideUp();
                }
                else{
                    $this.addClass("active")
                    $(".accordium-item p").slideUp();
                    $this.find(" > p").slideDown();
                }
            })
        })

        //principle-carosule
        $('#principle-carosule-wrap').slick({
            dots: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]

        });

        //this is for about accrodion
        $('.about-acordian-item > h5').click(function () {
            if ($(this).parent().hasClass('open')){
                $(this).parent().toggleClass('open').find('.about-acordian-text').slideToggle(500)
            }
            else {
                $(this).parent().siblings().removeClass('open').find('.about-acordian-text').slideUp(500);
                $(this).parent().toggleClass('open').find('.about-acordian-text').slideToggle(500)
                return false;
            }
        });

        //this is for addClass to body
        if($('.careers-content').length){
            $('body').addClass('without-form')
        }

        //this is for read more read less
        $('.leaders-item').each(function () {
            var $this = $(this);
            itemLength = $(this).find('p').length;
            if (itemLength > 2) {
                $this.find('.leaders-item-right p:nth-child(2)').append(' <span class="readMore">More+</span>');
                $this.find('.leaders-item-right p:last-child').append(' <span class="readLess">Less-</span>');

            };

            //Btn = $(this).find('span');
            $this.find('span.readMore').click(function(){

                $(this).hide();
                $(this).parents(".leaders-item-right").addClass('open');
                $(this).parents(".leaders-item-right").find('span.readLess').show();

            });

            $this.find('span.readLess').click(function(){
                console.log("I am clicked");

                $(this).hide();
                $(this).parents(".leaders-item-right").removeClass('open');
                $(this).parents(".leaders-item-right").find('span.readMore').show();

            })
        })

        $(".tootip-wrap > a").click(function(e){
            e.preventDefault();
            $(this).parent().find(".tool-tip").slideToggle();
        })



    }) // End ready function.

    $(window).load(function(){
        $("body").addClass("loaded");
    })


})(jQuery);

//Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Elastic, Back, Bounce
/*jQuery.easing["jswing"] = jQuery.easing["swing"]; jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function (a, b, c, d, e) { return jQuery.easing[jQuery.easing.def](a, b, c, d, e) }, easeInQuad: function (a, b, c, d, e) { return d * (b /= e) * b + c }, easeOutQuad: function (a, b, c, d, e) { return -d * (b /= e) * (b - 2) + c }, easeInOutQuad: function (a, b, c, d, e) { if ((b /= e / 2) < 1) return d / 2 * b * b + c; return -d / 2 * (--b * (b - 2) - 1) + c }, easeInCubic: function (a, b, c, d, e) { return d * (b /= e) * b * b + c }, easeOutCubic: function (a, b, c, d, e) { return d * ((b = b / e - 1) * b * b + 1) + c }, easeInOutCubic: function (a, b, c, d, e) { if ((b /= e / 2) < 1) return d / 2 * b * b * b + c; return d / 2 * ((b -= 2) * b * b + 2) + c }, easeInQuart: function (a, b, c, d, e) { return d * (b /= e) * b * b * b + c }, easeOutQuart: function (a, b, c, d, e) { return -d * ((b = b / e - 1) * b * b * b - 1) + c }, easeInOutQuart: function (a, b, c, d, e) { if ((b /= e / 2) < 1) return d / 2 * b * b * b * b + c; return -d / 2 * ((b -= 2) * b * b * b - 2) + c }, easeInQuint: function (a, b, c, d, e) { return d * (b /= e) * b * b * b * b + c }, easeOutQuint: function (a, b, c, d, e) { return d * ((b = b / e - 1) * b * b * b * b + 1) + c }, easeInOutQuint: function (a, b, c, d, e) { if ((b /= e / 2) < 1) return d / 2 * b * b * b * b * b + c; return d / 2 * ((b -= 2) * b * b * b * b + 2) + c }, easeInSine: function (a, b, c, d, e) { return -d * Math.cos(b / e * (Math.PI / 2)) + d + c }, easeOutSine: function (a, b, c, d, e) { return d * Math.sin(b / e * (Math.PI / 2)) + c }, easeInOutSine: function (a, b, c, d, e) { return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c }, easeInExpo: function (a, b, c, d, e) { return b == 0 ? c : d * Math.pow(2, 10 * (b / e - 1)) + c }, easeOutExpo: function (a, b, c, d, e) { return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c }, easeInOutExpo: function (a, b, c, d, e) { if (b == 0) return c; if (b == e) return c + d; if ((b /= e / 2) < 1) return d / 2 * Math.pow(2, 10 * (b - 1)) + c; return d / 2 * (-Math.pow(2, -10 * --b) + 2) + c }, easeInCirc: function (a, b, c, d, e) { return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c }, easeOutCirc: function (a, b, c, d, e) { return d * Math.sqrt(1 - (b = b / e - 1) * b) + c }, easeInOutCirc: function (a, b, c, d, e) { if ((b /= e / 2) < 1) return -d / 2 * (Math.sqrt(1 - b * b) - 1) + c; return d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c }, easeInElastic: function (a, b, c, d, e) { var f = 1.70158; var g = 0; var h = d; if (b == 0) return c; if ((b /= e) == 1) return c + d; if (!g) g = e * .3; if (h < Math.abs(d)) { h = d; var f = g / 4 } else var f = g / (2 * Math.PI) * Math.asin(d / h); return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g)) + c }, easeOutElastic: function (a, b, c, d, e) { var f = 1.70158; var g = 0; var h = d; if (b == 0) return c; if ((b /= e) == 1) return c + d; if (!g) g = e * .3; if (h < Math.abs(d)) { h = d; var f = g / 4 } else var f = g / (2 * Math.PI) * Math.asin(d / h); return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * 2 * Math.PI / g) + d + c }, easeInOutElastic: function (a, b, c, d, e) { var f = 1.70158; var g = 0; var h = d; if (b == 0) return c; if ((b /= e / 2) == 2) return c + d; if (!g) g = e * .3 * 1.5; if (h < Math.abs(d)) { h = d; var f = g / 4 } else var f = g / (2 * Math.PI) * Math.asin(d / h); if (b < 1) return -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) + c; return h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * 2 * Math.PI / g) * .5 + d + c }, easeInBack: function (a, b, c, d, e, f) { if (f == undefined) f = 1.70158; return d * (b /= e) * b * ((f + 1) * b - f) + c }, easeOutBack: function (a, b, c, d, e, f) { if (f == undefined) f = 1.70158; return d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c }, easeInOutBack: function (a, b, c, d, e, f) { if (f == undefined) f = 1.70158; if ((b /= e / 2) < 1) return d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c; return d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c }, easeInBounce: function (a, b, c, d, e) { return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c }, easeOutBounce: function (a, b, c, d, e) { if ((b /= e) < 1 / 2.75) { return d * 7.5625 * b * b + c } else if (b < 2 / 2.75) { return d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c } else if (b < 2.5 / 2.75) { return d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c } else { return d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c } }, easeInOutBounce: function (a, b, c, d, e) { if (b < e / 2) return jQuery.easing.easeInBounce(a, b * 2, 0, d, e) * .5 + c; return jQuery.easing.easeOutBounce(a, b * 2 - e, 0, d, e) * .5 + d * .5 + c } })*/
