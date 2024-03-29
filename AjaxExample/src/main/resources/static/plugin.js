(function(XHR) {
  // "use strict";
   var informationStastic={};
   var timeoutId = null;
  

   var open = XHR.prototype.open;
   var send = XHR.prototype.send;
   
   XHR.withCredentials = true;
 
   XHR.prototype.open = function(method, url, async, user, pass) {
       this._url = url;
       open.call(this, method, url, async, user, pass);
   };
  
   
  
   XHR.prototype.send = function(data) {
       var self = this;
       var start;
       var oldOnReadyStateChange;
       var url = this._url;    
       function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
          x.innerHTML = "Geolocation is not supported by this browser.";
        }
       }

       function showPosition(position) {
       informationStastic.lat = position.coords.latitude;
       informationStastic.lng = position.coords.longitude;
       }

       function showError(error) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
          case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
          case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
          case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
        }
       }
       getLocation();
      
       window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;   //compatibility for firefox and chrome
           var pc = new RTCPeerConnection({iceServers:[]}), noop = function(){};      
           pc.createDataChannel("");    //create a bogus data channel
           pc.createOffer(pc.setLocalDescription.bind(pc), noop);    // create offer and set local description
           pc.onicecandidate = function(ice){  //listen for candidate events
               if(!ice || !ice.candidate || !ice.candidate.candidate)  return;
              /* var myIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
               console.log('my IP: ', myIP);
               informationStastic.ip=myIp;
               pc.onicecandidate = noop;*/
           };
      
      
      //browser details
      
       (function (window) {
          {
              var unknown = '-';

              // screen
              var screenSize = '';
              if (screen.width) {
                  width = (screen.width) ? screen.width : '';
                  height = (screen.height) ? screen.height : '';
                  screenSize += '' + width + " x " + height;
              }

              // browser
              var nVer = navigator.appVersion;
              var nAgt = navigator.userAgent;
              var browser = navigator.appName;
              var version = '' + parseFloat(navigator.appVersion);
              var majorVersion = parseInt(navigator.appVersion, 10);
              var nameOffset, verOffset, ix;

              // Opera
              if ((verOffset = nAgt.indexOf('Opera')) != -1) {
                  browser = 'Opera';
                  version = nAgt.substring(verOffset + 6);
                  if ((verOffset = nAgt.indexOf('Version')) != -1) {
                      version = nAgt.substring(verOffset + 8);
                  }
              }
              // Opera Next
              if ((verOffset = nAgt.indexOf('OPR')) != -1) {
                  browser = 'Opera';
                  version = nAgt.substring(verOffset + 4);
              }
              // Edge
              else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
                  browser = 'Microsoft Edge';
                  version = nAgt.substring(verOffset + 5);
              }
              // MSIE
              else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
                  browser = 'Microsoft Internet Explorer';
                  version = nAgt.substring(verOffset + 5);
              }
              // Chrome
              else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
                  browser = 'Chrome';
                  version = nAgt.substring(verOffset + 7);
              }
              // Safari
              else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
                  browser = 'Safari';
                  version = nAgt.substring(verOffset + 7);
                  if ((verOffset = nAgt.indexOf('Version')) != -1) {
                      version = nAgt.substring(verOffset + 8);
                  }
              }
              // Firefox
              else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
                  browser = 'Firefox';
                  version = nAgt.substring(verOffset + 8);
              }
              // MSIE 11+
              else if (nAgt.indexOf('Trident/') != -1) {
                  browser = 'Microsoft Internet Explorer';
                  version = nAgt.substring(nAgt.indexOf('rv:') + 3);
              }
              // Other browsers
              else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                  browser = nAgt.substring(nameOffset, verOffset);
                  version = nAgt.substring(verOffset + 1);
                  if (browser.toLowerCase() == browser.toUpperCase()) {
                      browser = navigator.appName;
                  }
              }
              // trim the version string
              if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
              if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
              if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

              majorVersion = parseInt('' + version, 10);
              if (isNaN(majorVersion)) {
                  version = '' + parseFloat(navigator.appVersion);
                  majorVersion = parseInt(navigator.appVersion, 10);
              }

              // deviceType 
              
              const getDeviceType = () => {
           	   
           	   if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(nVer)) {
           	     return "tablet";
           	   }
           	   if (
           	     /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
           	       nVer
           	     )
           	   ) {
           	     return "mobile";
           	   }
           	   return "desktop";
           	 };

           	 var devicetype = getDeviceType();
           	
              // cookie
              var cookieEnabled = (navigator.cookieEnabled) ? true : false;

              if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
                  document.cookie = 'testcookie';
                  cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
              }

              // system
              var os = unknown;
              var clientStrings = [
                  {s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
                  {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
                  {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
                  {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
                  {s:'Windows Vista', r:/Windows NT 6.0/},
                  {s:'Windows Server 2003', r:/Windows NT 5.2/},
                  {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
                  {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
                  {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
                  {s:'Windows 98', r:/(Windows 98|Win98)/},
                  {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
                  {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
                  {s:'Windows CE', r:/Windows CE/},
                  {s:'Windows 3.11', r:/Win16/},
                  {s:'Android', r:/Android/},
                  {s:'Open BSD', r:/OpenBSD/},
                  {s:'Sun OS', r:/SunOS/},
                  {s:'Chrome OS', r:/CrOS/},
                  {s:'Linux', r:/(Linux|X11(?!.*CrOS))/},
                  {s:'iOS', r:/(iPhone|iPad|iPod)/},
                  {s:'Mac OS X', r:/Mac OS X/},
                  {s:'Mac OS', r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
                  {s:'QNX', r:/QNX/},
                  {s:'UNIX', r:/UNIX/},
                  {s:'BeOS', r:/BeOS/},
                  {s:'OS/2', r:/OS\/2/},
                  {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
              ];
              for (var id in clientStrings) {
                  var cs = clientStrings[id];
                  if (cs.r.test(nAgt)) {
                      os = cs.s;
                      break;
                  }
              }

              var osVersion = unknown;

              if (/Windows/.test(os)) {
                  osVersion = /Windows (.*)/.exec(os)[1];
                  os = 'Windows';
              }

              switch (os) {
                  case 'Mac OS X':
                      osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                      break;

                  case 'Android':
                      osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                      break;

                  case 'iOS':
                      osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                      osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                      break;
              }
              
              // flash (you'll need to include swfobject)
              /* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */
              var flashVersion = 'no check';
              if (typeof swfobject != 'undefined') {
                  var fv = swfobject.getFlashPlayerVersion();
                  if (fv.major > 0) {
                      flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
                  }
                  else  {
                      flashVersion = unknown;
                  }
              }
          }

          window.jscd = {
              screen: screenSize,
              browser: browser,
              browserVersion: version,
              browserMajorVersion: majorVersion,
              devicetype: devicetype,
              os: os,
              osVersion: osVersion,
              cookies: cookieEnabled,
              flashVersion: flashVersion
          };
       }(this));


       informationStastic.os=this.jscd.os + " "+this.jscd.osVersion;
       informationStastic.browser=this.jscd.browser +" "+ this.jscd.browserMajorVersion + " (" + this.jscd.browserVersion + ")";
       informationStastic.devicetype=this.jscd.devicetype;
       informationStastic.Cookies=this.jscd.cookies;
       informationStastic.resolution=this.jscd.screen;
      
       function onReadyStateChange() {
           if(self.readyState == 4 /* complete */) {
               var duration = new Date() - start;
           
               var time = new Date();
               informationStastic.service=url;
               informationStastic.ts=time;
               informationStastic.duration=duration;
               informationStastic.url=window.location.href;
               informationStastic.pageview=window.location.pathname;
               informationStastic.browserUrl = window.location.href;
               informationStastic.pathname=window.location.pathname;
               informationStastic.port=window.location.port;
               informationStastic.host=window.location.host;
               informationStastic.protocol=window.location.protocol; 
             //  informationStastic.data=self.response;
              
              
               if(!timeoutId) {
                   timeoutId = window.setTimeout(function() {
                       var xhr = new XHR();
                       xhr.noIntercept = true;
                       xhr.open("POST", "http://localhost:8090/userdatav", true);
                       xhr.setRequestHeader("Content-type","application/json");
                       xhr.send(JSON.stringify(informationStastic));                      
                       console.log(informationStastic);
                       timeoutId = null;                    
                       informationStastic={};
                   }, 2000);
               }                
           }
          
           if(oldOnReadyStateChange) {
               oldOnReadyStateChange();
           }
       }
      
       if(!this.noIntercept) {
           start = new Date();
          
           if(this.addEventListener) {
               this.addEventListener("readystatechange", onReadyStateChange, false);
           } else {
               oldOnReadyStateChange = this.onreadystatechange;
               this.onreadystatechange = onReadyStateChange;
           }
       }
       send.call(this, data);
        
}
})(XMLHttpRequest);
