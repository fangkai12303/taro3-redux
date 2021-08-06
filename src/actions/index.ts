export const SET_VIDEO_DESC = 'SET_VIDEO_DESC'

export function setDescription(desc:string) {
  return {
    type: SET_VIDEO_DESC,
    payload: desc
  };
}