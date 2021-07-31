export const isEmail = value =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  )

// Currying
export const payloadCreator = asyncFunc => async (arg, thunkAPI) => {
  try {
    const response = await asyncFunc(arg)
    return response
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
}
