// show and properties
$(document).ready(function(){
    $(".btn-con").click(function(){
     $(".content-con").animate({
        left: '250px',
    opacity: '80px',
    height: '0px',
    width: '0px'
     });
    });
    $(".btn-con").click(function(){
        $(".hero").hide();
    });
    $(".btn-con").click(function(){
        $(".text").hide();
    });
    $(".btn-con").click(function(){
        $("img").hide();
    });
    $(".btn-con").click(function(){
        $(".log-con").show();
    });
});
$(document).ready(function(){
    $(".btn-con1").click(function(){
        $(".content-con").animate({
            right : '100%',
            opacity: '80px',
            height: '200px',
            width: '600px'
        });
    });
    $(".btn-con1").click(function(){
        $(".hero").show();
    });
    $(".btn-con1").click(function(){
        $(".text").show();
    });
    $(".btn-con1").click(function(){
        $("img").show();
    });
    $(".btn-con1").click(function(){
        $(".log-con").hide();
    });
});
// for stopping
$(document).ready(function(){
    $(".stop-btn").click(function(){
        $(".content-con").stop();
    });
});

// for buttons
$(document).ready(function(){
 $(".hide").click(function(){
    $(".toh").hide("slow", function(){
        alert("This toh is hidden now!");
    });
 });
 $(".show").click(function(){
    $(".toh").show("slow", function(){
        alert("this toh is shown now!");
    });
 });
});
$(document).ready(function(){
 $(".slide-btn").click(function(){
    $(".toggle-con").slideToggle();
 });
});
$(document).ready(function(){
    $(".fade-btn").click(function(){
        $(".slide-con").fadeToggle("slow");
    });
});

// add-------------
$(".slide-btn").click(function(){
    alert("welcome to my page! " + $("#test").text());
  });
  $(".fade-btn").click(function(){
    alert("You may move on to next page! " + $("#test").html());
  });

// giving css classes
$(document).ready(function(){
    $(".css-btn").click(function(){
      $(".fade-text").addClass("aqua");
      $(".text-slide").addClass("important");
      $(".important").css({"background-color": "blue", "font-size": "1.5em"});
    });
  });
  
//   giving css properties
  $(".css-text").css({"background-color": "yellow", "font-size": "100%"});

//   set properties-----------
$(document).ready(function(){
    $(".set-btn").click(function(){
        $(".css-classes").text("Get lost man!");
      });
      $(".set-btn1").click(function(){
        $(".fade-con").html("<b>Do you like this page!</b>");
      });
      $(".set-btn2").click(function(){
        $(".slide-con").text("Please dont forget to press like btn");
      });
});
// remove properties----
$(document).ready(function(){
    $(".remove-btn").click(function(){
      $("p").remove(".remove-text");
    });
  });
//   add properties----------
$(document).ready(function(){
    $(".add-btn1").click(function(){
      $(".remove-con").before("<b>Please dont try it at home its very risky!</b>");
    });
  
    $(".add-btn2").click(function(){
      $(".add-con").after("<i>Press the like button!</i>");
    });
  });

//   dimension properties-----------
$(document).ready(function(){
    $(".di-btn").click(function(){
      var txt = "";
      txt += "Width of div: " + $(".dimension-con").width() + "</br>";
      txt += "Height of div: " + $(".dimension-con").height() + "</br>";
      txt += "Outer width of div: " + $(".dimension-con").outerWidth() + "</br>";
      txt += "Outer height of div: " + $(".dimension-con").outerHeight();
      $(".dimension-con").html(txt);
    });
  });
