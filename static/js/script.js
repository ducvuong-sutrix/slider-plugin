/**
 * @name Site
 * @description Global variables and functions
 * @version 1.0
 */

 var Site = (function($, window, undefined) {
  'use strict';

  var privateVar = null;
  var privateMethod = function() {

    $(document).ready(function(){

      $(".navbar-btn").click(function(){
        $(".navbar-wrapper").slideToggle();
      });
    });
  };

  return {
    publicVar: privateVar,
    publicMethod: privateMethod
  };

})(jQuery, window);

jQuery(function() {
  Site.publicMethod();
});

// /**
//  *  @name Slider
//  *  @description description
//  *  @version 1.0
//  *  @options
//  *    option
//  *  @events
//  *    event
//  *  @methods
//  *    init
//  *    publicMethod
//  *    destroy
//  */
//  ;(function($, window, undefined) {
//    'use strict';

//    var pluginName = 'exxample-slider',
//        classContainer = 'container-slider',
//        classDots = 'dots',
//        classActive = 'active',
//        classBtnPrev = 'btn-prev',
//        classBtnNext = 'btn-next',
//        templatePreviousBtn = '<button class="'+classBtnPrev+' btn-arrow" data-action="prev" type="button"></button>',
//        templateNextBtn = '<button class="'+classBtnNext+' btn-arrow" data-action="next" type="button"></button>',
//        containerTemplate = '<div class="'+classContainer+'"></div>',
//        templateDot = '<ul class="'+classDots+' slick-dots">',
//        templateLi = '',
//        isRunningAnimation = false;

//    var getFunctionNameByEvent = function (event) {
//      var btn = $(event.target);
//      return btn.attr('data-action');
//    };

//    var addDot = function (index) {
//      if (!index) {
//        templateLi += '<li class="' + classActive + '"><button>' + (index + 1) + '</button></li>';
//      } else {
//        templateLi += '<li><button>' + (index + 1) + '</button></li>';
//      }
//    };

//    var addStyle = function (index) {
//      addDot(index);
//      var _this = $(this);
//      if (!index) {
//        _this.addClass(classActive);
//      }
//      _this.css({
//        float: 'left',
//        position: 'relative',
//        left: -(index * _this.width()),
//        opacity: index ? 0 : 1
//      });
//    };

//    var addButton = function (ele) {
//      ele.prepend(templatePreviousBtn);
//      ele.append(templateNextBtn);
//    };

//    var addDots = function (ele) {
//      ele.append(templateDot + templateLi+'</ul>');
//      templateLi = '';
//    };

//    var createContainer = function (ele) {
//      var content = ele.html();
//      var container = $(containerTemplate);
//      ele.empty().append(container);
//      var childrenEle = container.append(content).children();
//      childrenEle.each(addStyle);
//      container.width(childrenEle.length * container.width());
//    };

//    var selectorClass = function (className) {
//      return '.' + className;
//    };

//    var runAnimation = function (options, event) {
//      if (isRunningAnimation) {
//        return;
//      }
//      var ele, btnDot,
//      containerEle = this.children(selectorClass(classContainer)),
//      currentItem = containerEle.children(selectorClass(classActive)),
//      currentDot = this.children(selectorClass(classDots)).children(selectorClass(classActive));
//      if ($.isFunction(currentItem[getFunctionNameByEvent(event)])) {
//        ele = currentItem[getFunctionNameByEvent(event)]();
//      } else {
//        btnDot = $(event.target);
//        if (btnDot.parent().hasClass(classActive)) {
//          return;
//        }
//        ele = containerEle.children().eq(parseInt(btnDot.html())-1);
//        btnDot.parent().addClass(classActive);
//      }

//      var stepRun = function () {
//        isRunningAnimation = true;
//        currentItem.css('opacity', 0);
//        currentItem.removeClass(classActive);
//        currentDot.removeClass(classActive);
//        ele.animate({
//          opacity: 1
//        }, options.speed, options.cssEase, function () {
//          ele.addClass(classActive);
//          isRunningAnimation = false;
//        });
//      };
//      if (ele.length) {
//        if (!btnDot) {
//          currentDot[getFunctionNameByEvent(event)]().addClass(classActive);
//        }
//        stepRun();
//      } else if (options.infinite){
//        if (getFunctionNameByEvent(event) === 'prev') {
//          ele = containerEle.children().last();
//          this.children(selectorClass(classDots)).children().last().addClass(classActive);
//        } else {
//          ele = containerEle.children().first();
//          this.children(selectorClass(classDots)).children().first().addClass(classActive);
//        }
//        stepRun();
//      }
//    };

