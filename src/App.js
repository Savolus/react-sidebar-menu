import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Reports from './pages/Reports'
import Products from './pages/Products'
import Team from './pages/Team'
import Messages from './pages/Messages'
import Support from './pages/Support'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/reports' component={Reports}/>
          <Route path='/products' component={Products}/>
          <Route path='/team' component={Team}/>
          <Route path='/messages' component={Messages}/>
          <Route path='/support' component={Support}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;