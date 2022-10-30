function add_card_ep(){
	
	if(jQuery('.room_no1').text() == 0){
		jQuery('#ep_price').css('display','block');
		jQuery('#select-room-classic').css('display','none');
		jQuery('#room_ep_detail').css('display','block');
		jQuery('.room_no1').text(1);
		var htmlLoad = `<div class="row row_id" id="room_no_det_1">
		                <div class="col-sm-4"><span class="meal_type_des">Room <b>1</b></span> </div>
		                <div class="col-sm-4">
		                    <label class="meal_type_des adults_label" style="width: 30%;">Adults</label>
		                   <select class="form-control meal_type_des adults_kids" name="adults" id="adults_1" style="width: 70%;">
		                       <option value="1">1</option>
		                       <option value="2" selected>2</option>
		                       <option value="3">3</option>
		                   </select>
		                </div>
		                <div class="col-sm-4">
		                    <label class="meal_type_des adults_label" style="width: 30%;">Kids</label>
		                   <select class="form-control meal_type_des adults_kids" name="kids" id="kids_1" style="width: 70%;">
		                        <option value="">Kids</option>
		                       <option value="1">1</option>
		                       <option value="2">2</option>
		                       <option value="3">3</option>
		                   </select>
		                </div>
		            </div>`;
		            id++;

      $('#room_ep_detail').append(htmlLoad);   
	}else{
		jQuery('#ep_price').css('display','block');
		jQuery('#select-room-classic').css('display','none');
		jQuery('#room_ep_detail').css('display','block');
	}
}
var id = 2;
function plusCounter(){
	//alert(jQuery('.room_no1').text());
	if(jQuery('.room_no1').text() >0){
		var id=jQuery('.room_no1').text();
		id++;
		jQuery('.room_no1').text(id);
		var htmlLoad = `<div class="row row_id" id="room_no_det_${id}">
		                <div class="col-sm-4"><span class="meal_type_des">Room <b>${id}</b></span> </div>
		                <div class="col-sm-4">
		                    <label class="meal_type_des adults_label" style="width: 30%;">Adults</label>
		                   <select class="form-control meal_type_des adults_kids" name="adults" id="adults_${id}" style="width: 70%;">
		                       <option value="1">1</option>
		                       <option value="2" selected>2</option>
		                       <option value="3">3</option>
		                   </select>
		                </div>
		                <div class="col-sm-4">
		                    <label class="meal_type_des adults_label" style="width: 30%;">Kids</label>
		                   <select class="form-control meal_type_des adults_kids" name="kids" id="kids_${id}" style="width: 70%;">
		                        <option value="">Kids</option>
		                       <option value="1">1</option>
		                       <option value="2">2</option>
		                       <option value="3">3</option>
		                   </select>
		                </div>
		            </div>`;
		            

      	$('#room_ep_detail').append(htmlLoad); 
	}
	    
}
function minusCounter(){
	var room_no=jQuery('.room_no1').text();
	jQuery('#room_no_det_'+room_no).remove();
	room_no--;
	jQuery('.room_no1').text(room_no);
	if(room_no == 0){
		jQuery('#ep_price').css('display','none');
		jQuery('#select-room-classic').css('display','block');
	}
}