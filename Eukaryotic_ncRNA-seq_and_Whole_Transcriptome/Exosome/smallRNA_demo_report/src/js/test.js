
    $(function() {
    var b, c, d, e, f;
    if(document.getElementById("QMh")){
    qmh=echarts.init(document.getElementById("QMh")), 
    qmh.setOption({
        title: {
            text: "Classification of ncRNA, total reads"
        },
        toolbox: {
            show: 1,
            itemSize:30,
            feature: {
                saveAsImage: {
                    show: 1
                }
            },
            iconStyle:{emphasis:{borderColor:'#0f5b7c'}}
        },
        color:['#036EB8', '#539A34', '#666464', '#1FA1A0', '#9F3075', '#BC5C1D', '#EEAA1E', '#D1282C', '#4F3D87','#007431','#004077','#632C16'],
        tooltip : {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },series:[{type:'pie',label:{normal:{textStyle:{color:'#000000'},formatter: "{b} : {c} ({d}%)"}},radius:'60%',data:nbdata2}]
    })
    ;a = document.getElementById("qmname"), 
    a.onchange = function() {
        var c,b = a.options[document.getElementById("qmname").options.selectedIndex].value;
        pqm=document.getElementById("pqm"),
        nqm=document.getElementById("nqm"),
        nbdata2 = datanow2[b], qmh.setOption({series:[{type:'pie',data:nbdata2}]});
    }, $("#pqm").click(function() {
        a.selectedIndex = a.selectedIndex - 1, nqm.style.visibility="visible",-1 == a.selectedIndex && (a.selectedIndex = $("#qmname").find("option:first").index(),pqm.style.visibility="hidden"), a.onchange();
    }), $("#nqm").click(function() {
        a.selectedIndex = a.selectedIndex + 1,  pqm.style.visibility="visible",-1 == a.selectedIndex && (a.selectedIndex = $("#qmname").find("option:last").index(),nqm.style.visibility="hidden"), a.onchange();
})};  

if(document.getElementById("ERm")){
    erm=echarts.init(document.getElementById("ERm")),
    erm.setOption({
        title: {
            text: "Error rate distribution along reads"
        },
        color: ['#036EB8', '#539A34', '#666464', '#1FA1A0', '#9F3075', '#BC5C1D', '#EEAA1E', '#D1282C', '#4F3D87', '#007431', '#004077', '#632C16'],
        tooltip:{show:1,trigger:'axis',formatter: "{b} : {c}"},
        toolbox: {
            show: 1,
            itemSize:30,
            feature: {
                saveAsImage: {
                    show: 1
                }
            },
            iconStyle:{emphasis:{borderColor:'#0f5b7c'}}
        },
        xAxis:[
        {
            type:'category',
            data:num,
            axisLabel:{interval:49}
        }
        ],yAxis:[{type:'value',axisLabel: {formatter: "{value}%"}}],series:[{type:'line',areaStyle:{normal:{}},data:ermdata}]
    }),b = document.getElementById("ermname"), 
    b.onchange = function() {
        ermnow = b.options[document.getElementById("ermname").options.selectedIndex].value, 
        perm=document.getElementById("perm"),
        nerm=document.getElementById("nerm"),
        ermdata = ermd[ermnow], erm.setOption({series:[{data:ermdata}]})
    };$("#perm").click(function() {
        b.selectedIndex = b.selectedIndex - 1, nerm.style.visibility="visible",-1 == b.selectedIndex && (b.selectedIndex = $("#ermname").find("option:first").index(),perm.style.visibility="hidden"), b.onchange();
    }), $("#nerm").click(function() {
        b.selectedIndex = b.selectedIndex + 1, perm.style.visibility="visible",-1 == b.selectedIndex && (b.selectedIndex = $("#ermname").find("option:last").index(),nerm.style.visibility="hidden"), b.onchange();
    })};

    if(document.getElementById("GCz")){
    gcz=echarts.init(document.getElementById("GCz")),
    gcz.setOption({
        color: ['#036EB8', '#539A34', '#666464', '#1FA1A0', '#9F3075', '#BC5C1D', '#EEAA1E', '#D1282C', '#4F3D87', '#007431', '#004077', '#632C16'],
        title: {
            text: "Bases content along reads"
        },
        tooltip:{show:1,trigger:'axis',formatter: "{b0}<br />{a0}: {c0}<br />{a1}: {c1}<br />{a2}: {c2}<br />{a3}: {c3}<br />{a4}: {c4}"},
        toolbox: {
            show: 1,
            itemSize:30,
            feature: {
                saveAsImage: {
                    show: 1
                }
            },
            iconStyle:{emphasis:{borderColor:'#0f5b7c'}}
        },xAxis:[{
            type:'category',
            data:num,
            axisLabel:{interval:49}
        }
        ],yAxis:[{type:'value',min:0,max:50}],
        legend:{data:['A','T','G','C','N'],top:'bottom'},series:gczdata1
        })
    ;c = document.getElementById("gczname"), 
    c.onchange = function() {
        gcznow = c.options[document.getElementById("gczname").options.selectedIndex].value, 
        pgcz=document.getElementById("pgcz"),
        ngcz=document.getElementById("ngcz"),
        gczdata1 = gczd1[gcznow], 
        gcz.setOption({series:gczdata1})
    };

     $("#pgcz").click(function() {
        c.selectedIndex = c.selectedIndex - 1, ngcz.style.visibility="visible",-1 == c.selectedIndex && (c.selectedIndex = $("#gczname").find("option:first").index(),pgcz.style.visibility="hidden"), c.onchange();
    }), $("#ngcz").click(function() {
        c.selectedIndex = c.selectedIndex + 1, pgcz.style.visibility="visible",-1 == c.selectedIndex && (c.selectedIndex = $("#gczname").find("option:last").index(),ngcz.style.visibility="hidden"), c.onchange();
    })}; 

    if (document.getElementById("Mapping_region")) {
        mpr = echarts.init(document.getElementById("Mapping_region")),
            mpr.setOption({
                title: {
                    text: "Mapping Region of Clean Reads"
                },
                toolbox: {
                    show: 1,
                    itemSize: 30,
                    feature: {
                        saveAsImage: {
                            show: 1
                        }
                    },
                    iconStyle: { emphasis: { borderColor: '#0f5b7c' } }
                },
                color: ['#036EB8', '#539A34', '#666464', '#1FA1A0', '#9F3075', '#BC5C1D', '#EEAA1E', '#D1282C', '#4F3D87', '#007431', '#004077', '#632C16'],
                tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)"
                }, series: [{ type: 'pie', label: { normal: { textStyle: { color: '#000000' }, formatter: "{b} : {c} ({d}%)" } }, radius: '60%', data: reg_show }]
            })
            ; d = document.getElementById("mpname"),
                d.onchange = function () {
                    var c, b = d.options[document.getElementById("mpname").options.selectedIndex].value;
                    rqm = document.getElementById("rqm"),
                        mqm = document.getElementById("mqm"),
                        reg_show = region_data[b], mpr.setOption({ series: [{ type: 'pie', data: reg_show }] });
                }, $("#rqm").click(function () {
                    d.selectedIndex = d.selectedIndex - 1, mqm.style.visibility = "visible", -1 == d.selectedIndex && (d.selectedIndex = $("#mpname").find("option:first").index(), rqm.style.visibility = "hidden"), d.onchange();
                }), $("#mqm").click(function () {
                    d.selectedIndex = d.selectedIndex + 1, rqm.style.visibility = "visible", -1 == d.selectedIndex && (d.selectedIndex = $("#mpname").find("option:last").index(), mqm.style.visibility = "hidden"), d.onchange();
                })
    };  

    if (document.getElementById("ace049deb7774aa09236e318bba70868")) {
                var chart_ace049deb7774aa09236e318bba70868 = echarts.init(
            document.getElementById('ace049deb7774aa09236e318bba70868'), 'white', {renderer: 'canvas'});
        var option_ace049deb7774aa09236e318bba70868 = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "color": [ "#036EB8","#539A34","#666464","#1FA1A0","#9F3075","#BC5C1D","#EEAA1E","#D1282C","#4F3D87","#007431","#004077","#632C16",
    ],
    "series": [
        {
            "type": "pie",
            "name": "lncRNA_type",
            "clockwise": true,
            "data": [
                {
                    "name": "lincRNA ",
                    "value": ace049deb7774aa09236e318bba70868_lincRNA
                },
                {
                    "name": "antisense ",
                    "value": ace049deb7774aa09236e318bba70868_antisense
                },
                {
                    "name": "sense overlapping ",
                    "value": ace049deb7774aa09236e318bba70868_sense_overlapping
                },
                {
                    "name": "sense intronic ",
                    "value": ace049deb7774aa09236e318bba70868_sense_intronic
                }
            ],
            "radius": [
                "0%",
                "75%"
            ],
            "center": [
                "50%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "formatter": "{b}: {c} ({d}%)"
            },
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "formatter": "{a} <br/>{b}: {c} ({d}%)",
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }
    ],
    "legend": [
        {
            "data": [
                "lincRNA ",
                "antisense ",
                "sense overlapping ",
                "sense intronic "
            ],
            "selected": {},
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }
    ],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0
    },
    "title": [
        {
            "text": "lncRNA type"
        }
    ],
    "toolbox": {
        "show": true,
        "orient": "horizontal",
        "itemSize": 15,
        "itemGap": 10,
        "left": "80%",
        "feature": {
            "saveAsImage": {
                "show": true,
                "title": "save as image",
                "type": "png"
            },
            "restore": {
                "show": true,
                "title": "restore"
            },
            "dataView": {
                "show": true,
                "title": "data view",
                "readOnly": false
            },
            
        }
    }
};
        chart_ace049deb7774aa09236e318bba70868.setOption(option_ace049deb7774aa09236e318bba70868);
    }

    if (document.getElementById("efed172fcf7c4ca2859c673994eeaaec")) {
    var chart_efed172fcf7c4ca2859c673994eeaaec = echarts.init(
        document.getElementById('efed172fcf7c4ca2859c673994eeaaec'), 'white', { renderer: 'canvas' });
    var option_efed172fcf7c4ca2859c673994eeaaec = {
        "animation": true,
        "animationThreshold": 2000,
        "animationDuration": 1000,
        "animationEasing": "cubicOut",
        "animationDelay": 0,
        "animationDurationUpdate": 300,
        "animationEasingUpdate": "cubicOut",
        "animationDelayUpdate": 0,
        "color": ["#036EB8", "#539A34", "#666464", "#1FA1A0", "#9F3075", "#BC5C1D", "#EEAA1E", "#D1282C", "#4F3D87", "#007431", "#004077", "#632C16",
            "#c23531", "#2f4554", "#61a0a8", "#d48265", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3", "#f05b72", "#ef5b9c",
            "#f47920", "#905a3d", "#fab27b", "#2a5caa", "#444693", "#726930", "#b2d235", "#6d8346", "#ac6767", "#1d953f", "#6950a1", "#918597"
        ],
        "series": efed172fcf7c4ca2859c673994eeaaec_data,
        "legend": [
            {
                "data": [
                    "exon",
                    "intron",
                    "intergenic"
                ],
                "selected": {
                    "exon": true,
                    "intron": true,
                    "intergenic": true
                },
                "show": true,
                "padding": 5,
                "itemGap": 10,
                "itemWidth": 25,
                "itemHeight": 14
            }
        ],
        "tooltip": {
            "show": true,
            "trigger": "item",
            "triggerOn": "mousemove|click",
            "axisPointer": {
                "type": "line"
            },
            "textStyle": {
                "fontSize": 14
            },
            "borderWidth": 0
        },

        "toolbox": {
            "show": true,
            "orient": "horizontal",
            "itemSize": 15,
            "itemGap": 10,
            "left": "80%",
            "feature": {
                "saveAsImage": {
                    "show": true,
                    "title": "save as image",
                    "type": "png"
                },
                "restore": {
                    "show": true,
                    "title": "restore"
                },
                "dataView": {
                    "show": true,
                    "title": "data view",
                    "readOnly": false
                },

            }
        },


        "xAxis": [
            {
                "show": true,
                "scale": false,
                "nameLocation": "end",
                "nameGap": 15,
                "gridIndex": 0,
                "inverse": false,
                "offset": 0,
                "splitNumber": 5,
                "minInterval": 0,
                "splitLine": {
                    "show": false,
                    "lineStyle": {
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    }
                },
                "data": names
            }
        ],
        "yAxis": [
            {
                "show": true,
                "scale": false,
                "nameLocation": "end",
                "nameGap": 15,
                "gridIndex": 0,
                "inverse": false,
                "offset": 0,
                "splitNumber": 5,
                "minInterval": 0,
                "splitLine": {
                    "show": false,
                    "lineStyle": {
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    }
                }
            }
        ],
        "title": [
            {
                "text": "circRNA_from"
            }
        ],
        "dataZoom": {
            "show": true,
            "type": "slider",
            "realtime": true,
            "start": 20,
            "end": 80,
            "orient": "horizontal",
            "zoomLock": false
        }
    };
    chart_efed172fcf7c4ca2859c673994eeaaec.setOption(option_efed172fcf7c4ca2859c673994eeaaec);
}

    if (document.getElementById("VOLGENE")) {
        volg = echarts.init(document.getElementById("VOLGENE")),
            volg.setOption({
                color: [function (params) { if (params.value[0] > 0 && params.value[1] > 1.3) { return '#FF0033'; } else if (params.value[0] < 0 && params.value[1] > 1.3) { return '#009966'; } return '#0066CC'; }],
                title: {
                    text: "differentially expressed genes"
                },
                tooltip: {
                    show: true,
                    trigger: "item",
                    triggerOn: "mousemove|click",
                    axisPointer: {
                        type: "line"
                    },
                    formatter: function (params) { if (params.value[0] > 0 && params.value[1] > 1.3) { return 'UP:<br>id: ' + (params.value[2] + '<br>log2Fc: ' + params.value[0] + '<br>-log10(padj): ' + params.value[1]); } else if (params.value[0] < 0 && params.value[1] > 1.3) { return 'DOWN:<br>id: ' + (params.value[2] + '<br>log2Fc: ' + params.value[0] + '<br>-log10(padj): ' + params.value[1]); } return 'NULL:<br>id: ' + (params.value[2] + '<br>log2Fc: ' + params.value[0] + '<br>-log10(padj): ' + params.value[1]); },
                                        textStyle: {
                        fontSize: 14
                    },
                    itemStyle: {
                        color: "#FF0033"  //function (params) { if (params.value[0] > 0 && params.value[1] > 1.3) { return '#FF0033'; } else if (params.value[0] < 0 && params.value[1] > 1.3) { return '#009966'; } return '#0066CC';}
                    },
                    borderWidth: 0
                },                
                toolbox: {
                    show: 1,
                    itemSize: 30,
                    feature: {
                        saveAsImage: {
                            show: 1
                        }
                    },
                    iconStyle: { emphasis: { borderColor: '#0f5b7c' } }
                },
                xAxis: [
                    {
                        "type": "value",
                        "show": true,
                        "scale": false,
                        "nameLocation": "end",
                        "nameGap": 15,
                        "gridIndex": 0,
                        "axisTick": {
                            "show": true,
                            "alignWithLabel": false,
                            "inside": false
                        },
                        "inverse": false,
                        "offset": 0,
                        "splitNumber": 5,
                        "minInterval": 0,
                        "splitLine": {
                            "show": true,
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            }
                        },
                    }
                ],                 
                yAxis: [
                    {
                        "type": "value",
                        "show": true,
                        "scale": false,
                        "nameLocation": "end",
                        "nameGap": 15,
                        "gridIndex": 0,
                        "axisTick": {
                            "show": false,
                            "alignWithLabel": false,
                            "inside": false
                        },
                        "inverse": false,
                        "offset": 0,
                        "splitNumber": 5,
                        "minInterval": 0,
                        "splitLine": {
                            "show": true,
                            "lineStyle": {
                                "show": true,
                                "width": 1,
                                "opacity": 1,
                                "curveness": 0,
                                "type": "solid"
                            }
                        }
                    }
                ], 
                series: [{symbolSize: 5.5,
                    type: 'scatter', data: volgenes, markLine: {label: { show: false }, symbol: ['none', 'none'], data: [{lineStyle: {color: "#FF8C00",},yAxis: 1.3 }]},}] 
            }), e = document.getElementById("volgname"),
            e.onchange = function () {
                volgnow = e.options[document.getElementById("volgname").options.selectedIndex].value,
                    pvolg = document.getElementById("pvolg"),
                    nvolg = document.getElementById("nvolg"),
                    volgenes = volgene_data[volgnow], volg.setOption({ series: [{ data: volgenes }] })
            }; $("#pvolg").click(function () {
                e.selectedIndex = e.selectedIndex - 1, nvolg.style.visibility = "visible", -1 == e.selectedIndex && (e.selectedIndex = $("#volgname").find("option:first").index(), pvolg.style.visibility = "hidden"), e.onchange();
            }), $("#nvolg").click(function () {
                e.selectedIndex = e.selectedIndex + 1, pvolg.style.visibility = "visible", -1 == e.selectedIndex && (e.selectedIndex = $("#volgname").find("option:last").index(), nvolg.style.visibility = "hidden"), e.onchange();
            })
    };


    if (document.getElementById("f262c3a202a14807942b12e3a522ff6f")) {
        var chart_f262c3a202a14807942b12e3a522ff6f = echarts.init(
            document.getElementById('f262c3a202a14807942b12e3a522ff6f'), 'white', { renderer: 'canvas' });
        var option_f262c3a202a14807942b12e3a522ff6f = {
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ],
            "series": [
                {
                    "type": "heatmap",
                    "name": "series0",
                    "data": heatmap_gene,
                    "label": {
                        "show": true,
                        "position": "top",
                        "margin": 8
                    }
                }
            ],
            "legend": [
                {
                    "data": [
                        "series0"
                    ],
                    "selected": {
                        "series0": true
                    },
                    "show": true,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "tooltip": {
                "formatter": function (params) { return 'sample: ' + params.value[0] + '<br>id: ' + params.value[1] + '<br>log10(FPKM+1): ' + params.value[2] },
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "textStyle": {
                    "fontSize": 12
                },
                "borderWidth": 0
            },
            "xAxis": [
                {
                    "axisLabel": {
                        interval: 0,
                        textStyle: {
                            fontSize: 6
                        },
                        rotate: 45,
                    },
                    "textStyle": { "fontSize": 4 },
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": false,
                        "lineStyle": {
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": names
                }
            ],
            "yAxis": [
                {
                    "axisLabel": {
                        interval: 0,
                        textStyle: {
                            fontSize: 6
                        },
                    },
                    textStyle: { fontSize: 4 },
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": false,
                        "lineStyle": {
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": cluster_gene
                }
            ],
            "grid": {
                left: 80
            },
            "title": [
                {
                    "text": "HeatMap"
                }
            ],
            "visualMap": {
                "show": true,
                "type": "continuous",
                "min": 0,
                "max": 3,
                "inRange": {
                    "color": [
                        "#2828FF",
                        "#FFFFFF",
			"#FF7575",
                    ],
                },
                "calculable": true,
                "splitNumber": 5,
                "orient": "vertical",
                "showLabel": true,
                "itemWidth": 10,
                "itemHeight": 70,
                "right": "1%",
                "top": "5%",

            }
        };
        chart_f262c3a202a14807942b12e3a522ff6f.setOption(option_f262c3a202a14807942b12e3a522ff6f);

    };
    
    if (document.getElementById("circRNA_heatmap")) {
        var chart_circRNA_heatmap = echarts.init(
            document.getElementById('circRNA_heatmap'), 'white', { renderer: 'canvas' });
        var option_circRNA_heatmap = {
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ],
            "series": [
                {
                    "type": "heatmap",
                    "name": "series0",
                    "data": cluster_circs,
                    "label": {
                        "show": true,
                        "position": "top",
                        "margin": 8
                    }
                }
            ],
            "legend": [
                {
                    "data": [
                        "series0"
                    ],
                    "selected": {
                        "series0": true
                    },
                    "show": true,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "tooltip": {
                "formatter": function (params) { return 'sample: ' + params.value[0] + '<br>id: ' + params.value[1] + '<br>log10(TPM+1): ' + params.value[2] },
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "textStyle": {
                    "fontSize": 12
                },
                "borderWidth": 0
            },
            "xAxis": [
                {
                    "axisLabel": {
                        interval: 0,
                        textStyle: {
                            fontSize: 6
                        },
                        rotate: 45,
                    },
                    "textStyle": { "fontSize": 4 },
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": false,
                        "lineStyle": {
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": names
                }
            ],
            "yAxis": [
                {
                    "axisLabel": {
                        interval: 0,
                        textStyle: {
                            fontSize: 6
                        },
                    },
                    textStyle: { fontSize: 4 },
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": false,
                        "lineStyle": {
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": cluster_circRNA
                }
            ],
            "grid": {
                left: 80
            },
            "title": [
                {
                    "text": "HeatMap"
                }
            ],
            "visualMap": {
                "show": true,
                "type": "continuous",
                "min": 0,
                "max": 3,
                "inRange": {
                    "color": [
			"#2828FF",
                        "#FFFFFF",
                        "#FF7575",
                    ],
                },
                "calculable": true,
                "splitNumber": 5,
                "orient": "vertical",
                "showLabel": true,
                "itemWidth": 10,
                "itemHeight": 70,
                "right": "1%",
                "top": "5%",

            }
        };
        chart_circRNA_heatmap.setOption(option_circRNA_heatmap);

    };

    if(document.getElementById("SV_type")){
        sv_type=echarts.init(document.getElementById("SV_type")),
        sv_type.setOption({
                title: {
                        text: "Annotation of sRNA, total reads"
                },
                toolbox: {
                        show: 1,
                        itemSize:30,
                        feature: {
                                saveAsImage: {
                                        show: 30
                                }
                        },
                        iconStyle:{emphasis:{borderColor:'#0f5b7c'}}
                },
                color:['#036EB8', '#539A34', '#666464', '#1FA1A0', '#9F3075', '#BC5C1D', '#EEAA1E', '#D1282C', '#4F3D87','#007431','#004077','#632C16'],
                tooltip : {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
                }, series: [{ type: 'pie', label: { normal: { textStyle: { color: ['#000000'], fontSize: 10,},formatter: "{b} : {c} ({d}%)"}},radius:'60%',data:sv_data2}]
        }),svpieb = document.getElementById("svpie"),
        psv=document.getElementById("psv"),
        nsv=document.getElementById("nsv"),
        sv_type.on('click',function(param){name = svpieb.options[document.getElementById("svpie").options.selectedIndex].value;if(param.name=='Translocation'){sv_type.setOption({series:[{data:sv_traz[name]}]})}else if(param.name=='Inversion'){sv_type.setOption({series:[{data:sv_invz[name]}]})}else if(param.name=='Deletion'){sv_type.setOption({series:[{data:sv_delz[name]}]})}else if(param.name=='Insertion'){sv_type.setOption({series:[{data:sv_insz[name]}]})}else if(param.name=='ITX'){sv_type.setOption({series:[{data:sv_itx2z[name]}]})}else if(param.name=='CTX'){sv_type.setOption({series:[{data:sv_ctx2z[name]}]})}else if(param.name=='INS'){sv_type.setOption({series:[{data:sv_ins2z[name]}]})}else if(param.name=='INV'){sv_type.setOption({series:[{data:sv_inv2z[name]}]})}else if(param.name=='DEL'){sv_type.setOption({series:[{data:sv_del2z[name]}]})}else if(param.name=='TDP'){sv_type.setOption({series:[{data:sv_tdp2z[name]}]})}else{sv_type.setOption({series:[{data:sv_dataz2[name]}]})}});
        svpieb.onchange = function() {
                name = svpieb.options[document.getElementById("svpie").options.selectedIndex].value,
                sv_data2 = sv_dataz2[name],
                sv_type.setOption({series:[{data:sv_data2}]})
        };$("#psv").click(function() {
                svpieb.selectedIndex = svpieb.selectedIndex - 1,nsv.style.visibility="visible", -1 == svpieb.selectedIndex && (svpieb.selectedIndex = $("#svpie").find("option:first").index(),psv.style.visibility="hidden"), svpieb.onchange();
        }), $("#nsv").click(function() {
                svpieb.selectedIndex = svpieb.selectedIndex + 1,psv.style.visibility="visible", -1 == svpieb.selectedIndex && (svpieb.selectedIndex = $("#svpie").find("option:last").index(),nsv.style.visibility="hidden"), svpieb.onchange();
        })};



setTimeout(function() {
        window.onresize = function() {
            if(document.getElementById("QMh")){qmh.resize()};
            if(document.getElementById("Mapping_region")){mpr.resize()};
            if(document.getElementById("VOLGENE")){volg.resize()};
            if (document.getElementById("VOLCIRC")){volc.resize()};
            if(document.getElementById("QMR")){qmr.resize()};
            if(document.getElementById("ERm")){erm.resize()};
            if(document.getElementById("GCz")){gcz.resize()};
        };
    }, 50);
})

