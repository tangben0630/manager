
export const CH = 'CH'

export interface changeType {
  type: string,
  payload: string
}

export const changeFn = (lan: string, type): changeType => {
  return {
    type: type,
    payload: lan
  }
}

