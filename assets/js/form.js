/** form  */
var form = document.getElementById("formId");
function submitForm(event) {
  //Preventing page refresh
  event.preventDefault();
}

/** end form */

/** ================= counter ==================== */
let add = document.getElementById("increament");
let sub = document.getElementById("decreament");

let int = document.getElementById("number");
let integer = 0;

add.addEventListener("click", function () {
  if (integer < 10) {
    integer += 1;
    int.innerHTML = integer;
  }
});

sub.addEventListener("click", function () {
  if (integer > 0) {
    integer -= 1;
    int.innerHTML = integer;
  }
});
/** ================= counter ==================== */

/** =====================   filter Toggle  =============== */

function filterToggles() {
  var showHide = document.getElementById("filterToggle");
console.log(showHide)
  if (window.getComputedStyle(showHide).display === "none") {
    showHide.style.display = "block";
    document.querySelector(".bg_color").style.backgroundColor="green"
    document.querySelector(".bg_color").style.color="white"
  } else {
    showHide.style.display = "none";
    document.querySelector(".bg_color").style.backgroundColor="#F6F9F6"
    document.querySelector(".bg_color").style.color="black"
  }
}

/** =====================  end filter Toggle  =============== */

/** =====================  dropdown menu  =============== */
const selectBtn = document.getElementById("select-btn");
const text = document.getElementById("text");
const option = document.getElementsByClassName("option");

selectBtn.addEventListener("click", function () {
  selectBtn.classList.toggle("active");
});

for (options of option) {
  options.onclick = function () {
    text.innerHTML = this.textContent;
    selectBtn.classList.remove("active");
  };
}
/** =====================  end dropdown menu  =============== */

/** =====================  dropdown btn  =============== */
const selectMenuBtn = document.getElementById("dropdown-menu-btn");
const dropdownText = document.getElementById("dropdown-text");
const dropdownOption = document.getElementsByClassName("dropdown-option");

selectMenuBtn.addEventListener("click", function () {
  selectMenuBtn.classList.toggle("active");
});

for (dropdownOptions of dropdownOption) {
  dropdownOptions.onclick = function () {
    dropdownText.innerHTML = this.textContent;
    selectMenuBtn.classList.remove("active");
  };
}
/** =====================  end dropdown btn  =============== */

/** =====================  tab jquery  =============== */

jQuery(document).ready(function ($) {
  var tabwrapWidth = $(".tabs-wrapper").outerWidth();
  var totalWidth = 0;
  jQuery("ul li").each(function () {
    totalWidth += jQuery(this).outerWidth();
  });
  if (totalWidth > tabwrapWidth) {
    $(".scroller-btn").removeClass("inactive");
  } else {
    $(".scroller-btn").addClass("inactive");
  }

  if ($("#scroller").scrollLeft() == 0) {
    $(".scroller-btn.left").addClass("inactive");
  } else {
    $(".scroller-btn.left").removeClass("inactive");
  }
  var liWidth = $("#scroller li").outerWidth();
  var liCount = $("#scroller li").length;
  var scrollWidth = liWidth * liCount;

  $(".right").on("click", function () {
    $(".nav-tabs").animate({ scrollLeft: "+=200px" }, 300);
    console.log($("#scroller").scrollLeft() + " px");
  });

  $(".left").on("click", function () {
    $(".nav-tabs").animate({ scrollLeft: "-=200px" }, 300);
  });
  scrollerHide();

  function scrollerHide() {
    var scrollLeftPrev = 0;
    $("#scroller").scroll(function () {
      var $elem = $("#scroller");
      var newScrollLeft = $elem.scrollLeft(),
        width = $elem.outerWidth(),
        scrollWidth = $elem.get(0).scrollWidth;
      if (scrollWidth - newScrollLeft == width) {
        $(".right.scroller-btn").addClass("inactive");
      } else {
        $(".right.scroller-btn").removeClass("inactive");
      }
      if (newScrollLeft === 0) {
        $(".left.scroller-btn").addClass("inactive");
      } else {
        $(".left.scroller-btn").removeClass("inactive");
      }
      scrollLeftPrev = newScrollLeft;
    });
  }
});

/** =====================  end tab jquery  =============== * /

 
/** =====================  end tab jquery  =============== */

/** =====================  end tab jquery  =============== */
