import logo from './logo.svg';
import './App.css';
import Header from './components/Heading';
import Bag from './components/bag';
import Btn from './components/btn';
import ModeToggler from './components/modeToggler';

// function Header(){
//   return <h1>Hello Worlds</h1>
// }

function App(props) {
  return (
  <div>
    {/* passed props and a component named header in h1 */}
    <h1>{props.title} <Header/></h1>

    {/* bag component is used to print props children */}
    <h2><Bag/></h2>

    {/* Calling Handle Click Function */}
    <Btn/>

    {/* User Events */}
    <ModeToggler/>
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
