import React from 'react';
import StyledTable from './styled/StyledTable';
import {data, columns} from './tableConfig';
const tabs = {
    externalIssuance: {
        tabName: 'External Issuance',
        id: 'externalIssuance',
        component: <StyledTable
        dataSource= {data}
        columns={columns}
        pagination={false}
        defaultPageSize={data.length}
      />,

    },
    favorateIssuance: {
        tabName: 'Favorate Issuance',
        id: 'favorateIssuance',
        component: <div> No Designs Provided </div>,
    },
    myIssuance: {
        tabName: 'My Issuance',
        id: 'myIssuance',
        component: <div> No Designs Provided</div>,
    },
    mndaManagement: {
        tabName: 'MNDA Management',
        id: 'mndaManagement',
        component: <div> No Designs Provided </div>,
    },
};

export const defaultTabKey = tabs.externalIssuance.id;

export default Object.values(tabs);