//    var addEvents = function (ele, options) {
//      ele.on('click.btnPrev', selectorClass(classBtnPrev), runAnimation.bind(ele, options));
//      ele.on('click.btnNext', selectorClass(classBtnNext), runAnimation.bind(ele, options));
//      ele.on('click.dots', selectorClass(classDots) + ' button', runAnimation.bind(ele, options));
//    };

//    function Plugin(element, options) {
//      this.element = $(element);
//      this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
//      this.init();
//    }

//    Plugin.prototype = {
//      init: function() {
//        var ele = this.element,
//            options = this.options;
//        createContainer(ele);
//        if (options.arrows) {
//          addButton(ele);
//        }
//        if (options.dots) {
//          addDots(ele);
//        }
//        addEvents(ele, options);
//      },

//      destroy: function() {
//        $.removeData(this.element[0], pluginName);
//      }
//    };

//    $.fn[pluginName] = function(options, params) {
//      return this.each(function() {
//        var instance = $.data(this, pluginName);
//        if (!instance) {
//          $.data(this, pluginName, new Plugin(this, options));
//        } else if (instance[options]) {
//          instance[options](params);
//        }
//      });
//    };

//    $.fn[pluginName].defaults = {
//      dots:true,
//      arrows:true,
//      speed:500,
//      cssEase:'linear',
//      infinite:false
//    };

//    $(function() {
//      $('[data-' + pluginName + ']')[pluginName]();
//    });

//  }(jQuery, window));

