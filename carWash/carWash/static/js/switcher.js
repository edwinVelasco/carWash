// --------------------------------------------------
// switcher.js by designesia 2013
// --------------------------------------------------

jQuery(document).ready(function() {
	
	
	jQuery(".bg1").click(function(){
<<<<<<< HEAD
		jQuery("#colors").attr("href", "{{STATIC_URL}}css/colors/aqua.css");
	});
	
	jQuery(".bg2").click(function(){
		jQuery("#colors").attr("href", "{{STATIC_URL}}css/colors/blue.css");
	});
	
	jQuery(".bg3").click(function(){
		jQuery("#colors").attr("href", "{{STATIC_URL}}css/colors/green.css");
	});
	
	jQuery(".bg4").click(function(){
		jQuery("#colors").attr("href", "{{STATIC_URL}}css/colors/grey.css");
	});
	
	jQuery(".bg5").click(function(){
		jQuery("#colors").attr("href", "{{STATIC_URL}}css/colors/orange.css");
	});
	
	jQuery(".bg6").click(function(){
		jQuery("#colors").attr("href", "{{STATIC_URL}}css/colors/pink.css");
	});
	
	jQuery(".bg7").click(function(){
		jQuery("#colors").attr("href", "{{STATIC_URL}}css/colors/purple.css");
	});
	
	jQuery(".bg8").click(function(){
		jQuery("#colors").attr("href", "{{STATIC_URL}}css/colors/red.css");
	});
	
	jQuery(".bg9").click(function(){
		jQuery("#colors").attr("href", "{{STATIC_URL}}css/colors/yellow.css");
	});
	
	jQuery(".bg10").click(function(){
		jQuery("#colors").attr("href", "{{STATIC_URL}}css/colors/lime.css");
=======
		jQuery("#colors").attr("href", "css/colors/aqua.css");
	});
	
	jQuery(".bg2").click(function(){
		jQuery("#colors").attr("href", "css/colors/blue.css");
	});
	
	jQuery(".bg3").click(function(){
		jQuery("#colors").attr("href", "css/colors/green.css");
	});
	
	jQuery(".bg4").click(function(){
		jQuery("#colors").attr("href", "css/colors/grey.css");
	});
	
	jQuery(".bg5").click(function(){
		jQuery("#colors").attr("href", "css/colors/orange.css");
	});
	
	jQuery(".bg6").click(function(){
		jQuery("#colors").attr("href", "css/colors/pink.css");
	});
	
	jQuery(".bg7").click(function(){
		jQuery("#colors").attr("href", "css/colors/purple.css");
	});
	
	jQuery(".bg8").click(function(){
		jQuery("#colors").attr("href", "css/colors/red.css");
	});
	
	jQuery(".bg9").click(function(){
		jQuery("#colors").attr("href", "css/colors/yellow.css");
	});
	
	jQuery(".bg10").click(function(){
		jQuery("#colors").attr("href", "css/colors/lime.css");
>>>>>>> e912dc8eacc59c842d552a57e73aa85ac3fd1dfd
	});
	
	
	
	jQuery(".custom-show").hide();
	
	jQuery(".custom-close").click(function(){
		jQuery(this).hide();
		jQuery(".custom-show").show();
		jQuery('#switcher').animate({'left': '+=115px'},'medium');
	});
  	

	jQuery(".custom-show").click(function(){
		jQuery(this).hide();
		jQuery(".custom-close").show();
		jQuery(this).parent().animate({'left': '-=115px'},'medium');
	});
	
	
	jQuery('#de-layout').on('change', function() {
		v = this.value
		if(v=='boxed'){
			jQuery("#wide").attr("href", "");
<<<<<<< HEAD
			jQuery("#boxed").attr("href", "{{STATIC_URL}}css/boxed.css");
		}else if(v=='wide'){
			jQuery("#boxed").attr("href", "");
			jQuery("#wide").attr("href", "{{STATIC_URL}}css/wide-screen.css");
=======
			jQuery("#boxed").attr("href", "css/boxed.css");
		}else if(v=='wide'){
			jQuery("#boxed").attr("href", "");
			jQuery("#wide").attr("href", "css/wide-screen.css");
>>>>>>> e912dc8eacc59c842d552a57e73aa85ac3fd1dfd
		}
	});
	
	jQuery('#de-pattern li').click(function(){
		n = jQuery('#de-layout').val();
		if(n=="boxed"){
			className = jQuery(this).attr('class');
			jQuery('body').removeClass();
			jQuery('body').addClass(className);
		}else{
			alert('Please select boxed layout first.');
		}
			
	});
});

