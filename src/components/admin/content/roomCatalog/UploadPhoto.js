import React, { Component } from 'react'
import { Upload, Modal } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const UploadButton = () => (
    <div>
        <PlusOutlined />
        <div className="ant-upload-text">Add photo</div>
    </div>
)

export default class UploadPhoto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            previewVisible: false,
            previewImage: '',
            previewTitle: '',
            fileList: [],
        }
    }

    // componentDidMount = () => {
    //     const { photoList }
    // }

    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await this.getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };

    handleChange = ({ fileList }) => this.setState({ fileList }, () => { console.log(this.state.fileList) });

    render() {
        const { previewVisible, previewImage, fileList, previewTitle } = this.state;
        return (
            <div className="clearfix">
                <Upload
                    action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                    {fileList.length >= 8 ? null : <UploadButton />}
                </Upload>
                <Modal
                    visible={previewVisible}
                    title={previewTitle}
                    footer={null}
                    onCancel={this.handleCancel}
                >
                    <img alt="room_photo" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        )
    }
}