/**
*  @name plugin
*  @description description
*  @version 1.0
*  @options
*    option
*  @events
*    event
*  @methods
*    init
*    publicMethod
*    destroy
*/
;(function($, window, undefined) {
  'use strict';
  var pluginName = 'slider',
  none='none',
  onTouchStart='ontouchstart';

  function supportCSS3(prop) {
    var prefix = ['-webkit-', '-moz-', ''];
    var root = document.documentElement;
    function camelCase(str) {
      return str.replace(/\-([a-z])/gi, function(match, $1) {
        return $1.toUpperCase();
      });
    }
    for (var i = prefix.length - 1; i >= 0; i--) {
      var css3prop = camelCase(prefix[i] + prop);
      if (css3prop in root.style) {
        return css3prop;
      }
    }
    return false;
  }

  function transitionEnd() {
    var transitions = {
      'transition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'mozTransitionEnd'
    };
    var root = document.documentElement;
    for (var name in transitions) {
      if (root.style[name] !== undefined) {
        return transitions[name];
      }
    }
    return false;
  }

  function support3d() {
    if (!window.getComputedStyle) {
      return false;
    }
    var el = document.createElement('div'),
    has3d,
    transform = supportCSS3('transform');

    document.body.insertBefore(el, null);

    el.style[transform] = 'translate3d(1px,1px,1px)';
    has3d = getComputedStyle(el)[transform];

    document.body.removeChild(el);

    return (has3d !== undefined && has3d.length > 0 && has3d !== none);
  }
  var Touch = {
    hasTouch: !!((onTouchStart in window) || window.DocumentTouch && document instanceof window.DocumentTouch),
    event: function() {
      return {
        start: (this.hasTouch) ? 'touchstart' : 'mousedown',
        move: (this.hasTouch) ? 'touchmove' : 'mousemove',
        end: (this.hasTouch) ? 'touchend' : 'mouseup',
        leave: (this.hasTouch) ? 'touchleave' : 'mouseout'
      };
    }
  };

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
      args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func.apply(context, args);
      }
    };
  }
  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
  }

  Plugin.prototype = {
    init: function() {
      var ele = this.element,
      options = this.options;
      ele.vars = {
        touch: options.touch,
        infinite: options.infinite,
        autoPlay: options.autoPlay,
        pauseOnHover: options.pauseOnHover,
        delay: options.delay,
        responsive: options.responsive,
        controls: options.controls,
        arrows: options.arrows,
        caption: options.caption,
        speed: options.speed,
        cssEase: options.cssEase,
        classSlider:options.classSlider,
        classSliderSwitch:options.classSliderSwitch,
        classSliderCaption:options.classSliderCaption,
        classSliderItem:options.classSliderItem,
        $container : ele,
        $slider : ele.find('.'+options.classSlider),
        $arrows : ele.find('.'+options.classSliderSwitch),
        $caption : ele.find('.'+options.classSliderCaption),
        $slide : ele.find('.'+options.classSliderItem)
      };
      var sliderStyle = ele.vars.$slider.get(0).style;
      var slideLen = ele.vars.$slide.length;
      var slideWidth = ele.vars.$container.outerWidth();
      var sliderWidth = slideLen * slideWidth;
      var current = 0;
      var offset = 0;
      var busy = false;
      var touchFlag = false;
      var $controlPanel;
      var $navControl;
      var timer;

      var transformProperty = supportCSS3('transform');
      var transitionProperty = supportCSS3('transition');
      var has3d = support3d();
      function move(ele, value, hasAnimate) {
        if (transitionProperty && transformProperty) {

          (hasAnimate) ?
          sliderStyle[transitionProperty] = transformProperty + ' ' + ele.vars.speed + 'ms ' + ele.vars.cssEase: sliderStyle[transitionProperty] = none;

          (has3d) ?
          sliderStyle[transformProperty] = 'translate3d(' + value + 'px, 0, 0)': sliderStyle[transformProperty] = 'translateX(' + value + 'px)';

          if (hasAnimate) {
            ele.vars.$slider.one(transitionEnd(), function() {

              busy = false;
            });
          } else {
            busy = false;
          }
        } else {
          if (hasAnimate) {
            ele.vars.$slider.animate({
              'margin-left': value
            }, ele.vars.speed, 'linear', function() {
              busy = false;
            });
          } else {
            ele.vars.$slider.css('margin-left', value);
            busy = false;
          }

        }
      }
      function show(ele, slide) {
        if (busy) {
          return;
        }
        if (slide === current) {
          return;
        }
        current = (slide > slideLen - 1) ? 0 : slide;
        if (slide < 0) {
          current = slideLen - 1;
        }

        offset = -(slideWidth * (current));
        console.log(offset);
        if (ele.vars.controls) {
          $navControl.removeClass('active')
          .eq(current)
          .addClass('active');
        }
        busy = true;
        move(ele, offset, true);
      }
      function autoPlay() {
        if (timer) {
          clearInterval(timer);
        }
        timer = setInterval(function() {
          if (!touchFlag) {
            show(ele, current + 1);
          }
        },10000);
      }
      function dimmensions() {
        console.log(ele.vars.$container);
        var scrollWidth = window.innerWidth - document.documentElement.clientWidth || 0;
        slideWidth = ele.vars.$container.outerWidth() + scrollWidth;
        sliderWidth = slideLen * slideWidth;
        ele.vars.$slide.css('width', slideWidth);
        sliderStyle['width'] = sliderWidth + 'px';
      }

      function responsive(ele) {

        if (timer) {
          clearInterval(timer);
        }
        dimmensions();

        offset = -(slideWidth * current);
        move(ele, offset);
      }
      function controls(ele) {
        $controlPanel = $('<div/>', {
          'class': 'slider-nav'
        })
        .appendTo(ele.vars.$container);

        var links = [];

        for (var i = 0; slideLen > i; i++) {
          var act = (current === i) ? 'active' : '';
          links.push('<li class="slider-nav-control ' + act + '" data-slider-control="' + i + '"><p>'+(i+1)+'</p></li>');
        }
        $controlPanel.html(links.join(''));
        $navControl = $controlPanel.find('.slider-nav-control');
        $controlPanel.on('click.' + pluginName, '.slider-nav-control', function(e) {
          e.preventDefault();
          if ($(this).hasClass('active')) {
            return;
          }
          show(ele, parseInt(this.getAttribute('data-slider-control'), 10));
        });
      }

      function touchEnable(ele) {
        ele.vars.$slider.addClass('has-touch');
        var touchX;
        var touchY;
        var delta;
        var target;
        var swipeTo = 0;
        ele.vars.$slider.on(Touch.event().start + '.' + pluginName, function(e) {
          if (touchFlag || busy) {
            return;
          }

          var touch;
          if (e.originalEvent.targetTouches) {
            target = e.originalEvent.targetTouches[0].target;
            touch = e.originalEvent.targetTouches[0];
          } else {
            touch = e.originalEvent;
            e.preventDefault();
          }

          delta = 0;
          touchX = touch.pageX || touch.clientX;
          touchY = touch.pageY || touch.clientY;
          touchFlag = true;

        });
        ele.vars.$slider.on(Touch.event().move + '.' + pluginName, function(e) {
          if (!touchFlag) {
            return;
          }

          var touch;
          if (e.originalEvent.targetTouches) {
            if (e.originalEvent.targetTouches.length > 1 || target !== e.originalEvent.targetTouches[0].target) {
              return;
            }
            touch = e.originalEvent.targetTouches[0];
          } else {
            e.preventDefault();
            touch = e.originalEvent;
          }

          var currentX = touch.pageX || touch.clientX;
          var currentY = touch.pageY || touch.clientY;

          if (Math.abs(touchX - currentX) >= Math.abs(touchY - currentY)) {
            delta = touchX - currentX;
            move(ele, parseInt(offset, 10) - delta);
          }
        });
        ele.vars.$slider.on(Touch.event().end + '.' + pluginName, function() {

          if (!touchFlag) {
            return;
          }
          if( current === ele.vars.$slide.length - 1 ){
            swipeTo = 0;
          } else {
            swipeTo = delta < 0 ? current - 1 : current + 1;
          }
          if (Math.abs(delta) < 50 || (!ele.vars.infinite && (swipeTo > slideLen - 1 || swipeTo < 0))) {
            touchFlag = false;
            move(ele, offset, true);
            return;
          }
          touchFlag = false;
          target = null;
          show(ele, swipeTo);
        });
        ele.vars.$slider.on(Touch.event().leave + '.' + pluginName, function() {
          if (touchFlag) {
            move(ele, offset, true);
            touchFlag = false;
          }
        });
      }

      dimmensions();

      if (ele.vars.responsive) {
        $(window).on('resize.' + pluginName, debounce(responsive, 50));
      }
      !ele.vars.caption && ele.vars.$caption.attr('disabled', true);
      ele.vars.controls && controls(ele);
      if (ele.vars.touch) {
        ele.vars.$slide.find('img').attr('draggable', false);
        touchEnable(ele);
      }

      if (ele.vars.autoPlay) {
        autoPlay(ele);
        if (ele.vars.pauseOnHover) {
          ele.vars.$container.on('mouseenter.' + pluginName, function() {
            clearInterval(timer);
          });
          ele.vars.$container.on('mouseleave.' + pluginName, autoPlay);
        }
      }

      if (ele.vars.arrows) {
        !ele.vars.infinite; //&& stopInfinite('prev');

        ele.vars.$arrows.on('click.' + pluginName, function(e) {
          e.preventDefault();
          if (this.getAttribute('data-slider-dir') === 'next') {
            show(ele, current + 1);
          } else {
            show(ele, current - 1);
          }
        });
      } else {
        ele.vars.$arrows.attr('disabled', true);
      }
      console.log(ele.vars.$slider);
    },

    destroy: function() {
      $.removeData(this.element[0], pluginName);
    }
  };

  $.fn[pluginName] = function(options, params) {

    return this.each(function() {
      var instance = $.data(this, pluginName);
      if (!instance) {
        $.data(this, pluginName, new Plugin(this, options));
      } else if (instance[options]) {
        instance[options](params);
      }
    });
  };
  $.fn[pluginName].defaults = {
    touch: true,
    infinite: false,
    autoPlay: true,
    pauseOnHover: true,
    delay: 100000,
    responsive: true,
    controls: true,
    arrows: true,
    caption: true,
    speed: 300,
    cssEase: 'ease-out',
    classSlider:'slider',
    classSliderSwitch:'slider-switch',
    classSliderCaption:'slider-caption',
    classSliderItem:'slider-item',

  };

  $(function() {
    $('[data-' + pluginName + ']')[pluginName]({

    });
  });
})(jQuery, window);

