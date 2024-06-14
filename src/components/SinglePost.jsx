import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Tag } from 'antd';

const { Meta } = Card;



export const SinglePost = ( {image , title , owner, ownerpicture,tags} ) =>{


  console.log(tags)
  
  return(
    <div className="card">
  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt={title}
        src={image}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src={ownerpicture} />}
      title={title}
      description={owner}
    />
    <div style={{marginTop:'30px'}}>
    {tags.map((tag) => (
        <Tag>{tag}</Tag>
      ))}
      </div>
  </Card>
  </div>
  )
};