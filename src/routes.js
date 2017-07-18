import Home from 'components/Home'
import Cv from 'components/Cv'

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/cv',
    exact: true,
    component: Cv,
  },
]
