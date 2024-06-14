import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;



export const SinglePost = (image) =>{
  const imageUrl = image.image.replace(/['"]+/g, '');
  
  return(
    <div className="card">
  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src={imageUrl}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title="{title}"
      description="{owner}"
    />
  </Card>
  </div>
  )
};