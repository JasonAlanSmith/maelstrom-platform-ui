/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useNavigate } from 'react-router-dom';

import {
  ColumnDirective,
  ColumnsDirective,
  CommandClickEventArgs,
  CommandColumn,
  Filter,
  GridComponent,
  Inject,
  Page,
  Resize,
  Sort,
  TextAlign,
} from '@syncfusion/ej2-react-grids';

import apiCall from '../../utils/common.ts';

type columnDirective = {
    field: string;
    headerText?: string;
    width: string;
    format: string;
    textAlign: TextAlign;
    visible?: boolean;
    type?: string;
    editType?: string;
    displayAsCheckBox?: boolean;
};

interface IProps {
    data?: any[] | undefined;
    columnDirectives: columnDirective[];
    serviceName: string;
    serviceNameForApi?: string;
}

export default function MPGrid({
  data, columnDirectives, serviceName, serviceNameForApi,
}: IProps) {
  let grid: any;
  let rowData: any;

  const navigate = useNavigate();

  const resizeSettings: object = { mode: 'Normal' };
  const selectSettings: object = { mode: 'Row' };
  const pageSettings: object = {
    pageSize: 10,
    pageSizes: ['5', '10', '20', '50', 'All'],
  };
  const filterSettings: object = {
    type: 'FilterBar',
    mode: 'Immediate',
    immediateModeDelay: 0,
  };

  const commands = [
    {
      buttonOption: {
        content: 'View',
        cssClass: 'e-flat',
      },
    },
    {
      buttonOption: {
        content: 'Delete',
        cssClass: 'e-flat',
      },
    },
  ];

  const commandClick = (args: CommandClickEventArgs) => {
    if (grid) {
      rowData = args.rowData;
      if (args.commandColumn && args.commandColumn.buttonOption && args.commandColumn.buttonOption.content === 'Delete') {
        if (rowData) {
          if (serviceNameForApi !== undefined) {
            const delURL = `https://maelstrom-platform-api.onrender.com/${serviceNameForApi.toLowerCase()}/${
              rowData.sid
            }`;

            const rd = apiCall(delURL, {}, 'DELETE');
            rd.then((dr) => {
              if (dr.status === 200) {
                navigate(
                  `/${serviceName.toLowerCase()}`,
                );
              }
            });
          }
        }
      }

      if (args.commandColumn && args.commandColumn.buttonOption && args.commandColumn.buttonOption.content === 'View') {
        if (rowData) {
          navigate(
            `/${serviceName.toLowerCase()}/browse/${
              rowData.sid
            }`,
          );
        }
      }
    }
  };

  return (
    <div className="m-3">
      <GridComponent
        ref={(g) => (grid === g)}
        dataSource={data}
        allowGrouping={false}
        allowSorting
        allowFiltering
        allowPaging
        allowResizing
        pageSettings={pageSettings}
        resizeSettings={resizeSettings}
        filterSettings={filterSettings}
        selectionSettings={selectSettings}
        height={460}
        commandClick={commandClick}
      >
        <ColumnsDirective>
          <ColumnDirective
            headerText="Actions"
            width="150"
            commands={commands}
          />
          {columnDirectives.map((colDirective) => (
            <ColumnDirective
              key={colDirective.field}
              field={colDirective.field}
              headerText={colDirective.headerText}
              width={colDirective.width}
              format={colDirective.format}
              textAlign={colDirective.textAlign}
              visible={colDirective.visible}
              type={colDirective.type}
              editType={colDirective.editType}
              displayAsCheckBox={
                colDirective.displayAsCheckBox
              }
            />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Page,
            Sort,
            Filter,
            CommandColumn,
            Resize,
          ]}
        />
      </GridComponent>
    </div>
  );
}
