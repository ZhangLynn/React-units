import React from 'react';
import { Form, Icon, Input, Button ,Upload,message,Modal} from 'antd';
const FormItem = Form.Item;
import './component.less'
class uploadform extends Common{
    state = {
        error: {},
        fileList: [],
        loading:false
    };
    handleSubmit(e){
        e.preventDefault();
        const { fileList } = this.state;
        let formData = new FormData();
        fileList.forEach((value,index)=>{
            formData.append("file",value)
        })
        if(super.isRepeat(fileList)){
            message.error("不能选择重复文件上传！")
            return
        }
        let task_id=new Date().getTime();
        if(fileList.length===0){
            message.error("请至少选择一个文件！")
            return
        }
        if(fileList.length>5){
            message.error("最多只能上传5个文件！")
            return
        }
        let totalSize=0;
        fileList.map(value=>{
            totalSize+=value.size;
        })
        if(totalSize>1024*1024*1024){
            message.error("所传文件总大小不能超过1G！")
            return
        }
        this.props.form.validateFields((err, values) => {
            if(!err){
                this.setState({
                    loading:true
                });
                fetch("url...",{
                    method:"POST",
                    body:formData
                }).then(response=>{
                    return response.toJson();
                }).then(jsonData=>{
                    if(jsonData.status===0){
                        this.setState({
                            loading:false
                        })
                        message.success("任务提交成功");
                        this.props.form.resetFields();
                        this.setState({
                            fileList:[]
                        });
                        this.props.onCancel();
                    }
                }).catch(error_promise => {
                        this.setState({
                            loading:false
                        })
                        if(error_promise===1){
                            message.error("已存在相同任务名 请重试！")
                        }

                    }); 
            }
        });
    };
    normFile = (e) => {
        // console.log('Upload event:',JSON.stringify(e));
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }
    clearFile=()=>{
        this.setState({
            fileList:[]
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
        };
        const uploadsetting = {
            name: 'file',
            action: Config.flowAnalysisAdd,
            multiple:true,
            accept:".pcap",
            onChange:(info)=>{
                // console.log(JSON.stringify(info))
            },
            onRemove: (file) => {
                this.setState(({ fileList }) => {
                    const index = fileList.indexOf(file);
                    const newFileList = fileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        fileList: newFileList,
                    };
                });
            },
            beforeUpload: (file) => {
                this.setState(({ fileList }) => ({
                    fileList: [...fileList,file],
                }));
                return false;
            },
            fileList:this.state.fileList
        };
        const {onCancel,visible,refreshList,key}=this.props;
        return (

            <Modal
                visible={visible}
                title="创建分析任务"
                onCancel={onCancel}
                refreshList={refreshList}
                footer={null}
                key={key}
                className="black-modal"
            >
                <Spin tip="任务提交中 请稍后..." spinning={this.state.loading} size="large" className="loading">

                <Form onSubmit={this.handleSubmit.bind(this)} className="black-form" style={{width:"600px"}}>
                    <FormItem
                        {...formItemLayout}
                        label="任务名称"
                        hasFeedback
                    >
                        {getFieldDecorator('task_name', {
                            rules: [{ required: true, message: '请输入任务名称!' }]
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="任务描述"
                    >
                        {getFieldDecorator('task_info', {
                        })(
                            <Input type="textarea" rows={4}/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="上传文件："
                        className="upload-con"
                    >
                        <Upload {...uploadsetting} >
                            <Button type="primary" style={{width:"100%",fontSize:"16px"}}>
                                <Icon type="file" /> 选择一个或多个pcap文件
                            </Button>
                        </Upload>
                    </FormItem>
                    <FormItem style={{marginTop:"50px"}}
                    >
                        <Button htmlType="submit" style={{width:"100px",fontSize:"16px",padding:"0px 10px",height:"28px",margin:"0px 10px 0px 150px"}} type="primary">
                            提交
                        </Button>
                        <Button style={{width:"100px",fontSize:"16px",padding:"0px 10px",height:"28px"}} onClick={onCancel}>
                            取消
                        </Button>
                    </FormItem>
                </Form>
                </Spin>
            </Modal>

        );
    }
}

const UploadForm = Form.create({})(uploadform);

export default UploadForm

