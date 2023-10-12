import React from 'react';
import VehicleList from './components/VehicleList';
import './VehicleList.css'

function App() {
    // const data = [

    //     {
    //         "id": 1,
    //         "make": "Toyato",
    //         "model":"Corolla",
    //         "year": 2020,
    //         "mileage": 15000,
    //         "price":18000,
    //         "images":"https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Toyota-Glanza-060520221539.jpg&w=872&h=578&q=75&c=1",
    //         "status":"AVAILABLE",
    //         "isFavorite": false
    //     },
    //     {
    //         "id": 2,
    //         "make": "Toyato",
    //         "model":"Corolla",
    //         "year": 2020,
    //         "mileage": 15000,
    //         "price":18000,
    //         "images":"https://imgd.aeplcdn.com/0X0/n/cw/ec/51909/a4-exterior-right-front-three-quarter-2.jpeg?q=80",
    //         "status":"AVAILABLE",
    //         "isFavorite": false
    //     },
    //     {
    //         "id": 3,
    //         "make": "Toyato",
    //         "model":"Corolla",
    //         "year": 2020,
    //         "mileage": 15000,
    //         "price":18000,
    //         "images":"https://images.hindustantimes.com/auto/img/2023/03/21/1600x900/rolls-royce-black_1679377493896_1679377772569_1679377772569.jpg",
    //         "status":"AVAILABLE",
    //         "isFavorite": false
    //     },
    // ];
    // const columns = [
    //     {
    //         Header: 'Images',
    //         accessor: 'images',
    //         Cell: ({ value }) => (
    //           <img src={value} alt="Vehicle" style={{ width: '100px' }} />
    //         ),
    //      },
    //     {
    //       Header: 'Make',
    //       accessor: 'make',
    //     },
    //     {
    //       Header: 'Model',
    //       accessor: 'model',
    //     },
    //     {
    //         Header: 'Price',
    //         accessor: 'price',
    //     },
    //     {
    //       Header: 'Year',
    //       accessor: 'year',
    //     },
    //     {
    //         Header: 'Mileage',
    //         accessor: 'mileage',
    //     },
    //     {
    //         Header: 'Status',
    //         accessor: 'status',
    //     },
    //     {
    //         Header: 'IsFavorite',
    //         accessor: 'isFavorite',
    //     },


    //   ];
    
  return (
    <div className="App">
      <h1 className="heading">AutoHub - Vehicle Listings</h1>
      {/* <VehicleList columns={columns} data={data}/> */}
      <VehicleList/>

    </div>
  );
}

export default App;
