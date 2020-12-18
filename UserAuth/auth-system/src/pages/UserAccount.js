import React from 'react';
import { useAuth } from '../use-auth.js';

function UserAccount() {
    let auth = useAuth();
    if (!auth.isLoaded) {
        return <h1>Loading...</h1>
    } else {
        return (
            <div>
                <h1>User Account </h1>
                <p>{auth.user.username}</p>
            </div>
        )
    }
}

export default UserAccount;