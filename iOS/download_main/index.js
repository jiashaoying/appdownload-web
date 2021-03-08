$(function () {
  var PLIST_URL = 'https://dev.shgsec.com:1782/builds/iOS/versions/'
  var PLIST_NAME = 'shgsec_iphone.plist'
  var APP_DOWN_BASE = 'itms-services://?action=download-manifest&url=' + PLIST_URL

  getAppVersionsPath()

  function getAppVersionsPath() {
    var url = 'https://dev.shgsec.com:1782/web_api/stockinstall/ios/versions/'
    $.get(url, function (result) {
      console.log(result)
      if (result.code > 0) {
        loadListVersionsWithData(result.list)
      }
    })
  }

  // 根据返回数据拼接列表，历史版本
  function loadListVersionsWithData(data) {
    $('#versionList').find('tbody').children().remove();
    if (data.length != 0) {
      for (let index = 0; index < data.length; index++) {
        const element = data[index]
        name = element.name
        time = element.time
        file_name = element.file_name

        var html_a = $("<a></a>").attr('href', `../versions/${file_name}/index.html`).html(name);
        var td1 = $("<td></td>").html(html_a);

        var td2 = `<td>${time}</td>`;

        html_a = $("<a></a>").attr('href', '#').html("安装");
        var td3 = $("<td></td>").addClass('install').attr('file_name', file_name).html(html_a);
        var html_tr1 = $("<tr></tr>").append(td1, td2, td3);

        $('#versionList').find('tbody').append(html_tr1);
      }
    } else {
      
    }
  }
  $('body').on('click', '.install', function () {
    var path = $(this).attr('file_name')
    window.location.href = APP_DOWN_BASE + path + '/' + PLIST_NAME
    console.log('点击安装!')
  })

  var winHeight = $(window).height();
  function is_in_weixin() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
  }
  var isWeixin = is_in_weixin();
  if (isWeixin) {
    $('.weixin-tip').css("height", winHeight);
    $('.weixin-tip').show();
  } else {
    $('.weixin-tip').hide();
  }
});