// /**
//  *  @name Slider
//  *  @description description
//  *  @version 1.0
//  *  @options
//  *    option
//  *  @events
//  *    event
//  *  @methods
//  *    init
//  *    publicMethod
//  *    destroy
//  */
//  ;(function($, window, undefined) {
//   'use strict';
//     var none='none';
//     var onTouchStart='ontouchstart';
//     function supportCSS3(prop) {
//       var prefix = ['-webkit-', '-moz-', ''];
//       var root = document.documentElement;

//       function camelCase(str) {
//         return str.replace(/\-([a-z])/gi, function(match, $1) {
//           return $1.toUpperCase();
//         });
//       }
//       for (var i = prefix.length - 1; i >= 0; i--) {
//         var css3prop = camelCase(prefix[i] + prop);
//         if (css3prop in root.style) {
//           return css3prop;
//         }
//       }
//       return false;
//     }

//     function transitionEnd() {
//       var transitions = {
//         'transition': 'transitionend',
//         'WebkitTransition': 'webkitTransitionEnd',
//         'MozTransition': 'mozTransitionEnd'
//       };
//       var root = document.documentElement;
//       for (var name in transitions) {
//         if (root.style[name] !== undefined) {
//           return transitions[name];
//         }
//       }
//       return false;
//     }

