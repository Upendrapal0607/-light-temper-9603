
import { createContext, useState } from "react";

export  const AuthContext= createContext()

function AuthContextProvider({children}) {
const [isAuth,setisAuth]=useState(true)
const [tocken,setTocken]=useState('')
const [name,setname]=useState('')
const [singleProduct,setSingleProduct]=useState([{}])
const [data2,setData2]=useState([1,2,3])

 return( <AuthContext.Provider value={{setData2,setSingleProduct,singleProduct,data2,name,setname,isAuth,setisAuth,setTocken,tocken}}>
        {children}
      </AuthContext.Provider>
    
 )
}

export default AuthContextProvider;
