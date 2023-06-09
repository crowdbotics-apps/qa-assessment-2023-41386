import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { mapErrorMessage } from "./utils"
import { Alert } from "react-native"
import { api } from "./api"
export const loginRequest = createAsyncThunk(
  "login/loginRequest",
  async payload => {
    try {
      const response = await api.apiLoginRequest(payload)
      console.log("repsone", response)
      
      return response.data
    } catch (error) {
      console.log("errr ;logj", error.response)
      Alert.alert("Error", error.message)
      throw new Error()
    }
  }
)
export const signupRequest = createAsyncThunk(
  "login/signupRequest",
  async payload => {
    try {
      const response = await api.apiSignupRequest(payload)
      return response.data
    } catch (error) {
      Alert.alert("Error", error.message)
      throw new Error()
    }
  }
)
export const logoutRequest = createAsyncThunk(
  "login/logoutRequest",
  async payload => {
    const response = await api.apiLogoutRequest(payload)
    return response.data
  }
)
export const getAuthUser = createAsyncThunk(
  "login/getAuthUser",
  async payload => {
    const response = await api.apiAuthUserRequest(payload)
    return response.data
  }
)
export const resetPassword = createAsyncThunk(
  "login/resetPassword",
  async payload => {
    try {
      const response = await api.apiResetPasswordRequest(payload)
      console.log("response", response)
      return response.data
    } catch (error) {
      console.log('ERR', error.response)
      Alert.alert("Error", error.message)
      throw new Error()
    }
  }
)
const initialState = {
  token: null,
  user: {},
  api: {
    loading: "idle",
    error: null
  }
}
export const slice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [loginRequest.pending]: state => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
        state.api.error = null
      }
    },
    [loginRequest.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.token = action.payload.token
        state.user = action.payload.user
        state.api.loading = "idle"
      }
    },
    [loginRequest.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = mapErrorMessage(action.error)
        state.api.loading = "idle"
      }
    },
    [signupRequest.pending]: state => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
        state.api.error = null
        state.token = null
      }
    },
    [signupRequest.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.user = action.payload
        state.api.loading = "idle"
      }
    },
    [signupRequest.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = mapErrorMessage(action.error)
        state.api.loading = "idle"
      }
    },
    [logoutRequest.pending]: state => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
        state.api.error = null
      }
    },
    [logoutRequest.fulfilled]: state => {
      if (state.api.loading === "pending") {
        return initialState
      }
    },
    [logoutRequest.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = mapErrorMessage(action.error)
        state.api.loading = "idle"
      }
    },
    [getAuthUser.pending]: state => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
        state.api.error = null
      }
    },
    [getAuthUser.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.user = action.payload
        state.api.loading = "idle"
        state.api.error = null
      }
    },
    [getAuthUser.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = mapErrorMessage(action.error)
        state.api.loading = "idle"
      }
    },
    [resetPassword.pending]: state => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
        state.api.error = null
      }
    },
    [resetPassword.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.user = action.payload
        state.api.loading = "idle"
        state.api.error = null
      }
    },
    [resetPassword.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = mapErrorMessage(action.error)
        state.api.loading = "idle"
      }
    }
  }
})
