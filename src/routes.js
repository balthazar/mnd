import Home from 'components/Home'
import Biography from 'components/Biography'
import Texts from 'components/Texts'
import Work from 'components/Work'
import News from 'components/News'

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
    path: '/texts',
    exact: true,
    component: Texts,
  },
  {
    path: '/news',
    exact: true,
    component: News,
  },
  {
    path: '/works/:id',
    exact: true,
    component: Work,
  },
]