//     function support3d() {
//       if (!window.getComputedStyle) {
//         return false;
//       }
//       var el = document.createElement('div'),
//       has3d,
//       transform = supportCSS3('transform');

//       document.body.insertBefore(el, null);

//       el.style[transform] = 'translate3d(1px,1px,1px)';
//       has3d = getComputedStyle(el)[transform];

//       document.body.removeChild(el);

//       return (has3d !== undefined && has3d.length > 0 && has3d !== none);
//     }
//     var Touch = {
//       hasTouch: !!((onTouchStart in window) || window.DocumentTouch && document instanceof window.DocumentTouch),
//       event: function() {
//         return {
//           start: (this.hasTouch) ? 'touchstart' : 'mousedown',
//           move: (this.hasTouch) ? 'touchmove' : 'mousemove',
//           end: (this.hasTouch) ? 'touchend' : 'mouseup',
//           leave: (this.hasTouch) ? 'touchleave' : 'mouseout'
//         };
//       }
//     };

//     function debounce(func, wait, immediate) {
//       var timeout;
//       return function() {
//         var context = this,
//         args = arguments;
//         var later = function() {
//           timeout = null;
//           if (!immediate) {
//             func.apply(context, args);
//           }
//         };
//         var callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) {
//           func.apply(context, args);
//         }
//       };
//     }

//     var pluginName = 'slider';

//     var Slider = function(el, options) {

//       var settings = $.extend({
//         touch: true,
//         infinite: false,
//         autoPlay: true,
//         pauseOnHover: true,
//         delay: 100000,
//         responsive: true,
//         controls: true,
//         arrows: true,
//         caption: true,
//         speed: 300,
//         cssEase: 'ease-out'
//       }, options || {});

//       var $container = el;
//       var $slider = $container.find('.slider');
//       var $arrows = $container.find('.slider-switch');
//       var $caption = $slider.find('.slider-caption');
//       var $slide = $slider.find('.slider-item');
//       var sliderStyle = $slider.get(0).style;
//       var slideLen = $slide.length;
//       var slideWidth = $container.outerWidth();
//       var sliderWidth = slideLen * slideWidth;
//       var current = 0;
//       var offset = 0;
//       var busy = false;
//       var touchFlag = false;
//       var $controlPanel;
//       var $navControl;
//       var timer;

//       var transformProperty = supportCSS3('transform');
//       var transitionProperty = supportCSS3('transition');
//       var has3d = support3d();


//       function move(value, hasAnimate) {

//         if (transitionProperty && transformProperty) {

//           (hasAnimate) ?
//           sliderStyle[transitionProperty] = transformProperty + ' ' + settings.speed + 'ms ' + settings.cssEase: sliderStyle[transitionProperty] = none;

//           (has3d) ?
//           sliderStyle[transformProperty] = 'translate3d(' + value + 'px, 0, 0)': sliderStyle[transformProperty] = 'translateX(' + value + 'px)';

//           if (hasAnimate) {
//             $slider.one(transitionEnd(), function(e) {
//               console.log(e);
//               busy = false;
//             });
//           } else {
//             busy = false;
//           }
//         } else {
//           if (hasAnimate) {
//             $slider.animate({
//               'margin-left': value
//             }, settings.speed, 'linear', function() {
//               busy = false;
//             });
//           } else {
//             $slider.css('margin-left', value);
//             busy = false;
//           }

