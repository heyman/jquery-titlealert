/**
 * jQuery.flashTitle
 * Copyright (c) 2009 ESN | http://esndev.com | http://esn.me
 * Jonatan Heyman | http://heyman.info
 * 
 * @projectDescription Flash the browser title bar
 * @author Jonatan Heyman | http://heyman.info
 * @name $.flashTitle
 * @version 1.0.0
 * 
 * @id jQuery.flashTitle
 * @param {String} text The text that should be flashed in the browser title
 * @param {Object, Function} settings Optional set of settings.
 *	 @option {Number} interval The flashing interval in milliseconds (default: 500).
 *	 @option {Number} duration The total lenght of the flashing before it is automatically stopped. Zero means infinite (default: 0).
 *	 @option {Boolean} stopOnFocus If true, the flashing will stop when the window gets focus (default: true).
 *	 @option {Boolean} requireBlur Experimental. If true, the call will be ignored unless the window is out of focus (default: false).
 *								   Known issues: Firefox doesn't recognize tab switching as blur, and there are some minor IE problems as well.
 *
 * @desc Flash title bar with text "Hello World!", if the window doesn't have focus, for 10 seconds or until window gets focused, with an interval of 500ms
 * @example $.flashTitle("Hello World!", {requireBlur:true, stopOnFocus:true, duration:10000, interval:500});
 */
;(function($){	
	$.flashTitle = function(text, settings) {
		// check if it currently flashing something, if so reset it
		if ($.flashTitle._running)
			$.flashTitle.stop();
		
		// override default settings with specified settings
		$.flashTitle._settings = settings = $.extend( {}, $.flashTitle.defaults, settings);
		
		// if it's required that the window doesn't have focus, and it has, just return
		if (settings.requireBlur && $.flashTitle.hasFocus)
			return;
		
		$.flashTitle._running = true;
		$.flashTitle._initialText = document.title;
		document.title = text;
		var showingAlertTitle = true;
		
		$.flashTitle._intervalToken = setInterval(function() {
			// WTF! Sometimes Internet Explorer calls the interval function an extra time!
			if (!$.flashTitle._running)
				return;
			
			showingAlertTitle = !showingAlertTitle;
			document.title = (showingAlertTitle ? text : $.flashTitle._initialText);
		}, settings.interval);
		
		// check if a duration is specified
		if (settings.duration > 0) {
			$.flashTitle._timeoutToken = setTimeout(function() {
				$.flashTitle.stop();
			}, settings.duration);
		}
	};
	
	// default settings
	$.flashTitle.defaults = {
		interval: 500,
		duration:0,
		stopOnFocus: true,
		requireBlur: false
	};
	
	// stop current title flash
	$.flashTitle.stop = function() {
		clearInterval($.flashTitle._intervalToken);
		clearTimeout($.flashTitle._timeoutToken);
		document.title = $.flashTitle._initialText;
		
		$.flashTitle._timeoutToken = null;
		$.flashTitle._intervalToken = null;
		$.flashTitle._initialText = null;
		$.flashTitle._running = false;
		$.flashTitle._settings = null;
	}
	
	$.flashTitle.hasFocus = true;
	$.flashTitle._running = false;
	$.flashTitle._intervalToken = null;
	$.flashTitle._timeoutToken = null;
	$.flashTitle._initialText = null;
	$.flashTitle._settings = null;
	
	
	$.flashTitle._focus = function () {
		$.flashTitle.hasFocus = true;
		
		if ($.flashTitle._running) {
			if ($.flashTitle._settings.stopOnFocus)
				$.flashTitle.stop();
		}
	};
	$.flashTitle._blur = function () {
		$.flashTitle.hasFocus = false;
	};
	
	// check for Internet Explorer
	if (/*@cc_on!@*/false) {
		document.onfocusin = $.flashTitle._focus;
		document.onfocusout = $.flashTitle._blur;
	} else {
		window.onfocus = $.flashTitle._focus;
		window.onblur = $.flashTitle._blur;
	}
})(jQuery);
