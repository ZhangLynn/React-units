import React from "react";
import ReactEcharts from 'echarts-for-react';
const Color = [
    'rgba(45,81,155,0.6)',
    'rgba(13,111,182,0.6)',
    'rgba(36,178,182,0.6)',
    'rgba(42,154,168,0.6)',
    'rgba(192,85,111,0.6)',
    'rgba(160,62,119,0.6)',
    'rgba(139,70,124,0.6)',
    'rgba(112,69,125,0.6)',
    'rgba(95,10,121,0.6)',
    'rgba(22,75,26,0.6)',
];
let jsonData={"status": 0, "data": [{"data": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 70.0, 50.0, 18.0, 2.0, 124.0, 0.0, 0.0, 36.0, 33.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 28.0, 195.0, 63.0, 0.0, 0.0, 0.0, 0.0, 41.0, 10.0, 0.0], "name": "\u6076\u610fIP"}, {"data": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 8.0, 4.0, 0.0, 0.0, 27.0, 168.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 51.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], "name": "\u6076\u610f\u90ae\u7bb1"}, {"data": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 143.0, 1687.0, 2188.0, 1663.0, 0.0, 0.0, 19.0, 25.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], "name": "\u6076\u610f\u5e94\u7528"}, {"data": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], "name": "\u6076\u610fFTP"}, {"data": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 20013.0, 51060.0, 6254.0, 758.0, 54685.0, 0.0, 0.0, 191.0, 814.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 62.0, 585.0, 120531.0, 86896.0, 62582.0, 3.0, 0.0, 0.0, 0.0, 32717.0, 2766.0, 18.0], "name": "\u6076\u610f\u57df\u540d"}, {"data": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 6018.0, 11797.0, 1212.0, 354.0, 17080.0, 0.0, 0.0, 44.0, 250.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 0.0, 23913.0, 17863.0, 13925.0, 2.0, 0.0, 0.0, 0.0, 8570.0, 157.0, 0.0], "name": "\u6076\u610f\u7f51\u5740"}, {"data": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 280.0, 25.0, 162.0, 19.0, 0.0, 0.0, 69.0, 100.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 172.0, 197.0, 139.0, 0.0, 0.0, 0.0, 0.0, 80.0, 79.0, 7.0], "name": "\u9690\u79c1\u6cc4\u9732"}, {"data": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], "name": "\u6f0f\u6d1e\u653b\u51fb"}], "time": ["12-05", "12-06", "12-07", "12-08", "12-09", "12-10", "12-11", "12-12", "12-13", "12-14", "12-15", "12-16", "12-17", "12-18", "12-19", "12-20", "12-21", "12-22", "12-23", "12-24", "12-25", "12-26", "12-27", "12-28", "12-29", "12-30", "12-31", "01-01", "01-02", "01-03", "01-04", "01-05", "01-06", "01-07", "01-08", "01-09", "01-10", "01-11", "01-12", "01-13", "01-14", "01-15", "01-16", "01-17", "01-18", "01-19", "01-20", "01-21", "01-22", "01-23", "01-24"]}
export default class FlowRcharts extends React.Component{
    constructor(){
        super();
        this.state={
            trendDateTime:[],
            trendDateLine:[],
        }
    }
    componentDidMount(){
        this.getData()
    }
    getData(){
        if(jsonData.data.length!==0){
            let temp = [];
            jsonData.data.map((value,index)=>{
                temp.push({
                    name: value.name,
                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    sampling: 'send_bytes',
                    areaStyle: {normal: {}},
                    itemStyle: {
                        normal: {
                            color: Color[index]
                        }
                    },
                    data: value.data
                });
                return temp
            });
            let time=[];
            jsonData.time.map((value,index)=>{
                time.push({
                    textStyle: {
                        color:'#aab0b7'
                    },
                    value: value
                });
                return time
            });
            this.setState({
                trendDateTime: time,
                trendDateLine: temp,
            });
        }
    }
    render(){
        return (
            <div>
                {this.state.trendDateTime.length===0 ? <h3>暂无数据</h3> : <ReactEcharts
                    option={{
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            show:true,
                            textStyle:{
                                color:'#aab0b7'
                            },
                            bottom:0,
                            width:'400px',
                            data:['恶意IP','恶意域名','恶意FTP','恶意邮箱','恶意网址','恶意应用','隐私泄露','漏洞攻击'],
                        },
                        grid: {
                            top:'4%',
                            left: '4%',
                            right: '3%',
                            // bottom: '4%',
                            containLabel: true,
                            borderColor:'#aab0b7'
                        },
                        xAxis:  {
                            type: 'category',
                            boundaryGap: false,
                            data: this.state.trendDateTime,
                            labelLine:{
                                normal:{
                                    lineStyle:{
                                        color:'#aab0b7'
                                    }
                                }
                            },
                        },
                        yAxis: {
                            type: 'value',
                            axisLabel: {
                                formatter: function (value,index) {
                                    if(value/10000>1||value/10000===1){
                                        return value/10000+'万'
                                    }
                                    else {
                                        return value
                                    }
                                }
                            },
                            axisLine:{
                                lineStyle:{
                                    color:'#aab0b7',
                                }
                            },
                        },
                        color:[
                            '#b04a3c',
                            '#f88767',
                            '#ceaa6c',
                            '#afba6b',
                            '#6fb881',
                            '#62abbc',
                            '#6b89c5',
                            '#806fd5',
                        ],
                        series: this.state.trendDateLine
                    }}
                />}
            </div>
        )
    }
}