//         }
//       }
//       function stopinfinite(direction) {
//         $container.find('.slider-switch-' + direction).attr('disabled', true);
//       }
//       function show(slide) {
//         if (busy) {
//           return;
//         }
//         if (slide === current) {
//           return;
//         }
//         current = (slide > slideLen - 1) ? 0 : slide;
//         if (slide < 0) {
//           current = slideLen - 1;
//         }

//         if (!settings.infinite) {

//           $arrows.attr('disabled', false);
//           if (slide === slideLen - 1) {
//             stopinfinite('next');
//           }

//           if (current === 0) {
//             stopinfinite('prev');
//           }

//         }

//         offset = -(slideWidth * (current));

//         if (settings.controls) {
//           $navControl.removeClass('active')
//           .eq(current)
//           .addClass('active');
//         }
//         busy = true;
//         move(offset, true);
//       }
//       function autoPlay() {
//         if (timer) {
//           clearInterval(timer);
//         }
//         timer = setInterval(function() {
//           if (!touchFlag) {
//             show(current + 1);
//           }
//         }, settings.delay);
//       }



//       function dimmensions() {

//         var scrollWidth = window.innerWidth - document.documentElement.clientWidth || 0;
//         slideWidth = $container.outerWidth() + scrollWidth;

//         sliderWidth = slideLen * slideWidth;
//         $slide.css('width', slideWidth);
//         sliderStyle['width'] = sliderWidth + 'px';
//       }

//       function responsive() {

//         if (timer) {
//           clearInterval(timer);
//         }
//         dimmensions();

//         offset = -(slideWidth * current);
//         move(offset);

//         autoPlay();
//       }
//       function controls() {
//         $controlPanel = $('<div/>', {
//           'class': 'slider-nav'
//         })
//         .appendTo($container);

//         var links = [];

//         for (var i = 0; slideLen > i; i++) {
//           var act = (current === i) ? 'active' : '';
//           links.push('<li class="slider-nav-control ' + act + '" data-slider-control="' + i + '"><p>'+(i+1)+'</p></li>');
//         }
//         $controlPanel.html(links.join(''));
//         $navControl = $controlPanel.find('.slider-nav-control');
//         $controlPanel.on('click.' + pluginName, '.slider-nav-control', function(e) {
//           e.preventDefault();
//           if ($(this).hasClass('active')) {
//             return;
//           }
//           show(parseInt(this.getAttribute('data-slider-control'), 10));
//         });
//       }

//       function touchEnable() {
//         $slider.addClass('has-touch');
//         var touchX;
//         var touchY;
//         var delta;
//         var target;

//         $slider.on(Touch.event().start + '.' + pluginName, function(e) {
//           if (touchFlag || busy) {
//             return;
//           }

//           var touch;
//           if (e.originalEvent.targetTouches) {
//             target = e.originalEvent.targetTouches[0].target;
//             touch = e.originalEvent.targetTouches[0];
//           } else {
//             touch = e.originalEvent;
//             e.preventDefault();
//           }

//           delta = 0;
//           touchX = touch.pageX || touch.clientX;
//           touchY = touch.pageY || touch.clientY;
//           touchFlag = true;

//         });
//         $slider.on(Touch.event().move + '.' + pluginName, function(e) {
//           if (!touchFlag) {
//             return;
//           }

//           var touch;
//           if (e.originalEvent.targetTouches) {
//             if (e.originalEvent.targetTouches.length > 1 || target !== e.originalEvent.targetTouches[0].target) {
//               return;
//             }
//             touch = e.originalEvent.targetTouches[0];
//           } else {
//             e.preventDefault();
//             touch = e.originalEvent;
//           }

//           var currentX = touch.pageX || touch.clientX;
//           var currentY = touch.pageY || touch.clientY;

//           if (Math.abs(touchX - currentX) >= Math.abs(touchY - currentY)) {
//             delta = touchX - currentX;
//             move(parseInt(offset, 10) - delta);
//           }
//         });
//         $slider.on(Touch.event().end + '.' + pluginName, function(e) {
//           console.log(e);
//           if (!touchFlag) {
//             return;
//           }
//           var swipeTo = delta < 0 ? current - 1 : current + 1;

