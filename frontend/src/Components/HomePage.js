import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'
import Navigationbar from '../Details/NavigationBar/Navigationbar'
import Sidebar from '../Details/Sidebar/Sidebar.js'
import './Homepage.css'
import { DataGrid } from '@mui/x-data-grid';
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'device', headerName: 'Device', width: 130 },
    { field: 'script', headerName: 'Script', width: 130 },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'device') || ''} ${
          params.getValue(params.id, 'script') || ''
        }`,
    },
    {
        field: 'control',
        headerName: 'State',
        width: 160,
    }
];
const rows = [
    { id: 1, device: 'Sensor 1', script: 'livingroomA',control: 'On'},
    { id: 2, device: 'Sensor 2', script: 'livingroomB',control: 'Off'},
    { id: 3, device: 'Sensor 3', script: 'livingroomC',control: 'Off'},
    { id: 4, device: 'Sensor 4', script: 'livingroomD',control: 'Off'},    
];
  
  
export class HomePage extends Component {
    
    render() {
        return (
            <div>
                <Navigationbar />
                <div className='home1'>
                    <Sidebar />
                    <div style={{ height: 300, width: "100%" }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                    />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage
