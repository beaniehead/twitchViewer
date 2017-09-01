//Search for a channel or stream - button to select either and then if it returns a results, show the status of that stream/channel.
var users = ['ESL_SC2', 'OgamingSC2', 'cretetion', 'freecodecamp', 'RobotCaleb', 'comster404'];
$(function() {
  $('.noneOnline').css('display', 'none');
  $('.noneOffline').css('display', 'none');
  $('.search').css('display', 'none');
  $('.searchResult').css('display', 'none');
  $.each(users, function(l, names) {
    $.ajax({
      url: 'https://wind-bow.glitch.me/twitch-api/channels/' + names,
      dataType: 'json',
      success: function(data2) {
        //var channelResults = JSON.stringify(data2);
        //var channelStatus = JSON.stringify(data2);
        var logo = data2.logo;
        var followers = data2.followers;
        var language = data2.language;
        var divClassLogo = '.twitchLogo' + l;
        var divClassSub = '.twitchSub' + l;
        var divClassTitle = '.twitchTitle' + l;
        var divClassInfo = '.twitchInfo' + l;
        var divClassTwitch = '.twitch' + l;
        var numbers = parseInt(l) + 1;
        if (data2.status === 404) {
          $(divClassLogo).html('<span class="fa-stack fa-2x noAccountSpan"><i class="fa fa-ban fa-stack-2x ban1"></i><i class="fa fa-play fa-stack-1x"></i></span>');
          $(divClassTitle).html('<a href="https://www.twitch.tv/' + names + '" target="_blank"><h2>' + names + '</h2></a>');
          $('.hr' + l).css('display', 'none');
          $(divClassInfo).html('<p><strong>No matching user</strong></p>');
          $(divClassTwitch).addClass('x404');
        } else {
          if (logo === undefined || logo === null) {
            $(divClassLogo).html('<i class="fa fa-question-circle-o noLogo" title="No Logo" alt="No Logo">');
          } else {
            $(divClassLogo).html('<img class="logo" src="' + logo + '"/>');
          }
          $(divClassSub).html('<span class="language"><em><strong>Language:</strong> ' + language + '</em></span><span class="followers"><em><strong>Followers:</strong> ' + followers + '</em<></span>');
          $.ajax({
            url: 'https://wind-bow.glitch.me/twitch-api/streams/' + names,
            dataType: 'json',
            success: function(data) {
              // var streamResults = JSON.stringify(data);
              var streamStream = JSON.stringify(data.stream);
              if (streamStream == 'null') {
                $(divClassTitle).html('<a href="https://www.twitch.tv/' + names + '" target="_blank"><h2>' + names + '</h2></a>');
                $(divClassInfo).html('<p><strong>Offline</strong></p>');
                $(divClassTwitch).addClass('offline');
              } else {
                $(divClassTwitch).addClass('online');
                var streamGame = data.stream.game;
                var streamStatus = data.stream.channel.status;
                $(divClassTitle).html('<a href="https://www.twitch.tv/' + names + '" target="_blank"><h2>' + names + '</h2></a>');
                $(divClassInfo).html('<strong>' + streamGame + '</strong>: ' + streamStatus);
              }
            }
          });
        }
      }
    });
  });
});
$('.ig1').click(function() {
  $('.offline').css('display', 'none');
  $('.online').css('display', '');
  $('.x404').css('display', 'none');
  $('.noneOffline').css('display', 'none');
  $('.search').css('display', 'none');
  if ($('.online').length < 1) {
    $('.noneOnline').css({
      'display': '',
      'z-index': '1'
    });
  }
});
$('.ig2').click(function() {
  $('.online').css('display', 'none');
  $('.offline').css('display', '');
  $('.x404').css('display', 'none');
  $('.noneOnline').css('display', 'none');
  $('.search').css('display', 'none');
  if ($('.offline').length < 1) {
    $('.noneOffline').css({
      'display': '',
      'z-index': '1'
    });
  }
});
$('.ig3').click(function() {
  $('.online').css('display', '');
  $('.offline').css('display', '');
  $('.x404').css('display', '');
  $('.noneOnline').css('display', 'none');
  $('.noneOffline').css('display', 'none');
  $('.search').css('display', 'none');
});
$('.ig4').click(function() {
  $('.online').css('display', 'none');
  $('.offline').css('display', 'none');
  $('.x404').css('display', 'none');
  $('.noneOnline').css('display', 'none');
  $('.noneOffline').css('display', 'none');
  $('.search').css({
    'display': '',
    'z-index': '1'
  });
  $('#searched').css('display', '');
});
$('.hoverd1').hover(function() {
  $('.onlinebtn').css({
    'width': '70px'
  });
}, function() {
  if ($('.green').is(':focus') === false && $('.hoverd1').attr('id') !== 'checked') {
    $('.onlinebtn').css({
      'width': '0'
    });
  }
});
$('.hoverd2').hover(function() {
  $('.offlinebtn').css({
    'width': '70px'
  }); 
}, function() {
  if ($('.red').is(':focus') === false && $('.hoverd2').attr('id') !== 'checked') {
    $('.offlinebtn').css({
      'width': '0'
    });
  }
});
$('.hoverd3').hover(function() {
  $('.allbtn').css({
    'width': '70px'
  }); 
}, function() {
  if ($('.blue').is(':focus') === false && $('.hoverd3').attr('id') !== 'checked') {
    $('.allbtn').css({
      'width': '0'
    });
  }
});
$('.hoverd4').hover(function() {
  $('.searchbtn').css({
    'width': '70px'
  });
}, function() {
  if ($('.orange').is(':focus') === false && $('.hoverd4').attr('id') !== 'checked') {
    $('.searchbtn').css({
      'width': '0'
    });
  }
});
//control click functions - just expands and minimizies buttons - doesn't change div display
$('.hoverd1').click(function() {
  $('.onlinebtn').css({
    'width': '70px'
  });
  $('.allbtn').css({
    'width': '0'
  });
  $('.offlinebtn').css({
    'width': '0'
  });
  $('.searchbtn').css({
    'width': '0'
  });
  $('.hoverd4').attr('id', 'x');
  $('.hoverd3').attr('id', 'x');
  $('.hoverd2').attr('id', 'x');
  $('.hoverd1').attr('id', 'checked'); 
});
$('.hoverd2').click(function() {
  $('.offlinebtn').css({
    'width': '70px'
  });
  $('.onlinebtn').css({
    'width': '0'
  });
  $('.allbtn').css({
    'width': '0'
  });
  $('.searchbtn').css({
    'width': '0'
  });
  $('.hoverd4').attr('id', 'x');
  $('.hoverd3').attr('id', 'x');
  $('.hoverd2').attr('id', 'checked');
  $('.hoverd1').attr('id', 'x');
});
$('.hoverd3').click(function() {
  $('.allbtn').css({
    'width': '70px'
  });
  $('.onlinebtn').css({
    'width': '0'
  });
  $('.offlinebtn').css({
    'width': '0'
  });
  $('.searchbtn').css({
    'width': '0'
  });
  $('.hoverd4').attr('id', 'x');
  $('.hoverd3').attr('id', 'checked');
  $('.hoverd2').attr('id', 'x');
  $('.hoverd1').attr('id', 'x'); 
});
$('.hoverd4').click(function() {
  $('.searchbtn').css({
    'width': '70px'
  });
  $('.onlinebtn').css({
    'width': '0'
  });
  $('.offlinebtn').css({
    'width': '0'
  });
  $('.allbtn').css({
    'width': '0'
  });
  $('.hoverd4').attr('id', 'checked');
  $('.hoverd3').attr('id', 'x');
  $('.hoverd2').attr('id', 'x');
  $('.hoverd1').attr('id', 'x'); 
});
$('.searchBtn').on('click', function(twitchUserSearch) {
  var searchCheck = false;
  var searchitem = $('.twitchsearch').val();
  console.log(searchitem);
  //don't edit above
  if (searchitem === '') {
    searchitem = $('.twitchsearch').attr('placeholder', 'Please enter a username');
    searchCheck = true;
    $('.searchResult').css('display', 'none');
  }
  for (i = 0; i < users.length; i++) {
    if ((searchitem.toLowerCase()) == (users[i].toLowerCase())) {
      alert("This user's stream information is already displayed as a default user.");
      i = users.length;
      searchCheck = true;
      $('.searchResult').css('display', 'none');
    }
  }
  if (searchCheck === false) {
    $(function() {
      $.ajax({
        url: 'https://wind-bow.glitch.me/twitch-api/channels/' + searchitem,
        dataType: 'json',
        success: function(data3) {
          //here
          //var channelResults = JSON.stringify(data3);
          //var channelStatus = JSON.stringify(data3);
          var logo = data3.logo;
          var followers = data3.followers;
          var language = data3.language;
          var divClassLogo = '.twitchLogoSearch';
          console.log(logo);
          var divClassSub = '.twitchSubSearch';
          var divClassTitle = '.twitchTitleSearch';
          var divClassInfo = '.twitchInfoSearch';
          var divClassTwitch = '.searchResult';
          if (data3.status === 404) {
            $(divClassLogo).html('<span class="fa-stack fa-2x noAccountSpan"><i class="fa fa-ban fa-stack-2x ban2"></i><i class="fa fa-play fa-stack-1x ban3"></i></span>');
            $(divClassTitle).html('Search Results: <a href="https://www.twitch.tv/' + searchitem + '" target="_blank"><h2>' + searchitem + '</h2></a>');
            $('.hrSearch').css('display', 'none');
            $(divClassInfo).html('<p><strong>No matching user</strong></p>');
            $(divClassTwitch).addClass('x404');
            $(divClassTwitch).removeClass('offline');
            $(divClassTwitch).removeClass('online');
            $(divClassTwitch).attr('id', 'searched');
            $(divClassSub).css('display', 'none');
          } else {
            if (logo === undefined || logo === null) {
              $(divClassLogo).html('<i class="fa fa-question-circle-o noLogo" title="No Logo" alt="No Logo">');
            } else {
              $(divClassLogo).html('<img class="logoS" src="' + logo + '"/>');
            }
            $(divClassSub).css('display', '');
            $(divClassSub).html('<span class="language"><em><strong>Language:</strong> ' + language + '</em></span><span class="followers"><em><strong>Followers:</strong> ' + followers + '</em<></span>');
            $.ajax({
              url: 'https://wind-bow.glitch.me/twitch-api/streams/' + searchitem,
              dataType: 'json',
              success: function(data4) {
                //var streamResults = JSON.stringify(data);
                var streamStream = JSON.stringify(data4.stream);
                if (streamStream == 'null') {
                  $(divClassTitle).html('<h2>Search Result:<hr class="hrShort"/></h2>Search Results: <a href="https://www.twitch.tv/' + searchitem + '" target="_blank"><h2>' + searchitem + '</h2></a>');
                  $(divClassInfo).html('<p><strong>Offline</strong></p>');
                  $(divClassTwitch).addClass('offline');
                  $(divClassTwitch).removeClass('online');
                  $(divClassTwitch).removeClass('x404');
                  $(divClassTwitch).attr('id', 'searched');
                  $('.hrSearch').css('display', '');
                } else {
                  $(divClassTwitch).removeClass('offline');
                  $(divClassTwitch).removeClass('x404');
                  $(divClassTwitch).addClass('online');
                  $(divClassTwitch).attr('id', 'searched');
                  $('.hrSearch').css('display', '');
                  var streamGame = data4.stream.game;
                  var streamStatus = data4.stream.channel.status;
                  $(divClassTitle).html('<h2>Search Result:<hr class="hrShort"/></h2><a href="https://www.twitch.tv/' + searchitem + '" target="_blank"><h2>' + searchitem + '</h2></a>');
                  $(divClassInfo).html('<strong>' + streamGame + '</strong>: ' + streamStatus);
                }
              }
            });
          }
        }
      });
    });
    //don't edit below
    $('.searchResult').css({
      'display': '',
      'z-index': '1'
    });
  }
});