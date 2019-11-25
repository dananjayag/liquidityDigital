import React from 'react';
import StyledStatusIcon from "./styled/StyledStatusIcon";

export const data = [{
    name: 'Enery Infrastructure',
    issuanceType: 'Equity',
    targetRaise: '$23M',
    preMoneyValuation: '$23M',
    amountRaised: '$23M',
    location: 'Bangalore',
    status: 'inProgress',
    },
    {
        name: 'Enery Infrastructure',
        issuanceType: 'Equity',
        targetRaise: '$23M',
        preMoneyValuation: '$23M',
        amountRaised: '$23M',
        location: 'Bangalore',
        status: 'closed',
    }
];

export const columns = [
    {
      title: 'Name & Industry Type',
      dataIndex: 'name',
     }, 
    {
      title: 'Issuance Type',
      dataIndex: 'issuanceType',
    }, 
    {
        title: 'Target Raise',
        dataIndex: 'targetRaise',
        filterIcon: true,
    }, 
    {
        title: 'Pre money Valuation',
        dataIndex: 'preMoneyValuation',
    }, 
    {
        title: 'Amount Raised',
        dataIndex: 'amountRaised',
    }, 
    {
        title: 'Location',
        dataIndex: 'location',
    }, 
    {
        title: 'Status',
        dataIndex: 'status',
        render: (value)=> <StyledStatusIcon status={value}> { getStatus(value)}</StyledStatusIcon>
    }, 
  
];


export const statusTypes = {
    inProgress: {
        key: "inProgress",
        name: 'In Progress',
    },

    closed: {
        key: "closed",
        name: 'Closed',
    },
}


const getStatus = (status) => statusTypes[status] && statusTypes[status]['name'];