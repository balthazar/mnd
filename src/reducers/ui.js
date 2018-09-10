import { handleActions, createAction } from 'redux-actions'

export const disableAnimate = createAction('DISABLE_ANIMATE')

export default handleActions(
  {
    DISABLE_ANIMATE: state => ({ ...state, animateHome: false }),
  },
  {
    animateHome: true,
  },
)
