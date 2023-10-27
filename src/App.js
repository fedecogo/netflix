import './App.css';
import MyHome from './components/MyHome';
import MyNavBar from './components/MyNavBar'
import MyFooter from './components/MyFooter'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyHome2 from './components/MyHome2';
import MyHome3 from './components/MyHome3';
// import MyNavBar from './components/MyNavBar'

function App() {
  return (
    <div >
      <header >
        <MyNavBar/>
      </header>
      <main>
        <MyHome3/>
        <MyHome/>
        <MyHome2/>

      </main>
      <MyFooter/>
    </div>
  );
}

export default App;
