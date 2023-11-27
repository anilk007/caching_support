import React from "react";

// Create a context for the user
const AuthContext = React.createContext({
    isLoggedIn : false
});



export default AuthContext;