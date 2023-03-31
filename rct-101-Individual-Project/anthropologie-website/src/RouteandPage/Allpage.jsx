// import {Link,NavLink} from 'react-router-dom'

// export default function Allpage() {

//     let link=[
//         {link:'/',text:'HOME'},
//         {link:'/About',text:'ABOUTE'},
//         {link:'/Contact',text:'CONTACT' },
//         {link:'/User' ,text:'USER'},
//         {link:'/Product' ,text:'PRODUCT'}
//     ]
//     const style={
//         display: 'flex',
//         justifyContent: 'space-around'
       
//     }

//     const defaultStyle={
//         textDecoration: 'none',
//         color:'black'
//     }
   
//     const ActiveStyle={
//         textDecoration: 'none',
//         color:'red'
//     }
   
//     return (
//         <div style={style}>
//    {/* {link.map((user)=><Link style={{}} key={user.link} to={user.link}>{user.text}</Link>)} */}
//    {link.map((user)=><NavLink style={(({isActive})=>isActive?ActiveStyle:defaultStyle)} key={user.link} to={user.link}>{user.text}</NavLink>)}
//         </div>
       
//     )
// }