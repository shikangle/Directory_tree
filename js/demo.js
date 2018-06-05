$(function() {
	//单击展开
	/*$("#menu .item_title").toggle(function(){
		$(this).next().slideDown();
	},function(){
		$(this).next().slideUp();
	});*/
	//juqery1.9  toggle()不支持
	$(".item_title").find("b").text("+");
	$("#menu .item_title").click(function(){
		//所有的二级UL列表隐藏
		/*$(".i_item").slideUp();
		if($(this).next().is(":visible")){     //is() 判断是否匹配  :visible是否可见
			//条件成立
			$(this).next().slideUp();
		}else {
			//条件不成立
			$(this).next().slideDown();
		}*/	
		$(".i_item").slideUp();
		$(".item_title").find("b").text("+");
		if($(this).next().is(":hidden")){     //is() 判断是否匹配  :visible是否可见
			$(this).next().slideDown();
			$(this).find("b").text("-");
		}
	});

})