import React, { Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from './store'
import routes from './router'
import { changeNameAction } from './store/modules/counters'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

function App() {
  const { count, name } = useAppSelector((state) => {
    return {
      count: state.counter.count,
      name: state.counter.name
    }
  })

  const dispatch = useAppDispatch()
  const handleChangeName = () => {
    dispatch(changeNameAction('jianlai'))
  }

  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="loading">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </div>
  )
}

export default App
