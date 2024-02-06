import React from 'react';
import Avatar from '@mui/material/Avatar';
import './css/MyAccount.css';

const MyAccount = () => {
    return (
      <div className="my-account-container">
        <div className="title-section">
          <h1>My Account</h1>
        </div>
        <div className="body-section">
          <div className="left-section">
            <div className="avatar-section">
              <Avatar alt="Avatar" src="/path/to/avatar.jpg" />
              <p>Devesh Kundu</p>
            </div>
            <div className="navigation-section">
              <p className="selected">Account</p>
              <p>Address</p>
              <p>Orders</p>
              <p>Log Out</p>
            </div>
          </div>
          <div className="right-section">
            <div className="details-section">
              <form>
                  <h2>Account Details</h2>
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                  <input type="text" placeholder="Display Name" />
                  <input type="email" placeholder="Email" />
              </form>
              <form>
                  <h2>Password</h2>
                  <input type="password" placeholder="Old Password" />
                  <input type="password" placeholder="New Password" />
                  <input type="password" placeholder="Repeat New Password" />
              </form>
              <button className="save-btn">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyAccount;
