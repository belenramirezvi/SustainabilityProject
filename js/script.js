var activeTab;

function write_navbar_pos() {
	var activeWidthNewAnimHeight = activeTab.innerHeight();
	var activeWidthNewAnimWidth = activeTab.innerWidth();
	var itemPosNewAnimTop = activeTab.position();
	var itemPosNewAnimLeft = activeTab.position();

	sessionStorage.setItem("pos_top", itemPosNewAnimTop.top);
	sessionStorage.setItem("pos_left", itemPosNewAnimLeft.left);
	sessionStorage.setItem("pos_height", activeWidthNewAnimHeight);
	sessionStorage.setItem("pos_width", activeWidthNewAnimWidth);
}

function load_navbar_pos() {
	var activeWidthNewAnimHeight = sessionStorage.getItem("pos_height") ?? 0;
	var activeWidthNewAnimWidth = sessionStorage.getItem("pos_width") ?? 0;
	var itemPosNewAnimTop = sessionStorage.getItem("pos_top") ?? 0;
	var itemPosNewAnimLeft = sessionStorage.getItem("pos_left") ?? 0;

	$(".hori-selector").css({
		"transition-duration": "0s",
		"top":itemPosNewAnimTop + "px", 
		"left":itemPosNewAnimLeft + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	
	$(".hori-selector").css({
		"transition-duration": "0.6s"
	});
}

// ---------Responsive-navbar-active-animation-----------
function test(){
	load_navbar_pos();
	var tabsNewAnim = $('#navbarSupportedContent');
	// var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	activeTab = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeTab.innerHeight();
	var activeWidthNewAnimWidth = activeTab.innerWidth();
	var itemPosNewAnimTop = activeTab.position();
	var itemPosNewAnimLeft = activeTab.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	write_navbar_pos();
	$("#navbarSupportedContent").on("click","li",function(e){
		write_navbar_pos();
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		activeTab = $(this);
		var activeWidthNewAnimHeight =activeTab.innerHeight();
		var activeWidthNewAnimWidth = activeTab.innerWidth();
		var itemPosNewAnimTop = activeTab.position();
		var itemPosNewAnimLeft = activeTab.position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});



// --------------add active class-on another-page move----------
jQuery(document).ready(function($){
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
});




// Add active class on another page linked
// ==========================================
// $(window).on('load',function () {
//     var current = location.pathname;
//     $('#navbarSupportedContent ul li a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.parent().addClass('active');
//             $this.parents('.menu-submenu').addClass('show-dropdown');
//             $this.parents('.menu-submenu').parent().addClass('active');
//         }else{
//             $this.parent().removeClass('active');
//         }
//     })
// });



//Dark mode
$('#customSwitch1').change(function(){   
    
    if ($(this).prop('checked'))
    {
        $('body').addClass('dark-mode');
    }
    else
    {
        $('body').removeClass('dark-mode');
    }
    
});
