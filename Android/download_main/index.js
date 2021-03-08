$(function () {
  var APP_DOWN_URL = 'https://dev.shgsec.com:1782/builds/Android/'

  getAppVersionsPath()

  function getAppVersionsPath() {
    var url = 'https://dev.shgsec.com:1782/web_api/stockinstall/android/versions/'
    // url = 'http://localhost:5088/stockinstall/android/versions'
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

        html_a = $("<a></a>").attr('href', '#').html("下载");
        var td3 = $("<td></td>").addClass('install').attr('file_name', file_name).html(html_a);
        var html_tr1 = $("<tr></tr>").append(td1, td2, td3);

        $('#versionList').find('tbody').append(html_tr1);
      }
    } else {
      
    }
  }
  $('body').on('click', '.install', function () {
    var apk_name = $(this).attr('file_name')
    window.location.href = APP_DOWN_URL + apk_name + '.apk'
    console.log('点击下载!')
  })
});
