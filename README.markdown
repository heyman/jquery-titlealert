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

<table>
<tr>
	<td><b>message</b></td>
	<td>A string  the message that should be flashed in the browser title.</td>
</tr>
<tr>
	<td valign="top"><b>options</b></td>
	<td>
JavaScript object containing options

<table>
<tr>
	<th>name</th>
	<th>default</th>
	<th>description</th>
</tr>
<tr>
	<td>interval</td>
	<td>500</td>
	<td>The flashing interval in milliseconds.</td>
</tr>
<tr>
	<td>originalTitleInterval</td>
	<td>null</td>
	<td>Time in milliseconds that the original title is diplayed for. If null the time is the same as interval.</td>
<tr>
	<td>duration</td>
	<td>0</td>
	<td>The total lenght of the flashing before it is automatically stopped. Zero means infinite.</td>
</tr>
<tr>
	<td>stopOnFocus</td>
	<td>true</td>
	<td>If true, the flashing will stop when the window gets focus.</td>
</tr>
<tr>
	<td>stopOnMouseMove</td>
	<td>false</td>
	<td>If true, the flashing will stop when the document recieves a mousemove event (i.e. when the user moves the mouse over the document area, regardless of what window is active).</td>
</tr>
<tr>
	<td>requireBlur</td>
	<td>false</td>
	<td>Experimental. If true, the call will be ignored unless the window is out of focus. Known issues: Firefox doesn't recognize tab switching as blur, and there are some minor IE problems as well.</td>
</tr>
</table>

</td>
</tr>
</table>


License
-------
MIT License
