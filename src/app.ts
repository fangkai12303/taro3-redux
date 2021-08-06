import { Component } from 'react'
import './app.scss'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers'

const store = createStore(reducers)

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
      return (
        <Provider store={store}>
        {this.props.children}
        </Provider>
      )
  }
}

export default App
