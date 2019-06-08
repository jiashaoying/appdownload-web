$(function () {
  var PLIST_URL = 'https://dev.shgsec.com:1782/builds/iOS/versions/'
  var PLIST_NAME = 'shgsec_iphone.plist'
  var APP_DOWN_BASE = 'itms-services://?action=download-manifest&url=' + PLIST_URL
  console.log(window.location)
  var pathName = window.location.pathname
  var paths = pathName.split('/')
  var filePathName = paths[4]
  $('#file_name').html(filePathName)
  $('#button_install').click(function () {
    var app_url = APP_DOWN_BASE + filePathName + '/' + PLIST_NAME
    window.location.href = app_url
    console.log('点击安装！')
    console.log(app_url)
  })
})