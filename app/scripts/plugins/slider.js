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
