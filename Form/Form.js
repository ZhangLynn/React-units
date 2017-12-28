/**
 * Created by heyunfeng on 2017/6/2.
 */
import React from 'react';
import { Form, Row, Col, Select, Input, DatePicker, Button } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const {RangePicker} = DatePicker;

let type = "url";
let idtype = 'phone';

class NormalLoginForm extends React.Component{

    handleSelectChange = (value) => {
        type = value;
    };

    handleidSelectChange = (value) => {
        idtype = value;
    };

    handleSubmit=(e)=> {
        e.preventDefault();
        this.props.form.validateFields((err, values)=> {
            if (!err) {
                this.props.callback(values);
            }
        });
    };

    render(){
        const { getFieldDecorator }=this.props.form;

        const formItemLayout={
            labelCol: { span: 10 },
            wrapperCol: { span: 14 },
        };

        return (
            <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col span={5}>
                        <FormItem
                            {...formItemLayout}
                            label="日期"
                        >
                            {getFieldDecorator('datepicker', {
                            })(
                                <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder={['开始', '结束']} style={{width: "initial"}} onChange={this.props.callbacktime}/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={5}>
                        <FormItem
                            {...formItemLayout}
                            label="邮件主题"
                        >
                            {getFieldDecorator('mail_subject', {
                            })(
                                <Input/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={5}>
                        <FormItem
                            {...formItemLayout}
                            label="协议类型"
                        >
                            {getFieldDecorator("log_type", {
                                initialValue:"所有"
                            })(
                                <Select placeholder="选择分类">
                                    <Option value="所有">所有</Option>
                                    <Option value="SMTP">SMTP</Option>
                                    <Option value="POP3">POP3</Option>
                                    <Option value="IMAP">IMAP</Option>
                                </Select>
                            )}
                        </FormItem>
                    </Col>
                    {/* <Col span={5}>
                        <FormItem
                            {...formItemLayout}
                            label="发件IP"
                        >
                            {getFieldDecorator('orig_ip', {
                            })(
                                <Input/>
                            )}
                        </FormItem>
                    </Col> */}
                    <Col span={2} offset={6}>
                        <FormItem>
                            <Button type="primary" htmlType="submit">查询</Button>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={5}>
                            <FormItem
                                {...formItemLayout}
                                label="发件人邮箱"
                            >
                                {getFieldDecorator('mail_from', {
                                })(
                                    <Input/>
                                )}
                            </FormItem>
                    </Col>
                    <Col span={5}>
                            <FormItem
                                {...formItemLayout}
                                label="收件人邮箱"
                            >
                                {getFieldDecorator('mail_to', {
                                })(
                                    <Input/>
                                )}
                            </FormItem>
                    </Col>

                    {/* <Col span={5}>
                            <Row>
                                <Col span={14}>
                                    <FormItem
                                        labelCol={{span:14}}
                                        wrapperCol={{span:10}}
                                        label="敏感信息"
                                    >
                                        {getFieldDecorator("senseinfo", {
                                            onChange: this.handleSelectChange,
                                            initialValue:"所有",
                                        })(
                                            <Select placeholder="选择分类">
                                                <Option value="所有">所有</Option>
                                                <Option value="url">URL</Option>
                                                <Option value="phone">手机号</Option>
                                                <Option value="qq">QQ号</Option>
                                                <Option value="imei">IMEI</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={10}>
                                    <FormItem>
                                        {getFieldDecorator(type, {
                                        })(
                                            <Input/>
                                        )}
                                    </FormItem>
                                </Col>
                        </Row>
                    </Col> */}

                    <Col span={5}>
                    <Row>
                        <Col span={14}>
                            <FormItem
                                labelCol={{span:14}}
                                wrapperCol={{span:10}}
                                label="身份信息"
                            >
                                {getFieldDecorator("idinfo", {
                                    onChange: this.handleidSelectChange,
                                    initialValue:"所有",
                                })(
                                    <Select placeholder="选择分类">
                                        <Option value="所有">所有</Option>
                                        <Option value="tun_phone">手机号</Option>
                                        <Option value="tun_imsi">IMSI</Option>
                                        <Option value="tun_imei">IMEI</Option>
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={10}>
                            <FormItem>
                                {getFieldDecorator(idtype, {
                                })(
                                    <Input/>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    </Col>

                </Row>
            </Form>
        )
    }
}

const M_ip_form =Form.create()(NormalLoginForm);

export default M_ip_form;
