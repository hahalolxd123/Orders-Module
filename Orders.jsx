import React, { useState, useEffect } from 'react';
import './Orders.css'; // Import CSS file for styling

function Orders({ onClose }) {
  // State to store the list of orders
  const [orders, setOrders] = useState([]);

  // Function to fetch the list of orders from the server
  const fetchOrders = () => {
    // Mock data for demonstration
    const mockOrders = [
      { id: 1, storeName: 'Store A', location: 'City A', time: '10:00 AM', date: '2024-05-20', price: '$50.00', customerName: 'John Doe' },
      { id: 2, storeName: 'Store B', location: 'City B', time: '11:30 AM', date: '2024-05-21', price: '$35.00', customerName: 'Jane Smith' },
      { id: 3, storeName: 'Store C', location: 'City C', time: '09:45 AM', date: '2024-05-22', price: '$80.00', customerName: 'Michael Johnson' },
      { id: 4, storeName: 'Store D', location: 'City D', time: '12:15 PM', date: '2024-05-23', price: '$120.00', customerName: 'Emily Brown' },
      { id: 5, storeName: 'Store E', location: 'City E', time: '03:30 PM', date: '2024-05-24', price: '$25.00', customerName: 'David Wilson' },
    ];

    // Set the fetched orders data to the state
    setOrders(mockOrders);
  };

  // Fetch orders data when the component mounts
  useEffect(() => {
    fetchOrders();
  }, []); // Empty dependency array to only run once when the component mounts

  return (
    <div className="orders-container">
      <h1>Orders</h1>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Store Name</th>
            <th>Location</th>
            <th>Time</th>
            <th>Date</th>
            <th>Price</th>
            <th>Customer Name</th>
          </tr>
        </thead>
        <tbody>
          {/* Render list of orders */}
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.storeName}</td>
              <td>{order.location}</td>
              <td>{order.time}</td>
              <td>{order.date}</td>
              <td>{order.price}</td>
              <td>{order.customerName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
