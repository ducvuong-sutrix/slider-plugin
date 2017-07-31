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
