require.config({
	packages: [{
		name: 'echarts',
		location: 'js',
		main: 'echarts'
	}, {
		name: 'zrender',
		location: 'js',
		main: 'zrender'
	}]
});
var dchartleng,dchart1,dchart2,coverchart;
var lengpos='';
if(depth1name.length<20){
		lengpos='center';
};
if(depth1name.length>=20){
	lengpos='top';
};
var depleng = {
	legend: {
		data: depth1name,
		y:lengpos,
		x:'center'
	},
	grid: [{
		height: 100,
		top: '100%'
	}],
	toolbox: {
		y:lengpos,
		itemSize: 25,
		feature: {
			myTool1: {
				show: 1,
				title: '显示全部',
				icon: 'path://M350 607q42 0 93 -20.5t94 -49.5t79.5 -57.5t58.5 -49.5l21 -20l-22 -22q-15 -13 -57 -47t-81.5 -60t-91.5 -47.5t-94 -21.5q-53 0 -109 20.5t-96.5 49.5t-73 58t-49.5 49l-17 21q6 8 17.5 21t48.5 47t75 60t94.5 47.5t109.5 21.5zM350.5 287q50.5 0 87 35.5t36.5 87 t-36.5 87t-87 35.5t-87 -35.5t-36.5 -87t36.5 -87t87 -35.5zM351 481q30 0 51 -21t21 -50.5t-21 -50.5t-51 -21t-51 21t-21 50.5t21 50.5t51 21z',
				onclick: function(depleng) {
					legendt(dchartleng);
					legendt(dchart1);
					legendt(dchart2);
				}
			},
			myTool2: {
				show: 1,
				title: '取消全部',
				icon: 'path://M234 370l-88 -88q-38 25 -73 57t-51 51l-17 20q6 8 17.5 21t48.5 47t75 60t94.5 47.5t109.5 21.5q44 0 100 -23l-59 -59q-22 7 -41 7q-50 0 -86.5 -35.5t-36.5 -86.5q0 -20 7 -40zM543 532q39 -25 76.5 -55.5t57.5 -48.5l19 -18l-22 -22q-15 -13 -57 -47t-81.5 -60 t-91.5 -47.5t-94 -21.5q-52 0 -107 20l63 63q22 -8 44 -8q51 0 87.5 35.5t36.5 87.5q0 23 -9 45zM595 693l36 -36l-530 -529l-35 36z',
				onclick: function(depleng) {
					legendf(dchartleng);
					legendf(dchart1);
					legendf(dchart2);
				}
			}
		}

	},
	xAxis: [{
		type: "category",
		show: 0,
		data: ['chr1 ', 'chr2 ', 'chr3 ', 'chr4 ', 'chr5 ', 'chr6 ', 'chr7 ', 'chr8 ', 'chr9 ', 'chr10', 'chr11', 'chr12', 'chr13', 'chr14', 'chr15', 'chr16', 'chr17', 'chr18', 'chr19', 'chr20', 'chr21', 'chr22', 'chrX ', 'chrY ']
	}],
	yAxis: [{
		type: "value",
		show: 0
	}],
	color: ['#058DC7', '#DDDF00', '#50B432', '#ffc45c', '#e39475', '#24CBE5', '#64E572', '#b4f593', '#5aacdc', '#FF9655', '#6AF9C4', '#AF94FF', '#FFF263', '#05C766', '#10B6Ff', '#43a102', '#065fb9', '#a2b700', '#4acca0'],
	series: depth1
};


var dep1={
	tooltip: {
		trigger: 'axis',
		axisPointer: { // 坐标轴指示器，坐标轴触发有效
			type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		}
	},
	title: {
		show:1,
		itemSize: 15,
		left: 'center',
		subtext: '深度分布',
	},
	legend: {
		show:0,
		data: depth1name
	},
	toolbox: {
		show: 1,
		x: 'left',
		y: 'top',
		feature: {
			mark : {show: true},
            saveAsImage : {
            	show: true
            }
		}
	},
	xAxis: [{
		//name:'深度分布',
		type: 'value',
		axisLabel: {
			formatter: '{value}'
		}
	}],
	yAxis: [{
		type: 'value',
		scale: true,
		axisLabel: {
			formatter: function(value) {
				var v = parseFloat(value) * 100;
				return v.toString() + ' %'
			}
		},
		splitArea: {
			show: 1
		}
	}],
	color: ['#058DC7', '#DDDF00', '#50B432', '#ffc45c', '#e39475', '#24CBE5', '#64E572', '#b4f593', '#5aacdc', '#FF9655', '#6AF9C4', '#AF94FF', '#FFF263', '#05C766', '#10B6Ff', '#43a102', '#065fb9', '#a2b700', '#4acca0'],
	series: depth1
};


