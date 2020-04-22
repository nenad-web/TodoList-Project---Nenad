$("ul").on("click", "li", function(event){
    $(this).toggleClass("completed");
    event.stopPropagation();
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut();
    event.stopPropagation();
});

$("input").on("keypress", function(event){
    if(event.which === 13){
      var todo = $(this).val();
      $(this).val("");
      $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todo + "</li>"); 
    }   
});

$(".fa-plus-circle").click(function(){
    $("input").fadeToggle();
})
