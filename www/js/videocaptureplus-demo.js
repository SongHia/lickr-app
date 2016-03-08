"use strict";

// Variable to hold pointer to file system
var fileSystem = null;

// Variable to hold the image URI from the camera
var videoUri = null;

function videoCapturePlusDemo(highquality, frontcamera, duration) {
  window.plugins.videocaptureplus.captureVideo(
      captureSuccess,
      captureError,
      {
        limit: 1,
        duration: duration,
        highquality: highquality,
        frontcamera: frontcamera,
        // you'll want to sniff the useragent/device and pass the best overlay based on that.. assuming iphone here
        portraitOverlay: 'www/img/overlay01_ice_cream',
        // portraitOverlay: 'www/img/cameraoverlays/overlay-iPhone-portrait.png',
        landscapeOverlay: 'www/img/cameraoverlays/overlay-iPhone-landscape.png'
      }
  );
}

function captureSuccess(mediaFiles) {
  var i, len;
  for (i = 0, len = mediaFiles.length; i < len; i++) {
    
    //relates to the video object captured
    var mediaFile = mediaFiles[i];
    mediaFile.getFormatData(getFormatDataSuccess, getFormatDataError);

     //1. console log the URI
    console.log("media file full path: " + mediaFile.fullPath);

    // 2. Save it to the global variable
    videoUri = mediaFile.fullPath;
    console.log("videoUri: " + videoUri);
    //videoUri is: file:///private/var/mobile/Containers/Data/Application/58D63D0B-DD9E-4ACF-AE97-463FF87B6007/tmp/capture-T0x134e0d6a0.tmp.K4JCv1/capturedvideo.MOV

  
    //html element for showing the video
    var vid = document.createElement('video');
    vid.id = "theVideo";
    vid.width = "240";
    vid.height = "160";
    vid.controls = "controls";

    //html element for getting the video object
    var source_vid = document.createElement('source');
    source_vid.id = "theSource";
    source_vid.src = mediaFile.fullPath;
    
    //3. display it on the page
    vid.appendChild(source_vid);
    document.getElementById('video_container').innerHTML = '';
    document.getElementById('video_container').appendChild(vid);
    document.getElementById('video_meta_container2').innerHTML = parseInt(mediaFile.size / 1000) + 'KB ' + mediaFile.type;

    //testing other code
    LibraryHelper.saveVideoToLibrary(onSuccess, onError, videoUri, "Lickr App");

    // 4. Request access to the file system
    // window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFSSuccess, gotFSError);

    //new code to test
    // 1. Console log the URI
    // console.log(imageData);
    
    // 2. Save it to global variable
    // imageUri = imageData;
    
    // 3. Display it on the page
    // var image = document.getElementById('mypicture');
    // image.src = imageData;

    // 4. Request access to the file system
    // window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFSSuccess, gotFSError);
  }
}

//other code function
    function onSuccess(results) {
        console.log("Duration: " + results.duration); 
        console.log("Thumbnail path on disk: " + results.thumbnail);
    }

    function onError(results) {
      console.log("some kind of error with the library helper");
    }

//new code to test
// Failed to get a picture from the camera
// function onGetPictureFail(message) {
//   alert('Failed because: ' + message);
// }

// Got access to the file system
// function gotFSSuccess(_fileSystem) {
//   // Save pointer to global variable
//   fileSystem = _fileSystem;
  
//   // Resolve the videoUri to a file pointer ---> goes to errror resolving video file uri to file
//   window.resolveLocalFileSystemURL(videoUri, gotVideoFile, gotVideoFileError);        
// }

// // Got an error trying to access file system
// function gotFSError(err) {
//   console.log("Error: " + err);
// }       

// // Resolved video file Uri to File
// function gotVideoFile(fileEntry) {
//     // Move the file to a permanent place
//      fileEntry.moveTo(fileSystem.root, "Test Album", movedVideoSuccess, moveerrorHandler);
// }

// // Got error trying to resolve video file uri to file
// function gotVideoFileError(err) {
//     console.log("Video File Error: " + err);
// }

// // Successfully moved video file
// function movedVideoSuccess(fileEntry) {
//     console.log("Moved Video Success" + fileEntry.fullPath);
// }

// // Got an error trying to move video file
// function moveerrorHandler(err) {
//     console.log("MoveErrorHander: " + err);
// }       
//new code to test //



function getFormatDataSuccess(mediaFileData) {
  document.getElementById('video_meta_container').innerHTML = mediaFileData.duration + ' seconds, ' + mediaFileData.width + ' x ' + mediaFileData.height;
}

function captureError(error) {
  // code 3 = cancel by user
  alert('Returncode: ' + JSON.stringify(error.code));
}

function getFormatDataError(error) {
  alert('A Format Data Error occurred during getFormatData: ' + error.code);
}