import { BrowserRouter } from 'react-router-dom'
import { Router } from './general/router'
import { Provider } from 'react-redux'
import { store } from './state/store'

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className='h-full bg-red-50 p-4 lg:p-24'>
        <Router />
      </div>
    </BrowserRouter>
  </Provider>
)
