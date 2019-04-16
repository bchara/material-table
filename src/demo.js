import { Grid, MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MaterialTable from './material-table';

let direction = 'ltr';
// direction = 'rtl';
const theme = createMuiTheme({
  direction: direction,
  palette: {
    type: 'light'
  }
});

class App extends Component {
  tableRef = React.createRef();

  state = {
    //selecteds: 0,
    data: [
      //{ tableData: { checked: true }, id: 1, name: 'a', surname: 'baran', isMarried: true, birthDate: new Date(1987, 1, 1), birthCity: 0, sex: 'Male', type: 'adult', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35) },
      { id: 1, name: 'a', surname: 'Joe', station: 'S0',    robot: 'R0', isMarried: true, birthDate: new Date(1987, 1, 1), birthCity: 0, sex: 'Male', type: 'adult', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35) },
      { id: 2, name: 'b', surname: 'baran', station: 'S0',  robot: 'R1', isMarried: false, birthDate: new Date(1987, 1, 1), birthCity: 34, sex: 'Female', type: 'adult', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35), parentId: 1 },
      { id: 3, name: 'c', surname: 'baran', station: 'S0',  robot: 'R2', isMarried: true, birthDate: new Date(1987, 1, 1), birthCity: 34, sex: 'Female', type: 'child', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35), parentId: 1 },
      { id: 4, name: 'd', surname: 'baran', station: 'S0',  robot: 'R3', isMarried: true, birthDate: new Date(1987, 1, 1), birthCity: 34, sex: 'Female', type: 'child', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35), parentId: 3 },
      { id: 5, name: 'e', surname: 'baran', station: 'S0',  robot: 'R4', isMarried: false, birthDate: new Date(1987, 1, 1), birthCity: 34, sex: 'Female', type: 'child', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35) },
      { id: 6, name: 'f', surname: 'baran', station: 'S0',  robot: 'R5', isMarried: true, birthDate: new Date(1989, 1, 1), birthCity: 34, sex: 'Female', type: 'child', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35), parentId: 5 },
      { id: 7, name: 'f', surname: 'baran', station: 'S0',  robot: 'R6', isMarried: true, birthDate: new Date(1989, 1, 1), birthCity: 0, sex: 'Female', type: 'child', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35), parentId: 5 },
      { id: 8, name: 'f', surname: 'baran', station: 'S0',  robot: 'R7', isMarried: true, birthDate: new Date(1989, 1, 1), birthCity: 34, sex: 'Female', type: 'child', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35), parentId: 5 },
      { id: 9, name: 'f', surname: 'baran', station: 'S1',  robot: 'R4', isMarried: true, birthDate: new Date(1989, 1, 1), birthCity: 34, sex: 'Female', type: 'child', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35), parentId: 5 },
      { id: 10, name: 'f', surname: 'baran', station: 'S1', robot: 'R5', isMarried: true, birthDate: new Date(1989, 1, 1), birthCity: 34, sex: 'Female', type: 'child', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35), parentId: 5 },
      { id: 11, name: 'f', surname: 'baran', station: 'S2', robot: 'R0', isMarried: true, birthDate: new Date(1989, 1, 1), birthCity: 34, sex: 'Female', type: 'child', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35), parentId: 5 },
      { id: 12, name: 'f', surname: 'baran', station: 'S2', robot: 'R1', isMarried: true, birthDate: new Date(1989, 1, 1), birthCity: 34, sex: 'Female', type: 'child', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35), parentId: 5 },
      { id: 13, name: 'f', surname: 'baran', station: 'S2', robot: 'R2', isMarried: true, birthDate: new Date(1989, 1, 1), birthCity: 34, sex: 'Female', type: 'child', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35), parentId: 5 },
      { id: 14, name: 'f', surname: 'baran', station: 'S2', robot: 'R3', isMarried: true, birthDate: new Date(1989, 1, 1), birthCity: 34, sex: 'Female', type: 'child', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35), parentId: 5 },
      { id: 15, name: 'f', surname: 'baran', station: 'S2', robot: 'R5', isMarried: true, birthDate: new Date(1989, 1, 1), birthCity: 34, sex: 'Female', type: 'child', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35), parentId: 5 },
      { id: 16, name: 'f', surname: 'baran', station: 'S2', robot: 'R6', isMarried: true, birthDate: new Date(1989, 1, 1), birthCity: 34, sex: 'Female', type: 'child', insertDateTime: new Date(2018, 1, 1, 12, 23, 44), time: new Date(1900, 1, 1, 14, 23, 35), parentId: 5 },

    ],
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Firstname', field: 'surname' },
      //{ title: 'Station', field: 'station', lookup: { 0: 'S0', 1: 'S1', 2: 'S2' } },
      //{ title: 'Robot', field: 'robot', lookup: { 0: 'R0', 1: 'R1', 2: 'R2', 3: 'R3', 4: 'R4', 5: 'R5', 6: 'R6', 7: 'R7' } },
      { title: 'Station', field: 'station', doLookup: true },
      { title: 'Robot', field: 'robot',  doLookup: true },
      { title: 'Married', field: 'isMarried', type: 'boolean' },
      { title: 'Sex', field: 'sex', disableClick: true, readonly: true },
      { title: 'Type', field: 'type', removable: false },
      { title: 'Birth Date', field: 'birthDate', type: 'date' },
      { title: 'Birth City', field: 'birthCity', lookup: { 34: 'İstanbul', 0: 'city2' } },
      { title: 'Timestamp', field: 'insertDateTime', type: 'datetime' },
      { title: 'Time', field: 'time', type: 'time' }
    ],
    remoteColumns: [
      { title: 'Avatar', field: 'avatar', render: rowData => <img style={{ height: 36, borderRadius: '50%' }} src={rowData.avatar} /> },
      { title: 'Id', field: 'id' },
      { title: 'First Name', field: 'first_name' },
      { title: 'Last Name', field: 'last_name' },
    ]
  }

  render() {
    //console.log('Re-Rendering MaterialTable');
    return (
      <MuiThemeProvider theme={theme}>
        <div style={{ maxWidth: '100%', direction }}>
          <Grid container>
            <Grid item xs={12}>
              <MaterialTable
                tableRef={this.tableRef}
                columns={this.state.columns}
                data={this.state.data}
                title="Demo Title"
                //parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}
                options={{
                  //selection: true,
                  //initialPage: 1,
                  pageSize: 20,
                  filtering: true,
                  //grouping: true,
                }}
              />
            </Grid>
          </Grid>
          <button
            onClick={() => {
              //this.tableRef.current.onQueryChange();
              this.tableRef.current.getLog('Testing Refs');
            }}
          >
            ok
          </button>

        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();
