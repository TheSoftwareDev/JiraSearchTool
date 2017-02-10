var gaAccount = 'UA-XXXXXXXX-X';

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

var _gaq = _gaq || [];
_gaq.push(['_setAccount', gaAccount]);
_gaq.push(['_trackPageview']);


function save_options() {
	var searchUrl = document.getElementById('searchUrl').value;
	var suffix = document.getElementById('searchSuffix').value;
	console.log(searchUrl);
	console.log(suffix);
  
	localStorage['baseUrl'] = searchUrl;
	localStorage['searchSuffix'] = suffix;
	
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
		status.textContent = '';
    }, 750);
  
}

function restore_options() {
	// Use default value
	if (localStorage['baseUrl'] == undefined){
		localStorage['baseUrl'] = 'http://my-search-url/';
	}
	if(localStorage['searchSuffix'] == undefined){
		localStorage['searchSuffix'] = 'secure/QuickSearch.jspa?searchString=';
	}
	
	document.getElementById('searchUrl').value = localStorage['baseUrl'];
	document.getElementById('searchSuffix').value = localStorage['searchSuffix'];
	
	// Update status to let user know options were saved.
	var status = document.getElementById('status');
	status.textContent = displayText;
	setTimeout(function() {
		status.textContent = '';
	}, 750);
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);