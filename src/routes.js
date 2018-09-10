import Home from 'components/Home'
import Biography from 'components/Biography'
import Work from 'components/Work'

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/bio',
    exact: true,
    component: Biography,
  },
  {
    path: '/works/:id',
    exact: true,
    component: Work,
  },
]
