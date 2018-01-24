var users  =   ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"] ;   

$(document).ready(function(){
     
  for(var i = 0; i < users.length ; i++) {
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+users[i]+'?callback=?', function(data) { 
      if(!data.logo){
            data.logo = "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png";
          }
      if(data.stream){ 
        var cS = data.stream.channel; //User Channel
        $("#streamers").prepend("<div class=\"user onlineStream\"><img src="+cS.logo+"><a href="+cS.url+" target =\"blank\">"+cS.display_name +"</a><p>"+cS.status+"</p></div>");
      }else {
        nonStreaming = data._links.channel.substr(38); 
        $.getJSON('https://wind-bow.gomix.me/twitch-api/users/'+nonStreaming+'?callback=?',  function(data) {  
          if(!data.logo){
            data.logo = "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png";
          }
          $("#streamers").append("<div class=\"user offlineStream\"><img src="+data.logo+"><a href=https://go.twitch.tv/"+data.name+" target =\"blank\">"+data.display_name +"</a><p>offline</p></div>");
        });  
      } //else end       
      
    }); //end get jason    
  } //end forloop for enter 

  $("#online").on("click", function(){
    $(".offlineStream").hide();
    $(".onlineStream").hide();
    $(".onlineStream").slideDown("slow");
    $("#offline").removeClass("buttonActive");
    $("#all").removeClass("buttonActive");
    $(this).addClass("buttonActive");
  });
  
   $("#offline").on("click", function(){
    $(".onlineStream").hide();
    $(".offlineStream").hide();
    $(".offlineStream").slideDown("slow");
    $("#online").removeClass("buttonActive");
    $("#all").removeClass("buttonActive");
    $(this).addClass("buttonActive");
  });
  
   $("#all").on("click", function(){
    $(".offlineStream").hide();
    $(".onlineStream").hide();
    $(".offlineStream").slideDown("slow");
    $(".onlineStream").slideDown("slow");
    $("#offline").removeClass("buttonActive");
    $("#online").removeClass("buttonActive");
    $(this).addClass("buttonActive");
  });

}); //end of jquery