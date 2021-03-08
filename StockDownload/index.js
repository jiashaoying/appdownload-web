$(function (params) {
  var userAgent = navigator.userAgent
  var appVersion = navigator.appVersion;
  console.log(appVersion)
  console.log(userAgent)
  var isAndroid = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1; // Android终端或者uc浏览器
  var isiOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // iOS 终端
  var isiPhone = userAgent.indexOf('iPhone') > -1 // iPhone设备

  if (isiOS || isiPhone){
    window.location = "https://dev.shgsec.com:1782/builds/iOS/download_main/";
  } else if (isAndroid){
    window.location = "https://dev.shgsec.com:1782/builds/Android/download_main/";
  }
})

