import React from 'react';
import { Table, Tag, Space } from 'antd';



const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Comment',
    dataIndex: 'comment',
    key: 'comment',
  },
  {
    title: 'Sentiment',
    key: 'sentiment',
    dataIndex: 'sentiment',
  },
  {
    title: 'Positive %',
    key: 'positive',
    dataIndex: 'positive',
  },
  {
    title: 'Negative %',
    key: 'negative',
    dataIndex: 'negative',
  },
  {
    title: 'Neutral %',
    key: 'neutral',
    dataIndex: 'neutral',
  },
  {
    title: 'Mixed %',
    key: 'mixed',
    dataIndex: 'mixed',
  },

];

const data = [
  {
    key: '1',
    name: 'John Brown',
    email: 'john@yedu.com',
    comment: 'New York No. 1 Lake Park',
    sentiment: 'neutral',
    positive: '50%',
    negative: '40%',
    neutral: '5%',
    mixed: '5%',
    },
  {
    key: '2',
    name: 'Jim Green',
    email: 'gim@gmail.com',
    comment: 'London No. 1 Lake Park',
    sentiment: 'negative',
    positive: '50%',
    negative: '40%',
    neutral: '5%',
    mixed: '5%',
  },
  {
    key: '3',
    name: 'Joe Black',
    email: 'joe@sonar.com',
    comment: 'Sidney No. 1 Lake Park',
    sentiment: 'positive',
    positive: '50%',
    negative: '40%',
    neutral: '5%',
    mixed: '5%',
  },
];
const ResultComponent = (props) => {
 
  return (
    <Table columns={columns} dataSource={data} />
  );
};

export default ResultComponent;


