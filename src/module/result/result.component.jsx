import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
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
  var urlParams = new URLSearchParams(window.location.search);

  var surveyId = urlParams.get('id');
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchData() {
      httpService
        .get("https://w6eakr17z5.execute-api.ap-south-1.amazonaws.com/default/retrieveSentiments",{"SurveyId":surveyId})
        .then((res) => {
           var val = JSON.parse(res);
            setData(val);
   
        })
        .catch((err) => {
          console.log(err);
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


