
import './app.css'
import {
  LocationProvider,
  ErrorBoundary,
  Router,
  Route
} from 'preact-iso'
import Home from './routes/home'
import NotFound from './routes/not-found'
import Features from './routes/features'
import Login from './routes/login'
import Register from './routes/register'
import Pricing from './routes/pricing'
import Documentation from './routes/docs'
import About from './routes/about'
import Panel from './routes/panel'
import Tables from './routes/panel/tables'

export function App() {
  return (
    <LocationProvider>
      <ErrorBoundary onError={(e) => console.log(e)}>
        <Router>
          <Route path='/' component={Home} />
          <Route path='/features' component={Features} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/pricing' component={Pricing} />
          <Route path='/docs' component={Documentation} />
          <Route path='/about' component={About} />
          <Route path='/panel' component={Panel} />
          <Route path='/panel/tables' component={Tables} />
          <NotFound default />
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  )
}
