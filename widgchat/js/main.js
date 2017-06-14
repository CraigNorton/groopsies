$(document).on("click","#make-post",function(){
  var postInput = $("post-input");
  alert("hello");
})
$(document).on("click","#submit-chat-form",function(){
  alert("hello");
  var profilePic = $("#chat-profile-input").val();
  var name = $("#chat-name-input").val();
  var bio = $("#chat-bio-input").val();
  var privacy = $("#chat-privacy-input").val();
  var purpose = $("#chat-pu-input").val();
  var posting = $("#chat-posting-input").val();
  alert("goodbye");
});
var yearString = "<option>Year</option>";
for(var i = 1950; i <= 2025; i++){
  yearString += "<option value='" + i + "'>" + i + "</option>";
}
$("#DOBYear").html(yearString);
$('body').live('swipeleft swiperight',function(event){
        if (event.type == "swiperight") {
           alert("swipped right side");
        }
        if (event.type == "swipeleft") {
            alert("swipped left side");
        }
        event.preventDefault();
    });
