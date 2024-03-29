import './App.css';
import Header from './components/Heading';
import Bag from './components/bag';
import Btn from './components/btn';
import ModeToggler from './components/modeToggler';
import UseStateExample from './components/useStateExample';
import UseReducer from './components/useReducer';
import NavigationExampleComponent from './components/NavigationExampleComponent';
import { Link, Route, Routes } from 'react-router-dom';
import ConditionalRendering from './components/ConditionalRendering';
import MediaUse from './components/MediaUse';
import DessertsList from './components/dessertList';
import PrevStateFunction from './advReactComponents/prevStateFunction';
import AppTwo from './advReactComponents/Test';
import FeedbackForm from './advReactComponents/FeedbackFormTest';

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

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

    {/* UseState() Practice Example */}
    <UseStateExample/>

    {/* UseReducer() Super Powered UseState Practice Example */}
    <UseReducer/>

    <hr/>

    {/* First Install BrowerRouter Library in index.js */}
    {/* For Navigation First You Have to Add App.js Component inside of BrowerRouter Tag in index.js file */}

      {/* Navbar */}
      <nav style={{textalign:"center",justifyContent:"center", backgroundColor:"lightblue", padding:"20px"}}>
        <Link to="/" className='nav-item'>Home</Link> &nbsp;
        <Link to="/Navigation" className='nav-item'>Navigate to NavigationExampleComponent</Link>
      </nav>

      <h2>Content below will be updated</h2>
      
      {/* Components/Pages */}
      <Routes>
        <Route path="/Navigation" element={<NavigationExampleComponent/>}/>
      </Routes>
    
    <br/>
    <hr/>

    {/* Render according to condition true or false */}

    <ConditionalRendering/>

    <br/>
    <hr/>

    {/* Using assets such as Image, Video, Audio and also the React Player Package for social media platforms */}

    <MediaUse/>

    <br/>
    <hr/>

    {/* Print a List with Map and Using Filter and Sort Method on it */}

    <h1 style={{textAlign:"center"}}>Print a List with Map and Using Filter and Sort Method on it</h1>

    <DessertsList data={desserts} />

    <br/>
    <hr/>

    {/* Update Next states only by keeping the Previous State same using prevState() function */}

    <h1 style={{textAlign:"center"}}>PrevState Function</h1>

    <PrevStateFunction />

    <br/>
    <hr/>

    {/* For Simple Testing using Jest */}

    <AppTwo/>

    <br/>
    <hr/>

    {/* For Form Testing using Jest */}

    <FeedbackForm/>

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
