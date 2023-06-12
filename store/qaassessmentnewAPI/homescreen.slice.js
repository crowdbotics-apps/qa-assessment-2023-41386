import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { Alert } from "react-native"
import { apiService } from "./api"

export const getSpotList = createAsyncThunk("home/spotList", async data => {
  try {
    //   const response = await api.getAttendeeList(data.token, data.id)
    //   return response.data
  } catch (error) {
    Alert.alert("Error", error.message)
    throw new Error()
  }
})

export const getRetailList = createAsyncThunk(
  "home/getRetailList",
  async data => {
    try {
      //   const response = await api.getAttendeeList(data.token, data.id)
      //   return response.data
    } catch (error) {
      Alert.alert("Error", error.message)
      throw new Error()
    }
  }
)

export const getOffers = createAsyncThunk("home/getOffers", async data => {
  try {
    //   const response = await api.getAttendeeList(data.token, data.id)
    //   return response.data
  } catch (error) {
    Alert.alert("Error", error.message)
    throw new Error()
  }
})

const initialState = {
  token: null,
  spotList: {
    entities: [],
    api: {
      loading: "idle",
      error: null
    }
  },
  retailList: {
    entities: [],
    api: {
      loading: "idle",
      error: null
    }
  },
  offerList: {
    entities: [],
    api: {
      loading: "idle",
      error: null
    }
  }
}
const homescreenSlice = createSlice({
  name: "homescreen",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getSpotList.pending]: (state, action) => {
      if (state.spotList.api.loading === "idle") {
        state.spotList.api.loading = "pending"
        state.spotList.api.error = null
      }
    },
    [getSpotList.fulfilled]: (state, action) => {
      if (state.spotList.api.loading === "pending") {
        state.spotList.entities = action.payload.value
        state.spotList.api.loading = "idle"
      }
    },
    [getSpotList.rejected]: (state, action) => {
      if (state.spotList.api.loading === "pending") {
        state.spotList.api.error = action.error
        state.spotList.api.loading = "idle"
      }
    },
    [getRetailList.pending]: (state, action) => {
      if (state.retailList.api.loading === "idle") {
        state.retailList.api.loading = "pending"
        state.retailList.api.error = null
      }
    },
    [getRetailList.fulfilled]: (state, action) => {
      if (state.retailList.api.loading === "pending") {
        state.retailList.entities = action.payload.value
        state.retailList.api.loading = "idle"
      }
    },
    [getRetailList.rejected]: (state, action) => {
      if (state.retailList.api.loading === "pending") {
        state.retailList.api.error = action.error
        state.retailList.api.loading = "idle"
      }
    },

    [getOffers.pending]: (state, action) => {
      if (state.offerList.api.loading === "idle") {
        state.offerList.api.loading = "pending"
        state.offerList.api.error = null
      }
    },
    [getOffers.fulfilled]: (state, action) => {
      if (state.offerList.api.loading === "pending") {
        state.offerList.entities = action.payload.value
        state.offerList.api.loading = "idle"
      }
    },
    [getOffers.rejected]: (state, action) => {
      if (state.offerList.api.loading === "pending") {
        state.offerList.api.error = action.error
        state.offerList.api.loading = "idle"
      }
    }
  }
})

export default {
  getSpotList,
  getRetailList,
  getOffers,
  slice: homescreenSlice
}
