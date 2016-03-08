LibraryHelper-cordova
======================

Library Helper is a cordova plugin to help insert videos or images into the native gallery. Also can get duration and thumbnails from a video path. Supports IOS and Android

Install
=======

	cordova plugin add https://github.com/coryjthompson/LibraryHelper-cordova.git

Usage
=====
Save Photo to Camera Roll
-------------------------
	LibraryHelper.saveImageToLibrary(onSuccess, onError, path, albumName); 
Save Video to Camera Roll
-------------------------
	LibraryHelper.saveVideoToLibrary(onSuccess, onError, path, albumName);                                               
Get Thumbnail and Duration
---------------------------
        LibraryHelper.getVideoInfo(onSuccess, onError, path);
        
        function onSuccess(results) {
            console.log("Duration: " + results.duration); 
            console.log("Thumbnail path on disk: " + results.thumbnail);
        }


Change Log
==========
22/10/2015 - Added the ability to get video thumbnails and duration.

26/11/2014 - Converted plugin to use cordova 3.x+

13/11/2012 - Optional Callbacks

14/11/2012 - Added the ability to add assets to IOS albums

Author: Cory Thompson (http://coryjthompson.com)

License: http://www.opensource.org/licenses/mit-license.php The MIT License
