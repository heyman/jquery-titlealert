jquery-titlealert
=================

Flashes the page title with a custom message. 

Example usage
-------------

<pre>
$.titleAlert("Hello World!", {
    requireBlur:true,
    stopOnFocus:true,
    duration:10000,
    interval:500
});
</pre>

Flash title bar with text "Hello World!", if the window doesn't have focus, for 10 seconds or until window gets focused, with an interval of 500ms

Parameters and Options
----------------------

<pre>jQuery.titleAlert(message, options)</pre>

**message**: A string  the message that should be flashed in the browser title.
**options**: JavaScript object containing options

* **interval** - The flashing interval in milliseconds (default: 500).
* **duration** - The total lenght of the flashing before it is automatically stopped. Zero means infinite (default: 0).
* **stopOnFocus** - If true, the flashing will stop when the window gets focus (default: true).
* **requireBlur** -  Experimental. If true, the call will be ignored unless the window is out of focus (default: false). Known issues: Firefox doesn't recognize tab switching as blur, and there are some minor IE problems as well.


License
-------
MIT License
