
function renavigate( event ) {
	chrome.storage.sync.get( function( items ) {
		for( var key in items ) {
			var item = items[key];
			
			var match = event.url.match( new RegExp( item.regex, "i" ) );
			if( match && match.length > item.groupNum )
			{
				match[item.groupNum] = item.replacement;
				var newUrl = match.slice( 1 ).join( "" );
				chrome.tabs.get( event.tabId, function( tab ) {
					if( tab.url == event.url ) chrome.tabs.update( event.tabId, { url: newUrl } );
				});
				return;
			}
		}
	} );
}

function showOptionsPage() {
	var optionsUrl = chrome.extension.getURL('options.html'); 
   chrome.tabs.query({}, function(extensionTabs) {
      var found = false;
      for (var i=0; i < extensionTabs.length; i++) {
         if (optionsUrl == extensionTabs[i].url) {
            found = true;
            console.log("tab id: " + extensionTabs[i].id);
            chrome.tabs.update(extensionTabs[i].id, {"selected": true});
         }
      }
      if (found == false) {
          chrome.tabs.create({url: "options.html"});
      }
   });
}

chrome.webNavigation.onBeforeNavigate.addListener(renavigate);

chrome.browserAction.onClicked.addListener( function( tab ) {
	showOptionsPage();
});