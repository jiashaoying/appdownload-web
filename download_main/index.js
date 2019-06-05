$(function () {

  function getAppVersionsPath() {
    var url = 'http://localhost:5088/ios/versions/'
    $.get(url, function (result) {
      console.log(result)
    })
  }
  getAppVersionsPath()
  loadListVersionsWithData([])
  // 根据返回数据拼接列表，历史版本
  function loadListVersionsWithData(data) {
    $('#versionList').find('tbody').children().remove();
    var html_a = $("<a></a>").attr('href', '../versions/sgzq-phone-1.6.0-201906031006-online-fb40e5c-dv-debug/index.html').html("sgzq-phone-1.6.0");
    var td1 = $("<td></td>").html(html_a);
    var td2 = "<td>201906031006</td>";
    html_a = $("<a></a>").attr('href', '#').attr('onclick', 'window.location.href=\'itms-services://?action=download-manifest&url=https://dev.shgsec.com:1782/builds/iOS/versions/sgzq-phone-1.5.0-201905061722-online-00aee60-dv-debug/shgsec_iphone.plist\'').html("安装");
    var td3 = $("<td></td>").html(html_a);
    
    var html_tr1 = $("<tr></tr>").append(td1, td2, td3);
    $('#versionList').find('tbody').append(html_tr1);
    /*
    $('#versionList').find('tbody').append(
      '\
      <tr>\
      <td><a href="../versions/sgzq-phone-1.6.0-201906031006-online-fb40e5c-dv-debug/index.html">sgzq-phone-1.6.0</a></td>\
      <td>201906031006</td>\
      <td>安装</td>\
      </tr>\
      '
    )
    */
    if (data.length != 0) {
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
      }
    } else {
      
    }
  }

});
