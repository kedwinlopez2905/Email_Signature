import React, { useState } from 'react';
import { Upload , Slider, Button , Input , message } from 'antd';
import ImgCrop from 'antd-img-crop';
import { InboxOutlined } from '@ant-design/icons';
import TitleCard from "../../../components/Cards/TitleCard";
const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};
const Image = () => {

    const [fileList, setFileList] = useState([]);
      const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
      };
      const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
          src = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);
            reader.onload = () => resolve(reader.result);
          });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
      };
      // [
      //   {
      //     uid: '-1',
      //     name: 'image.png',
      //     status: 'done',
      //     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      //   },
      // ]
    return (
        <TitleCard title={"Image"}>
            <div className=''>  
              <div className='flex justify-between'> 
                <div>
                  <ImgCrop rotationSlider aspectSlider showReset showGrid>
                      <Upload
                          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                          listType="picture-card"
                          // fileList={fileList}
                          onChange={onChange}
                          onPreview={onPreview}
                      >
                          {fileList.length < 1 && '+ Upload'}
                          
                      </Upload>
                  </ImgCrop>
                </div>
                <div className='w-80'>
                  <span>Image Width</span>
                  <Slider defaultValue={0} disabled={''} />
                  <Input placeholder='Link' style={{marginTop:"15px"}}></Input>
                <div/>
              </div>
            </div>
                    
            <div className="mt-12">
              <span className="inline-block">Banner</span>
              <div className="mt-2 divider"></div>
            </div>
            <div className='flex justify-center mt-8 mb-8'>
              <Button>Design on Canva</Button>
            </div>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                banned files.
              </p>
            </Dragger>
          </div>
        </TitleCard>
    )
}

export default Image;