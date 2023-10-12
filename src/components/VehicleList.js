import { useState, useEffect } from "react";
import React  from "react";
import { useTable } from 'react-table';

const VechileList = () => {
    const [filter, setFilter] = useState('');

    const handleFilterChange = (event) => {
      setFilter(event.target.value);
    };
  
    const filteredData = data.filter((item) => {
      return (
        item.make.toLowerCase().includes(filter.toLowerCase()) ||
        item.model.toLowerCase().includes(filter.toLowerCase())
      );
    });
  
    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow,} = useTable({columns, data: filteredData,});
  

    return (  
    <div>
      <div className="filter-container">
  <input
    className="filter-input"
    type="text"
    placeholder="Filter by make or model"
    value={filter}
    onChange={handleFilterChange}
  />
</div>


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
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>

      </table>
      </div>
    )
}
const data = [

    {
        "id": 1,
        "make": "Toyato",
        "model":"Corolla",
        "year": 2020,
        "mileage": 15000,
        "price":200000,
        "images":"https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Toyota-Glanza-060520221539.jpg&w=872&h=578&q=75&c=1",
        "status":"AVAILABLE",
        "isFavorite": false
    },
    {
        "id": 2,
        "make": "Audi",
        "model":"Corolla",
        "year": 2020,
        "mileage": 15000,
        "price":188000,
        "images":"https://imgd.aeplcdn.com/0X0/n/cw/ec/51909/a4-exterior-right-front-three-quarter-2.jpeg?q=80",
        "status":"AVAILABLE",
        "isFavorite": false
    },
    {
        "id": 3,
        "make": "BMW",
        "model":"Corolla",
        "year": 2020,
        "mileage": 15000,
        "price":1445000,
        "images":"https://images.hindustantimes.com/auto/img/2023/03/21/1600x900/rolls-royce-black_1679377493896_1679377772569_1679377772569.jpg",
        "status":"AVAILABLE",
        "isFavorite": false
    },
    {
        "id": 4,
        "make": "Tata",
        "model":"Corolla",
        "year": 2020,
        "mileage": 15000,
        "price":100000,
        "images":"https://imgd.aeplcdn.com/664x374/n/cw/ec/149123/nexon-ev-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80&q=80",
        "status":"SOLD",
        "isFavorite": false
    },
    {
        "id": 5,
        "make": "Hundai",
        "model":"Corolla",
        "year": 2020,
        "mileage": 1115000,
        "price":18000,
        "images":"https://imgd.aeplcdn.com/664x374/n/cw/ec/149123/nexon-ev-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80&q=80",
        "status":"SOLD",
        "isFavorite": false
    },
];
const columns = [
    {
        Header: 'Images',
        accessor: 'images',
        Cell: ({ value }) => (
          <img src={value} alt="Vehicle" style={{ width: '100px' }} />
        ),
     },
    {
      Header: 'Make',
      accessor: 'make',

    },
    {
      Header: 'Model',
      accessor: 'model',
    },
    {
        Header: 'Price',
        accessor: 'price',
    },
    {
      Header: 'Year',
      accessor: 'year',
    },
    {
        Header: 'Mileage',
        accessor: 'mileage',
    },
    {
        Header: 'Status',
        accessor: 'status',
    },
    {
        Header: 'IsFavorite',
        accessor: 'isFavorite',


    },


  ];

export default VechileList

