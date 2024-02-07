import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import '../css/MyAccount.css';

const MyAccount = () => {
    const [selectedItem, setSelectedItem] = useState('Account');

    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
    };

    return (
        <div className="my-account-container">
            <div className="title-section">
                <h1>My Account</h1>
            </div>
            <div className="body-section">
                <div className="left-section">
                    <div className="avatar-section">
                        <Avatar alt="Avatar" src="/path/to/avatar.jpg" />
                        <p className="name">Devesh Kundu</p>
                    </div>
                    <div className="navigation-section">
                        <p className={selectedItem === 'Account' ? 'selected' : ''} onClick={() => handleItemClick('Account')}>Account</p>
                        <p className={selectedItem === 'Address' ? 'selected' : ''} onClick={() => handleItemClick('Address')}>Address</p>
                        <p className={selectedItem === 'Orders' ? 'selected' : ''} onClick={() => handleItemClick('Orders')}>Orders</p>
                        <p className={selectedItem === 'Log Out' ? 'selected' : ''} onClick={() => handleItemClick('Log Out')}>Log Out</p>
                    </div>
                </div>
                <div className="right-section">
                    <div className="details-section">
                        <form>
                            <h2>Account Details</h2>
                            <div className="input-group">
                                <label htmlFor="first-name">First Name *</label>
                                <input id="first-name" type="text" placeholder="First name" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="last-name">Last Name *</label>
                                <input id="last-name" type="text" placeholder="Last name" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="display-name">Display Name *</label>
                                <input id="display-name" type="text" placeholder="Display name" />
                                <p className="info-text"><i>This will be how your name will be displayed in the account section and in reviews</i></p>
                            </div>
                            <div className="input-group">
                                <label htmlFor="email">Email *</label>
                                <input id="email" type="email" placeholder="Email address" />
                            </div>
                            <h2>Password</h2>
                            <div className="input-group">
                                <label htmlFor="old-password">Old Password *</label>
                                <input id="old-password" type="password" placeholder="Old password" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="new-password">New Password *</label>
                                <input id="new-password" type="password" placeholder="New password" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="repeat-password">Repeat New Password *</label>
                                <input id="repeat-password" type="password" placeholder="Repeat New password" />
                            </div>
                            <Button variant="contained" color="primary" className="save-btn">Save Changes</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;
