$(function () {

  loadListVersionsWithData([])
  // 根据返回数据拼接列表，历史版本
  function loadListVersionsWithData(data) {
    $('#versionList').find('tbody').children().remove();
    $('#versionList').find('tbody').append(
      '\
      <tr>\
      <td><a href="../versions/sgzq-phone-1.6.0-201906031006-online-fb40e5c-dv-debug/index.html">sgzq-phone-1.6.0</a></td>\
      <td>201906031006</td>\
      <td>安装</td>\
      </tr>\
      <tr>\
      <td><a href="../versions/sgzq-phone-1.5.0-201905061722-online-00aee60-dv-debug/index.html">sgzq-phone-1.5.0</a></td>\
      <td>201905061722</td>\
      <td><a href="#" onclick="window.location.href=\'itms-services://?action=download-manifest&url=https://dev.shgsec.com:1782/builds/iOS/versions/201905061722/shgsec_iphone.plist\'">安装</a></td>\
      </tr>\
      '
    )

    if (data.length != 0) {
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
      }
    } else {
      
    }
  }

});
