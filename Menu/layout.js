
import React from 'react';
import {Menu,Button,notification} from 'antd';
import {Link} from 'react-router'
import './layout.css';
import index from 'antd/lib/radio';

const menu = require("./module.json")

const getHighlight = function (param) {

    let firstlevelmenu = Object.keys(menu);
    let stateParam = {};
    if( firstlevelmenu.indexOf(param) >= 0){
        stateParam = {
            defaultFirstSelected: param,
            defaultSecondSelected: menu[param].secondLevel[0].en,
            menuName: param,
            lastMenuName: param
        };
    }else{
        for(let firstindex of firstlevelmenu){
            let secondLevelEn = []
            for (let data of menu[firstindex].secondLevel){
                secondLevelEn.push(data.en);
            }
            if (secondLevelEn.indexOf(param) >= 0){
                stateParam = {
                    defaultFirstSelected: firstindex,
                    defaultSecondSelected: param,
                    menuName: firstindex,
                    lastMenuName: firstindex,
                };
            }
        }
    }
    if(param===""){
        param = "index";
        stateParam = {
            defaultFirstSelected: param,
            defaultSecondSelected: menu[param].secondLevel[0].en,
            menuName: param,
            lastMenuName: param,
        };
    }
    return stateParam;
};

class MyLayout extends Common {

    constructor(props) {
        super(props);
        let url = this.props.location.pathname.substr(1);
        if (url.indexOf("/") > -1) {
            let url_obj = url.split("/");
            url = url_obj[0];
        }
        let highLight = getHighlight(url);
        this.state = {
            defaultFirstSelected: [highLight.defaultFirstSelected],
            defaultSecondSelected: [highLight.defaultSecondSelected],
            menuName: highLight.menuName,
            lastMenuName: highLight.lastMenuName,
            login:false,
            username:"init",
            authority:""
        };
    };