//           if (Math.abs(delta) < 50 || (!settings.infinite && (swipeTo > slideLen - 1 || swipeTo < 0))) {
//             touchFlag = false;
//             move(offset, true);
//             return;
//           }
//           touchFlag = false;
//           target = null;
//           show(swipeTo);
//         });
//         $slider.on(Touch.event().leave + '.' + pluginName, function() {
//           if (touchFlag) {
//             move(offset, true);
//             touchFlag = false;
//           }
//         });
//       }


//       function init() {

//       // Calculate dimensions
//       dimmensions();

//       if (settings.responsive) {
//         $(window).on('resize.' + pluginName, debounce(responsive, 50));
//       }
//       // If caption false, hide caption
//       !settings.caption && $caption.attr('disabled', true);
//       // Create nav controls
//       settings.controls && controls();
//       if (settings.touch) {
//         // if the image img tag set attribute graggable false
//         $slide.find('img').attr('draggable', false);
//         // Binding touch events
//         touchEnable();
//       }

//       if (settings.autoPlay) {
//         autoPlay();
//         if (settings.pauseOnHover) {
//           $container.on('mouseenter.' + pluginName, function() {
//             clearInterval(timer);
//           });
//           $container.on('mouseleave.' + pluginName, autoPlay);
//         }
//       }

//       if (settings.arrows) {
//         // if infinite setting false hide arrows
//         !settings.infinite && stopinfinite('prev');

//         $arrows.on('click.' + pluginName, function(e) {
//           e.preventDefault();
//           if (this.getAttribute('data-slider-dir') === 'next') {
//             show(current + 1);
//           } else {
//             show(current - 1);
//           }
//         });
//       } else {
//         $arrows.attr('disabled', true);
//       }
//     }
//     function destroy() {
//       sliderStyle['width'] = '';
//       sliderStyle[transformProperty] = '';
//       sliderStyle[transitionProperty] = '';
//       $slide.css('width', '');
//       if (settings.autoPlay) {
//         if (timer) {
//           clearInterval(timer);
//         }
//         $container.off('mouseenter.' + pluginName);
//         $container.off('mouseleave.' + pluginName);
//       }
//       if (settings.arrows) {
//         $arrows.off('click.' + pluginName);
//         $arrows.attr('disabled', false);
//       }
//       if (settings.controls) {
//         $controlPanel.off('click.' + pluginName).remove();
//       }

//       $caption.attr('disabled', false);

//       if (settings.touch) {
//         $slider
//         .removeClass('has-touch')
//         .off(Touch.event().start + '.' + pluginName)
//         .off(Touch.event().move + '.' + pluginName)
//         .off(Touch.event().end + '.' + pluginName)
//         .off(Touch.event().leave + '.' + pluginName);
//         touchFlag = false;
//       }
//       if (settings.responsive) {
//         $(window).off('resize.' + pluginName);
//       }
//       $container.removeData(pluginName);
//       $container = null;
//       $slider = null;
//       $arrows = null;
//       $caption = null;
//       $slide = null;
//       $controlPanel = null;
//       $navControl = null;
//       sliderStyle = null;
//       slideLen = null;
//       slideWidth = null;
//       sliderWidth = null;
//       current = null;
//       offset = null;
//       busy = null;
//       timer = null;
//       has3d = null;
//       busy = false;
//       transformProperty = null;
//       transitionProperty = null;
//     }
//      return {
//       init: init,
//       show: show,
//       destroy: destroy
//     };

//   };

//   $.fn[pluginName] = function(opt) {
//     var that = this;
//     this.each(function() {
//       var $this = $(this);
//       var slider = $this.data(pluginName);
//       var options = typeof opt === 'object' && opt;
//       if (!slider && /(destroy|\d+)/.test(opt)) {
//         return;
//       }
//       if (!slider) {
//         slider = new Slider($this, options);
//         $this.data('Slider', slider);
//         slider.init();
//       }
//       if (typeof opt === 'string' || typeof opt === 'number' && opt !== 'init') {
//         if (typeof opt === 'number') {
//           that = slider.show(opt - 1);
//         } else {
//           if(slider[opt]) {
//             that = slider[opt]();
//           } else {
//             throw new Error('Error:: Slider has no method: ' + opt);
//           }
//         }
//       }
//       return that;
//     });
//   };
//    $(function() {
//   $('[data-' + pluginName + ']')[pluginName]({
//   });
// });
// }(jQuery, window));
