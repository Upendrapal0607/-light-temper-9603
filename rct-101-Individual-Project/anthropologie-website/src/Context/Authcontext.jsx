
import { createContext, useState } from "react";

export  const AuthContext= createContext()

function AuthContextProvider({children}) {
const [isAuth,setisAuth]=useState(true)
const [tocken,setTocken]=useState('')
const [name,setname]=useState('')

 return( <AuthContext.Provider value={{name,setname,isAuth,setisAuth,setTocken,tocken}}>
        {children}
      </AuthContext.Provider>
    
 )
}

export default AuthContextProvider;
