import { combineReducers } from 'redux';
import { SET_VIDEO_DESC } from '../actions'

type ambVideoPageState={ desc: string }

const reducers = combineReducers({
  ambVideoPage: (state: ambVideoPageState = { desc: '' }, action:{ type: string, payload: any }) => {
  switch (action.type) {
    case SET_VIDEO_DESC:
      return { ...state, desc: action.payload }
    default:
      return state;
  }
}
})

export default reducers