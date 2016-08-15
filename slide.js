$(document).ready(function(){
	var images = $(".img-box ul li img");//获取所有的图片
	var count  =  images.length;//获取图片的数量
	var i = 0;//当前需要显示的图片
	images.eq(i).show();
	/**添加数字上去**/
	for(var j = 0; j<count ;j++)
		$(".number-box ul").append("<li>"+(j+1)+"</li>");
	$(".number-box ul li").eq(i).css("background-color","gray");
	
	$(".number-box ul li").bind("click",function(){
		var index = this.innerText;
		i = index - 1;
		images.hide();
		$(".number-box ul li").css("background-color","rgba(0,0,0,0)");
		images.eq(i).show("slide",{direction:"left"},200);
		$(".number-box ul li").eq(i).css("background-color","gray");
		
		if(i>0)
			images.eq(i-1).show();
		else{
			images.eq(count-1).show();
			images.css("z-index","0");
			images.eq(count-1).css("z-index","-1");
			
		}
	});
	setInterval(function(){
		i = (i+1)%count;//防止参数溢出。
		
		images.eq(i).show("slide",{direction:"left"},500);//显示当前的图片
		
		//隐藏上上张图片
		if(i == 1){
			images.eq(count-1).hide();
		}else if(i==0){
			images.eq(count-2).hide();
		}else{
			images.eq(i-2).hide();
		}
		
		//将最后一张移到下层给第一张作为背景
		if(i == 0){
			images.eq(count-1).css("z-index","-1");
			images.eq(i).css("z-index","0");
		}else{
			images.css("z-index","0");
		}
		
		
		/**给数字一个选中的显示状态**/
		$(".number-box ul li").eq(i).css("background-color","gray");
		/*去掉上一个数字的选中状态*/
		if(i==0)
			$(".number-box ul li").eq(count-1).css("background-color","rgba(0,0,0,0)");
		else
			$(".number-box ul li").eq(i-1).css("background-color","rgba(0,0,0,0)");	
	},5000);
});