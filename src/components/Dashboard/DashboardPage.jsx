// import React, { useState } from 'react';
// import { Bar, Line, Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement } from 'chart.js';
// import "./DashboardPage.css";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   LineElement,
//   PointElement
// );

// const DashboardPage = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   // Sample chart data
//   const barChartData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//     datasets: [
//       {
//         label: 'Sales',
//         data: [30, 40, 60, 70, 50],
//         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//       },
//     ],
//   };

//   const lineChartData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//     datasets: [
//       {
//         label: 'Revenue',
//         data: [100, 120, 130, 140, 160],
//         borderColor: 'rgba(255, 99, 132, 0.6)',
//         fill: false,
//       },
//     ],
//   };

//   const pieChartData = {
//     labels: ['Product A', 'Product B', 'Product C'],
//     datasets: [
//       {
//         label: 'Product Share',
//         data: [40, 35, 25],
//         backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
//       },
//     ],
//   };

//   return (
//     <div className="dashboard-container">
//       {/* Sidebar */}
//       <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
//         <ul className="menu">
//           <li>
//             <button className="dropdown-btn">Menu</button>
//             <ul className="dropdown-content">
//               <li>Dashboard</li>
//               <li>User</li>
//             </ul>
//           </li>
//         </ul>
//       </div>

//       <div className="dashboard-content">
//         <h2>Dashboard</h2>
//         <div className="charts">
//           <div className="chart">
//             <h3>Bar Chart 1</h3>
//             <Bar data={barChartData} />
//           </div>
//           <div className="chart">
//             <h3>Bar Chart 2</h3>
//             <Bar data={barChartData} />
//           </div>
//           <div className="chart">
//             <h3>Line Chart 1</h3>
//             <Line data={lineChartData} />
//           </div>
//           <div className="chart">
//             <h3>Line Chart 2</h3>
//             <Line data={lineChartData} />
//           </div>
//           <div className="chart">
//             <h3>Pie Chart 1</h3>
//             <Pie data={pieChartData} />
//           </div>
//           <div className="chart">
//             <h3>Pie Chart 2</h3>
//             <Pie data={pieChartData} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;
import React, { useState, useMemo } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement } from 'chart.js';
import { useTable, usePagination } from 'react-table'; // Import for Table functionality
import './DashboardPage.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement
);

const DashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [view, setView] = useState('charts'); // 'charts' or 'users'
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  // Chart Data
  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [30, 40, 60, 70, 50],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Revenue',
        data: [100, 120, 130, 140, 160],
        borderColor: 'rgba(255, 99, 132, 0.6)',
        fill: false,
      },
    ],
  };

  const pieChartData = {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [
      {
        label: 'Product Share',
        data: [40, 35, 25],
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
      },
    ],
  };

  const data = React.useMemo(
    () => [
      { name: 'John Doe', phone: '123-456-7890', email: 'john.doe@example.com', role: 'Admin' },
      { name: 'Jane Smith', phone: '234-567-8901', email: 'jane.smith@example.com', role: 'User' },
      { name: 'Bob Johnson', phone: '345-678-9012', email: 'bob.johnson@example.com', role: 'Admin' },
      { name: 'Alice Williams', phone: '456-789-0123', email: 'alice.williams@example.com', role: 'User' },
      { name: 'Charlie Brown', phone: '567-890-1234', email: 'charlie.brown@example.com', role: 'User' },
      { name: 'Diana White', phone: '678-901-2345', email: 'diana.white@example.com', role: 'Admin' },
      { name: 'Bob Johnson', phone: '345-678-9012', email: 'bob.johnson@example.com', role: 'Admin' },
      { name: 'Allan', phone: '456-789-0123', email: 'alice.williams@example.com', role: 'User' },
      { name: 'Charles', phone: '567-890-1234', email: 'charlie.brown@example.com', role: 'User' },
      { name: 'Dennis', phone: '678-901-2345', email: 'diana.white@example.com', role: 'Admin' },
      { name: 'Bobby', phone: '345-678-9012', email: 'bob.johnson@example.com', role: 'Admin' },
      { name: 'Jecob', phone: '456-789-0123', email: 'alice.williams@example.com', role: 'User' },
      { name: 'Benny', phone: '567-890-1234', email: 'charlie.brown@example.com', role: 'User' },
      { name: 'Sweety', phone: '678-901-2345', email: 'diana.white@example.com', role: 'Admin' },
      { name: 'Smith', phone: '345-678-9012', email: 'bob.johnson@example.com', role: 'Admin' },
      { name: 'Victor', phone: '456-789-0123', email: 'alice.williams@example.com', role: 'User' },
      { name: 'Sunny', phone: '567-890-1234', email: 'charlie.brown@example.com', role: 'User' },
      { name: 'Mith', phone: '678-901-2345', email: 'diana.white@example.com', role: 'Admin' },
      { name: 'Scoopy', phone: '345-678-9012', email: 'bob.johnson@example.com', role: 'Admin' },
      { name: 'Famance', phone: '456-789-0123', email: 'alice.williams@example.com', role: 'User' },
      { name: 'Fiacy', phone: '567-890-1234', email: 'charlie.brown@example.com', role: 'User' },
      { name: 'Whitey', phone: '678-901-2345', email: 'diana.white@example.com', role: 'Admin' },
      { name: 'Johny', phone: '345-678-9012', email: 'bob.johnson@example.com', role: 'Admin' },
      { name: 'Jimmy', phone: '456-789-0123', email: 'alice.williams@example.com', role: 'User' },
      { name: 'Robert', phone: '567-890-1234', email: 'charlie.brown@example.com', role: 'User' },
      { name: 'Villams', phone: '678-901-2345', email: 'diana.white@example.com', role: 'Admin' },
      { name: 'George', phone: '345-678-9012', email: 'bob.johnson@example.com', role: 'Admin' },
      { name: 'Elsbath', phone: '456-789-0123', email: 'alice.williams@example.com', role: 'User' },
      { name: 'Juvin', phone: '567-890-1234', email: 'charlie.brown@example.com', role: 'User' },
      { name: 'Jedlin', phone: '678-901-2345', email: 'diana.white@example.com', role: 'Admin' },
    ],
    []
  );

  // Columns for table
  const columns = React.useMemo(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Phone No', accessor: 'phone' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Role', accessor: 'role' },
    ],
    []
  );

  // Use useMemo to avoid unnecessary re-renders when search term changes
  const filteredData = useMemo(
    () => data.filter(row => row.name.toLowerCase().includes(searchTerm.toLowerCase())),
    [data, searchTerm] // Only re-filter when data or searchTerm changes
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data: filteredData, // Use filtered data for the table
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul className="menu">
          <li className='menu'>Menu</li>
          <button className="dropdown-btn" onClick={() => setView('charts')}>Dashboard</button>
          <button className="dropdown-btn" onClick={() => setView('users')}>User</button>
        </ul>
      </div>

      <div className="dashboard-content">
        <h2>{view === 'charts' ? 'Dashboard' : 'User Table'}</h2>

        {/* Render Charts */}
        {view === 'charts' && (
          <div className="charts">
            <div className="chart">
              <h3>Bar Chart 1</h3>
              <Bar data={barChartData} />
            </div>
            <div className="chart">
              <h3>Bar Chart 2</h3>
              <Bar data={barChartData} />
            </div>
            <div className="chart">
              <h3>Line Chart 1</h3>
              <Line data={lineChartData} />
            </div>
            <div className="chart">
              <h3>Line Chart 2</h3>
              <Line data={lineChartData} />
            </div>
            <div className="chart">
              <h3>Pie Chart 1</h3>
              <Pie data={pieChartData} />
            </div>
            <div className="chart">
              <h3>Pie Chart 2</h3>
              <Pie data={pieChartData} />
            </div>
          </div>
        )}

        {/* Render User Table */}
        {view === 'users' && (
          <div className="user-table">
            {/* Search input */}
            <input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <table {...getTableProps()}>
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map(row => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="pagination">
              <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>First</button>
              <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
              <span>Page {pageIndex + 1} of {pageCount}</span>
              <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
              <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>Last</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