var dep2={
	tooltip: {
		trigger: 'axis',
		axisPointer: { // 坐标轴指示器，坐标轴触发有效
			type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		}
	},
	title: {
		itemSize: 20,
		left: 'center',
		subtext: '累积深度',
		show :1
	},
	legend: {
		data: depth2name,
		show:0
	},
	toolbox: {
		show: 1,
		feature: {
			mark : {show: true},
            saveAsImage : {show: true,
            }
		}
	},
	xAxis: [{
		//name: "累积深度",
		type: 'value',
		axisLabel: {
			formatter: '{value}'
		}
	}],
	yAxis: [{
		type: 'value',
		scale: true,
		axisLabel: {
			formatter: function(value) {
				var v = parseFloat(value) * 100;
				return v.toString() + ' %'
			}
		},
		splitArea: {
			show: 1
		}
	}],
	color: ['#058DC7', '#DDDF00', '#50B432', '#ffc45c', '#e39475', '#24CBE5', '#64E572', '#b4f593', '#5aacdc', '#FF9655', '#6AF9C4', '#AF94FF', '#FFF263', '#05C766', '#10B6Ff', '#43a102', '#065fb9', '#a2b700', '#4acca0'],
	series: depth2
};
if(depfuname.length<10){
	ypos='10%';
}
else if(depfuname.length<30){
	ypos='25%';
}
else if(depfuname.length<50){
	ypos='30%';
}
else if(depfuname.length<100){
	ypos='38%';
}
else{
	ypos='50%';
}
var cover1={
	tooltip: {
		trigger: 'axis',
		axisPointer: { // 坐标轴指示器，坐标轴触发有效
			type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		}
	},
	grid:{
		y:ypos
	},
	title: {
		left: 'center',
		text: '每个染色体的覆盖深度和覆盖率',
		show :0
	},
	legend: {
		data: depfuname,
		y:'top'
	},
	toolbox: {
		show: true,
		itemSize: 30,
		orient: 'vertical',
		x: 'right',
		y: 'center',
		feature: {
			mark: {
				show: true
			},
			dataView: {
				show: true,
				readOnly: false
			},
			restore: {
				show: true
			},
			saveAsImage: {
				show: true
			},
			myTool1: {
				show: 1,
				title: '显示全部',
				icon: 'path://M350 607q42 0 93 -20.5t94 -49.5t79.5 -57.5t58.5 -49.5l21 -20l-22 -22q-15 -13 -57 -47t-81.5 -60t-91.5 -47.5t-94 -21.5q-53 0 -109 20.5t-96.5 49.5t-73 58t-49.5 49l-17 21q6 8 17.5 21t48.5 47t75 60t94.5 47.5t109.5 21.5zM350.5 287q50.5 0 87 35.5t36.5 87 t-36.5 87t-87 35.5t-87 -35.5t-36.5 -87t36.5 -87t87 -35.5zM351 481q30 0 51 -21t21 -50.5t-21 -50.5t-51 -21t-51 21t-21 50.5t21 50.5t51 21z',
				onclick: function(cover1) {
					legendt(coverchart);
				}
			},
			myTool2: {
				show: 1,
				title: '取消全部',
				icon: 'path://M234 370l-88 -88q-38 25 -73 57t-51 51l-17 20q6 8 17.5 21t48.5 47t75 60t94.5 47.5t109.5 21.5q44 0 100 -23l-59 -59q-22 7 -41 7q-50 0 -86.5 -35.5t-36.5 -86.5q0 -20 7 -40zM543 532q39 -25 76.5 -55.5t57.5 -48.5l19 -18l-22 -22q-15 -13 -57 -47t-81.5 -60 t-91.5 -47.5t-94 -21.5q-52 0 -107 20l63 63q22 -8 44 -8q51 0 87.5 35.5t36.5 87.5q0 23 -9 45zM595 693l36 -36l-530 -529l-35 36z',
				onclick: function(cover1) {
					legendf(coverchart);
				}
			}
		}
	},
	dataZoom: [{
		show: true
	}],
	xAxis: [{
		type: 'category',
		data: ['chr1 ', 'chr2 ', 'chr3 ', 'chr4 ', 'chr5 ', 'chr6 ', 'chr7 ', 'chr8 ', 'chr9 ', 'chr10', 'chr11', 'chr12', 'chr13', 'chr14', 'chr15', 'chr16', 'chr17', 'chr18', 'chr19', 'chr20', 'chr21', 'chr22', 'chrX ', 'chrY ']
	}],
	yAxis: [{
			type: 'value',
			position: 'left',
			name: "测序深度",
			splitNumber: 5,
			axisLine: { // 轴线
				show: true,
			},
			splitArea: {
				show: !0
			},
			axisLabel: {
				show: true,
				interval: 'auto', // {number}
				formatter: '{value} x' // Template formatter!
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#483d8b',
					width: 1
				}
			}
		}, {
			type: 'value',
			name: "覆盖度",
			splitNumber: 5,
			axisLabel: {
				formatter: function(value) {
				var v = parseFloat(value) * 100;
				return v.toString() + ' %'
			}
			},
			splitLine: {
				show: false
			}
		}

	],
	color: ['#058DC7', '#DDDF00', '#50B432', '#ffc45c', '#e39475', '#24CBE5', '#64E572', '#b4f593', '#5aacdc', '#FF9655', '#6AF9C4', '#AF94FF', '#FFF263', '#05C766', '#10B6Ff', '#43a102', '#065fb9', '#a2b700', '#4acca0'],
	series: depfu
};
require(
	[
		'echarts'
	],
	function(ec) {
		
		if(document.getElementById("depth1")) {
			dchartleng= ec.init(document.getElementById("leng"));
			dchartleng.setOption(depleng);
			dchart1 = ec.init(document.getElementById("depth1"));
			dchart1.setOption(dep1);
			dchart2 = ec.init(document.getElementById("depth2"));
			dchart2.setOption(dep2);
			ec.connect([dchartleng,dchart1]);
			ec.connect([dchartleng,dchart2]);
			ec.connect([dchart1,dchart2]);
		}
		coverchart = ec.init(document.getElementById("cover"));
		coverchart.setOption(cover1);
	}
);