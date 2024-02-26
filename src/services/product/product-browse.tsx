import { useState } from 'react';

import { TextAlign } from '@syncfusion/ej2-react-grids';

import MPGrid from '../../components/ui/mpgrid.tsx';
import apiCall, { baseUrl } from '../../utils/common.ts';

interface columnDirective {
    field: string;
    headerText: string;
    width: string;
    format: string;
    textAlign: TextAlign;
    isPrimaryKey?: boolean;
    visible?: boolean;
    type?: string;
}

export default function ProductBrowse() {
  const [data, setData] = useState([]);

  const r = apiCall(`${baseUrl}/product`);
  r.then((rd) => rd.json())
    .then((data1) => {
      setData(data1);
    });

  const colDirectives: columnDirective[] = [
    {
      field: 'sid',
      headerText: 'SID',
      width: '200',
      format: '',
      textAlign: 'Left',
      visible: false,
    },
    {
      field: 'fid',
      headerText: 'Identifier',
      width: '200',
      format: '',
      textAlign: 'Center',
      isPrimaryKey: true,
      type: 'number',
    },
    {
      field: 'title',
      headerText: 'Title',
      width: '200',
      format: '',
      textAlign: 'Center',
    },
    {
      field: 'cdnm',
      headerText: 'Code Name',
      width: '200',
      format: '',
      textAlign: 'Center',
    },
    {
      field: 'suite_nm',
      headerText: 'Suite',
      width: '200',
      format: '',
      textAlign: 'Center',
    },
    {
      field: 'incep',
      headerText: 'Inception',
      width: '175',
      format: '',
      textAlign: 'Center',
    },
    {
      field: 'usr',
      headerText: 'Owner',
      width: '175',
      format: '',
      textAlign: 'Center',
    },
    {
      field: 'lic_nm',
      headerText: 'License',
      width: '150',
      format: '',
      textAlign: 'Center',
    },
    {
      field: 'md_nm',
      headerText: 'Mode',
      width: '150',
      format: '',
      textAlign: 'Center',
    },
    {
      field: 'categ_nm',
      headerText: 'Category',
      width: '150',
      format: '',
      textAlign: 'Center',
    },
    {
      field: 'LatestBuildVersion',
      headerText: 'Latest Build/Version',
      width: '200',
      format: '',
      textAlign: 'Center',
    },
    {
      field: 'LatestRelease',
      headerText: 'Latest Release',
      width: '150',
      format: '',
      textAlign: 'Center',
    },
  ];

  return (
    <div className="row product-browse">
      <div className="col-12">
        <MPGrid columnDirectives={colDirectives} data={data} serviceName="Product" />
      </div>
    </div>
  );
}