    selectAction(temp){
        switch(temp){
            case 'mapp_source':
                this.setState({
                    defaultFirstSelected:["malicious"] ,
                    defaultSecondSelected: ["m_app"],
                    menuName: "malicious",
                    lastMenuName:"malicious",
                });
                break;
            case 'mdomain_source':
                this.setState({
                    defaultFirstSelected:["malicious"] ,
                    defaultSecondSelected: ["m_domain"],
                    menuName: "malicious",
                    lastMenuName:"malicious",
                });
                break;
            case 'mip_source':
                this.setState({
                    defaultFirstSelected:["malicious"] ,
                    defaultSecondSelected: ["m_ip"],
                    menuName: "malicious",
                    lastMenuName:"malicious",
                });
                break;
            case 'memail_source':
                this.setState({
                    defaultFirstSelected:["malicious"] ,
                    defaultSecondSelected: ["m_email"],
                    menuName: "malicious",
                    lastMenuName:"malicious",
                });
                break;
            case 'murl_source':
                this.setState({
                    defaultFirstSelected:["malicious"] ,
                    defaultSecondSelected: ["m_url"],
                    menuName: "malicious",
                    lastMenuName:"malicious",
                });
                break;
            case 'mftp_source':
                this.setState({
                    defaultFirstSelected:["malicious"] ,
                    defaultSecondSelected: ["m_ftp"],
                    menuName: "malicious",
                    lastMenuName:"malicious",
                });
                break;
            case 'a_equipment_source':
                this.setState({
                    defaultFirstSelected:["asset"] ,
                    defaultSecondSelected: ["a_equipment"],
                    menuName: "asset",
                    lastMenuName:"asset",
                });
                break;
            case "m_domain_detail":
                this.setState({
                    defaultFirstSelected:["malicious"] ,
                    defaultSecondSelected: ["m_domain"],
                    menuName: "malicious",
                    lastMenuName:"malicious",
                });
                break;
            case "mip_detail":
                this.setState({
                    defaultFirstSelected:["malicious"] ,
                    defaultSecondSelected: ["m_ip"],
                    menuName: "malicious",
                    lastMenuName:"malicious",
                });
                break;
            case "mip_contactdetail":
                this.setState({
                    defaultFirstSelected:["malicious"] ,
                    defaultSecondSelected: ["m_ip"],
                    menuName: "malicious",
                    lastMenuName:"malicious",
                });
                break;
            case "m_url_detail":
                this.setState({
                    defaultFirstSelected:["malicious"] ,
                    defaultSecondSelected: ["m_url"],
                    menuName: "malicious",
                    lastMenuName:"malicious",
                });
                break;
            case "m_ftp_detail":
                this.setState({
                    defaultFirstSelected:["malicious"] ,
                    defaultSecondSelected: ["m_ftp"],
                    menuName: "malicious",
                    lastMenuName:"malicious",
                });
                break;
            case "e_ftp_detail":
                this.setState({
                    defaultFirstSelected:["event"] ,
                    defaultSecondSelected: ["e_ftp"],
                    menuName: "event",
                    lastMenuName:"event",
                });
                break;
            case "e_http_detail":
                this.setState({
                    defaultFirstSelected:["event"] ,
                    defaultSecondSelected: ["e_http"],
                    menuName: "event",
                    lastMenuName:"event",
                });
                break;
            case "e_email_detail":
                this.setState({
                    defaultFirstSelected:["event"] ,
                    defaultSecondSelected: ["e_email"],
                    menuName: "event",
                    lastMenuName:"event",
                });
                break;
            case "e_vpn_detail":
                this.setState({
                    defaultFirstSelected:["event"] ,
                    defaultSecondSelected: ["e_vpn"],
                    menuName: "event",
                    lastMenuName:"event",
                });
                break;
            case "e_ssl_detail":
                this.setState({
                    defaultFirstSelected:["event"] ,
                    defaultSecondSelected: ["e_ssl"],
                    menuName: "event",
                    lastMenuName:"event",
                });
                break;
            case "a_analysis_detail":
                this.setState({
                    defaultFirstSelected:["asset"] ,
                    defaultSecondSelected: ["a_analysis"],
                    menuName: "asset",
                    lastMenuName:"asset",
                });
                break;
			case "a_email_detail":
                this.setState({
                    defaultFirstSelected:["asset"] ,
                    defaultSecondSelected: ["a_email"],
                    menuName: "asset",
                    lastMenuName:"asset",
                });
                break;
            case "a_qq_detail":
                this.setState({
                    defaultFirstSelected:["asset"] ,
                    defaultSecondSelected: ["a_qq"],
                    menuName: "asset",
                    lastMenuName:"asset",
                });
                break;
            case "a_phone_detail":
                this.setState({
                    defaultFirstSelected:["asset"] ,
                    defaultSecondSelected: ["a_phone"],
                    menuName: "asset",
                    lastMenuName:"asset",
                });
                break;
            case "a_imei_detail":
                this.setState({
                    defaultFirstSelected:["asset"] ,
                    defaultSecondSelected: ["a_imei"],
                    menuName: "asset",
                    lastMenuName:"asset",
                });
                break;
            case "a_ip_asset":
                this.setState({
                    defaultFirstSelected:["asset"] ,
                    defaultSecondSelected: ["a_ip"],
                    menuName: "asset",
                    lastMenuName:"asset",
                });
                break;
			case "a_equipment_detail":
                this.setState({
                    defaultFirstSelected:["asset"] ,
                    defaultSecondSelected: ["a_equipment"],
                    menuName: "asset",
                    lastMenuName:"asset",
                });
                break;
            case "m_app":
                this.setState({
                    defaultFirstSelected:["malicious"] ,
                    defaultSecondSelected: ["m_app"],
                    menuName: "malicious",
                    lastMenuName:"malicious",
                });
                break;
            case "m_privacy":
                this.setState({
                    defaultFirstSelected:["malicious"] ,
                    defaultSecondSelected: ["m_privacy"],
                    menuName: "malicious",
                    lastMenuName:"malicious",
                });
                break;
            case "m_ftp":
                this.setState({
                    defaultFirstSelected:["malicious"] ,
                    defaultSecondSelected: ["m_ftp"],
                    menuName: "malicious",
                    lastMenuName:"malicious",
                });
                break;
            case "m_url":
                this.setState({
                    defaultFirstSelected:["malicious"] ,
                    defaultSecondSelected: ["m_url"],
                    menuName: "malicious",
                    lastMenuName:"malicious",
                });
                break;
            case "m_ip":
                this.setState({
                    defaultFirstSelected:["malicious"] ,
                    defaultSecondSelected: ["m_ip"],
                    menuName: "malicious",
                    lastMenuName:"malicious",
                });
                break;
            case "m_attack":
                this.setState({
                    defaultFirstSelected:["malicious"] ,
                    defaultSecondSelected: ["m_attack"],
                    menuName: "malicious",
                    lastMenuName:"malicious",
                });
                break;
            case "m_email":
                this.setState({
                    defaultFirstSelected:["malicious"] ,
                    defaultSecondSelected: ["m_email"],
                    menuName: "malicious",
                    lastMenuName:"malicious",
                });
                break;
            case "m_domain":
                this.setState({
                    defaultFirstSelected:["malicious"] ,
                    defaultSecondSelected: ["m_domain"],
                    menuName: "malicious",
                    lastMenuName:"malicious",
                });
                break;
            case 'overview':
                this.setState({
                    defaultFirstSelected:["index"] ,
                    defaultSecondSelected: ["overview"],
                    menuName: "index",
                    lastMenuName:"index",
                });
                break;
            case '':
                this.setState({
                    defaultFirstSelected:["index"] ,
                    defaultSecondSelected: ["overview"],
                    menuName: "index",
                    lastMenuName:"index",
                });
                break;
            default:
                // console.log(window.location.hash.replace("#/",""));
                break;
        }
    }

