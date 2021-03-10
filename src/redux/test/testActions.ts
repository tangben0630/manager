const ADDSIGN = 'ADDSIGN'

interface Sign {
  type: string,
  payload: string
}

export const addSignFn = () => {
  return {
    type: ADDSIGN,
  }
}