$(document).on("click","#make-post",function(){
  var postInput = $("post-input");
  alert("hello");
})
alert("hello");
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
$(document).on("click","#addNote",function(){
  alert("New Note");
});
$(document).on("click",".promoted-content",function(){
  alert("View The note");
});
$(document).on("click", ".side-widget",function(){
  alert("loading the widget");
  alert($(this).attr("data-type"));
});