    componentWillMount(){
        let cookie = document.cookie;
        let tempa = cookie.split(";");
        let mtdusername="";
        let mtdauthority="";

        tempa.map((value)=>{
            if(value.split("=")[0].trim()===(encodeURIComponent("mtdname")).trim()){
                mtdusername=decodeURIComponent(value.split("=")[1].trim()).trim()
            }
            if(value.split("=")[0].trim()===encodeURIComponent("mtdauthority").trim()){
                mtdauthority=decodeURIComponent(value.split("=")[1].trim()).trim()
            }
            return null
        });

        if(mtdauthority==="superuser"){
            this.setState({
                login:true,
                username:"管理员",
                authority:"admin"
            });
        }else if(mtdauthority==="normaluser"){
            this.setState({
                login:true,
                username:mtdusername,
                authority:"user"
            });
        }else{
            let temp=window.location.hash.replace("#/","");
            if(temp===""){
                window.location.href="#/login"
            }else{
                window.location.href="#/login".concat('?',temp)
            }
        }

        let temp=window.location.hash.replace("#/","");
        if(temp.split("?").length>1){
            temp=temp.split("?")[0]
        }
        this.selectAction(temp);
    }

    componentWillReceiveProps = next => {
        let url = this.props.location.pathname.replace(/\//g, "");
        let next_url = next.location.pathname.replace(/\//g, "");
        if (url === next_url) {
            let highLight = getHighlight(next_url);
            this.setState({
                defaultFirstSelected: [highLight.defaultFirstSelected],
                defaultSecondSelected: [highLight.defaultSecondSelected],
                menuName: highLight.menuName,
                lastMenuName: highLight.lastMenuName
            });
        }
        let temp=window.location.hash.replace("#/","");
        if(temp.split("?").length>1){
            temp=temp.split("?")[0]
        }
        this.selectAction(temp);
    };

    mouseOver = name => {
        if (name === "") {
            this.setState({
                defaultFirstSelected: [this.state.lastMenuName],
                menuName: this.state.lastMenuName
            })
        } else {
            this.setState({
                defaultFirstSelected: [
                    this.state.lastMenuName, name.data
                ],
                menuName: name.data
            })
        }
    };

    loadingmenu = firstlevelmenu => {
        var newArr = [];  
        for (var data in menu){
            newArr.push(<Menu.Item key={data}>
                <Link to={menu[data].action} className="menuText"  onMouseOver={this.mouseOver.bind(null, {data})}>
                    {menu[data].name}
                </Link>
            </Menu.Item>)
        }
        return newArr;
    }

    render() {
        return (
            <div className="layout-top">
                <div className="layout-header">
                    <div className="layout-wrapper">
                        <div className="layout-logo">
                        </div>
                        <span className="username">
                            {this.state.login?<p>{this.state.username},你好!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>: <p>没登录</p>}

                        </span>
                        <Menu theme="dark" mode="horizontal" style={{
                            lineHeight: '64px',
                            backgroundColor:"#343842"
                        }} selectedKeys={this.state.defaultFirstSelected}>
                            {
                                this.loadingmenu()
                            }
                        </Menu>
                    </div>
                </div>
                <div className="layout-subheader">
                    <div className="layout-wrapper">
                        <Menu mode="horizontal" theme="dark" selectedKeys={this.state.defaultSecondSelected}
                              className={this.state.menuName}>
                            {
                                menu[this.state.menuName]["secondLevel"].map(function (one) {
                                return <Menu.Item key={one.en}>
                                          <Link to={one.en} className="menuText">{one.cn}</Link>
                                       </Menu.Item>}
                                )
                            }
                        </Menu>
                    </div>
                </div>
                <div className="layout-wrapper" style={{
                    // paddingTop: '35px'
                }} onMouseOver={this.mouseOver.bind(null, "")}>
                    <div className="layout-container">
                        {this.props.children}
                    </div>
                </div>
                <div className="layout-footer" onMouseOver={this.mouseOver.bind(null, "")}>
                    {/* Copyright © 2017
                    <a href="http://www.avlsec.com/">武汉安天信息技术有限责任公司</a> */}
                </div>
            </div>
        );
    };

}
export default MyLayout;
