import logo from './logo.svg';
import './App.css';
import Header from './Heading';
import Bag from './bag';
import Btn from './btn';

// function Header(){
//   return <h1>Hello Worlds</h1>
// }

function App(props) {
  return (
  //passed props and a component named header in h1
  <div>
    <h1>{props.title} <Header/></h1>
    <h2><Bag/></h2>
    <Btn/>
  </div>
  )
}

// function App(props) {
//   const styles={
//     color:"beige",
//     backgroundColor:"lightblue"
//   }
//   return (

//       <div className="promo-section">
//           <div>
//             {/* //inline CSS */}
//               <h1
//               style={{color:"beige",backgroundColor:"blue"}}
//               >shahbaz</h1>
//           </div>
//           <div>
//               {/* styled using JS variable */}
//               <h2 style={styles}>shahbaz2</h2>
//           </div>
//           <div>
//               {/* styled using app.css file */}
//               <h3 className='h3styles'>shahbaz2</h3>
//           </div>
//       </div>
//   );
// }

export default App;
