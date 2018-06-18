		var lbt=null;
		var lbspeed=3000;
		var lbspd=1000;
		var lbindex=1;
		var lbul=$('.lunbo').find('ul');
		var lbbs=$('.lunbo').find('ol').find('li');
		var imgw=lbul.find('img').width();
		var imgl=lbul.find('li').size();
		function anniu(){
			lbbs.eq(lbindex-1).addClass('act').siblings().removeClass('act');
		}
		function tupian(){
			lbul.animate({left: -imgw*lbindex+'px'}, lbspd,
				function() {
				if(lbul.css('left')==-imgw*(imgl-1)+'px'){
					lbul.css('left',-imgw+'px');
				}else{
					if(lbul.css('left')=='0px'){
						lbul.css('left',-imgw*(imgl-2)+'px');
					}
				}
			});
			if(lbindex>imgl-2){ 
				lbindex=1;
			}
			if(lbindex<1){
				lbindex=imgl-2;
			}
		}
		function shang(){
			lbindex--;
			anniu();
			tupian();
		}
		function next(){
			lbindex++;
			tupian();
			anniu();
		}
		$('.prve').click(shang);
		$('.next').click(next);
		lbbs.click(function() {
			lbindex=$(this).index()+1;
			anniu();
			tupian();
		});
		$('.lunbo').mouseover(function() {
		clearInterval(lbt); // 鼠标划上，停止自动播放
	}).mouseout(function() {
		lbt=setInterval(next,lbspeed); // 鼠标离开，继续自动播放
	}).mouseout();