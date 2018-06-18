  var dir=0;
	var wfgd=$('.wfgd');
	var wful=wfgd.find('ul').eq(0);
	var wfb1=wfgd.find('span').eq(0);
	var wfb2=wfgd.find('span').eq(1);
	var wfulwidth=wful.width();
	// var wfgdwidth=wfgd.offsetWidth;
	var wfgdwidth=wfgd.width();
	// wful.style.width=wfulwidth*2+'px';
	wful.width(wfulwidth*2);
	// wful.innerHTML+=wful.innerHTML;
	wful.html(wful.html()+wful.html());
	// wfb1.onclick=function(){
	// 	dir=0;
	// }
	wfb1.click(function() {
		dir=0;
	});
	// wfb2.onclick=function(){
	// 	dir=1;
	// }
	wfb2.click(function() {
		dir=1;
	});
	function gundong() {
		if(dir){
				var wfulLeft=wful.position().left;
				if (wfulLeft>=0){
				wful.css('left', -wfulwidth);
				}else {
					wful.css('left', ++wfulLeft);
				}
		}else{
				var wfulLeft=wful.position().left;
				if (wfulLeft<=-wfulwidth){
				wful.css('left', 0);
				}else {
					wful.css('left', --wfulLeft);
				}
		}
	}
	var wft=null;
	wful.mouseover(function() {
		clearInterval(wft);
	});
	wful.mouseout(function() {
		wft=setInterval(gundong,1);
	});
	wful.mouseout();