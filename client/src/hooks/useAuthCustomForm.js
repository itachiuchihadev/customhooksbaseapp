import React, { useState } from 'react';
import { AuthService } from '../services/authService';

export const useAuthCustomForm = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const authenticate = () => {
        (async () => {
           const data = await AuthService.authenticate(userName, password).then(res => res);
           setIsAuthenticated(data.isAuthenticated??false);
           console.log("authenticated data : ", data);
        })();
    }

  return { userName, password, isAuthenticated, setUserName, setPassword, setIsAuthenticated, authenticate };
}