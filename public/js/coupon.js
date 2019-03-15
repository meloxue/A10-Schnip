$(document).ready(function() {
  initializePage();
})

// initializing page
function initializePage() {
  console.log("init page");
  clearBar();
 }

// tracker variables for state of coupon jpgs
// - PRessed or UNpressed
var thighs_track = 'un';
var nuggets_track = 'un';
var delights_track = 'un';
var fillet_track = 'un';
var dried_track = 'un';
var sticks_track = 'un';
var corned_track = 'un';
var lean_track = 'un';
var shoulder_track = 'un';
var coke_track = 'un';
var tea_track = 'un';
var redbull_track = 'un';
var cheetos_track = 'un';
var candy_track = 'un';
var rice_cake_track = 'un';
var rice_track = 'un';
var soap_track = 'un';
var tylenol_track = 'un';

// image swap functions also add coupon barcodes to checkout json 
function thighsChange(){
	var image = document.getElementById('chicken_thighs');
	
	if(thighs_track=='un'){
		image.src='images/chicken_thighs_pr.jpg';
		thighs_track='pr';	
		var codebar= "./images/goldn.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");

	}else{
		image.src='images/chicken_thighs_un.jpg';
		thighs_track='un';
	}

    }


 function nuggetsChange(){
	var image = document.getElementById('chicken_nuggets');
	
	if(nuggets_track=='un'){
		image.src='images/chicken_nuggets_pr.jpg';
		nuggets_track='pr';
		var codebar= "./images/perdue.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");	

	}else{
		image.src='images/chicken_nuggets_un.jpg';
		nuggets_track='un';
	}
 }

 function delightsChange(){
	var image = document.getElementById('chicken_delights');
	
	if(delights_track=='un'){
		image.src='images/chicken_delights_pr.jpg';
		delights_track='pr';
		var codebar= "./images/jimmy.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");	

	}else{
		image.src='images/chicken_delights_un.jpg';
		delights_track='un';
	}
 }

 function filletChange(){
	var image = document.getElementById('fish_fillet');
	
	if(fillet_track=='un'){
		image.src='images/fish_fillet_pr.jpg';
		fillet_track='pr';	
		var codebar= "./images/salmon.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");

	}else{
		image.src='images/fish_fillet_un.jpg';
		fillet_track='un';
	}
 }

  function driedChange(){
	var image = document.getElementById('fish_dried');
	
	if(dried_track=='un'){
		image.src='images/fish_dried_pr.jpg';
		dried_track='pr';
		var codebar= "./images/dahfa.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");	

	}else{
		image.src='images/fish_dried_un.jpg';
		dried_track='un';
	}
 }
  function sticksChange(){
	var image = document.getElementById('fish_sticks');
	
	if(sticks_track=='un'){
		image.src='images/fish_sticks_pr.jpg';
		sticks_track='pr';	
		var codebar= "./images/gordons.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");

	}else{
		image.src='images/fish_sticks_un.jpg';
		sticks_track='un';
	}
 }

  function cornedChange(){
	var image = document.getElementById('beef_corned');
	
	if(corned_track=='un'){
		image.src='images/beef_corned_pr.jpg';
		corned_track='pr';	
		var codebar= "./images/buddig.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");

	}else{
		image.src='images/beef_corned_un.jpg';
		corned_track='un';
	}
 }

 function leanChange(){
	var image = document.getElementById('beef_lean');
	
	if(lean_track=='un'){
		image.src='images/beef_lean_pr.jpg';
		lean_track='pr';
		var codebar= "./images/ocado.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");	

	}else{
		image.src='images/beef_lean_un.jpg';
		lean_track='un';
	}
 }

 function shoulderChange(){
	var image = document.getElementById('beef_shoulder');
	
	if(shoulder_track=='un'){
		image.src='images/beef_shoulder_pr.jpg';
		shoulder_track='pr';
		var codebar= "./images/western.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");	

	}else{
		image.src='images/beef_shoulder_un.jpg';
		shoulder_track='un';
	}
 }

 function cokeChange(){
	var image = document.getElementById('beverage_coke');
	
	if(coke_track=='un'){
		image.src='images/beverage_coke_pr.jpg';
		coke_track='pr';
		var codebar= "./images/coka.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");	

	}else{
		image.src='images/beverage_coke_un.jpg';
		coke_track='un';
	}
 }

 function teaChange(){
	var image = document.getElementById('beverage_tea');
	
	if(tea_track=='un'){
		image.src='images/beverage_tea_pr.jpg';
		tea_track='pr';
		var codebar= "./images/lipton.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");	

	}else{
		image.src='images/beverage_tea_un.jpg';
		tea_track='un';
	}
 }

 function redbullChange(){
	var image = document.getElementById('beverage_redbull');
	
	if(redbull_track=='un'){
		image.src='images/beverage_redbull_pr.jpg';
		redbull_track='pr';
		var codebar= "./images/redbull.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");	

	}else{
		image.src='images/beverage_redbull_un.jpg';
		redbull_track='un';
	}
 }

 function cheetosChange(){
	var image = document.getElementById('snacks_cheetos');
	
	if(cheetos_track=='un'){
		image.src='images/snack_cheetos_pr.jpg';
		cheetos_track='pr';	
		var codebar= "./images/Flamin.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");

	}else{
		image.src='images/snack_cheetos_un.jpg';
		cheetos_track='un';
	}
 }

 function candyChange(){
	var image = document.getElementById('snacks_candy');
	
	if(candy_track=='un'){
		image.src='images/snack_candy_pr.jpg';
		candy_track='pr';
		var codebar= "./images/Trolli.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");	

	}else{
		image.src='images/snack_candy_un.jpg';
		candy_track='un';
	}
 }

 function riceCakeChange(){
	var image = document.getElementById('snacks_rice_cake');
	
	if(rice_cake_track=='un'){
		image.src='images/snack_rice_cake_pr.jpg';
		rice_cake_track='pr';	
		var codebar= "./images/riskakor.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");

	}else{
		image.src='images/snack_rice_cake_un.jpg';
		rice_cake_track='un';
	}
 }

 function riceChange(){
	var image = document.getElementById('other_rice');
	
	if(rice_track=='un'){
		image.src='images/other_rice_pr.jpg';
		rice_track='pr';	
		var codebar= "./images/cucoco.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");

	}else{
		image.src='images/other_rice_un.jpg';
		rice_track='un';
	}
 }

function soapChange(){
	var image = document.getElementById('other_soap');
	
	if(soap_track=='un'){
		image.src='images/other_soap_pr.jpg';
		soap_track='pr';	
		var codebar= "./images/lux.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");

	}else{
		image.src='images/other_soap_un.jpg';
		soap_track='un';
	}
 }

 function tylenolChange(){
	var image = document.getElementById('other_tylenol');
	
	if(tylenol_track=='un'){
		image.src='images/other_tylenol_pr.jpg';
		tylenol_track='pr';
		var codebar= "./images/tylenol.png";
		$.post('couponsRen', { codebar: codebar });
		console.log("posted");	

	}else{
		image.src='images/other_tylenol_un.jpg';
		tylenol_track='un';
	}
 }

// clears barcodes from checkout json
 function clearBar() {
 
    console.log("clear barcode");
    $('#clearbars').click(function(e) {
      //e.preventDefault();//basically prevent refreshing, once disable linked to new page
      console.log("clearing barcodes..")
      $.post('clearBarss');


    });
  }
