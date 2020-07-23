import React, { useState, useEffect } from 'react';
import { Table, Tag, Space } from 'antd';
import httpService from '../../services/http.service'


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



const ResultComponent = (props) => {
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchData() {
      httpService
        .get("https://w6eakr17z5.execute-api.ap-south-1.amazonaws.com/default/retrieveSentiments?SurveyId=survey1")
        .then(({ data, success }) => {
          if (success) {
            setData(data);
          }
        })
        .catch((err) => {
          setData([]);
        });
    }
  
    fetchData();
  }, []);
 
  return (
    <Table columns={columns} dataSource={data} />
  );
};

export default ResultComponent;


