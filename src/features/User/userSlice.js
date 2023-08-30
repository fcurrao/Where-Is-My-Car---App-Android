import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "User",
    initialState: {
        value: {
            email: "",
            idToken: "",
            localId: "",
            profileImage: "",
            location: {
                latitude: "",
                longitude: ""
            },
            location2: {
                latitude: "",
                longitude: ""
            },
        }
    },
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload
        },
        signOut: (state) => {
            state.value = {
                email: "",
                idToken: "",
                localId: "",
                profileImage: "",
                location: {
                    latitude: "",
                    longitude: ""
                },
                location2: {
                    latitude: "",
                    longitude: ""
                },
            }
        },
        saveImage: (state, action) => {
            state.value.profileImage = action.payload
        },
        setUserLocation: (state, action) => {
            state.value.location = action.payload
        },  
        setUserLocation2: (state, action) => {
            state.value.location2 = action.payload
        }
    }
})

export const {
    setUser, 
    signOut, 
    saveImage,
    setUserLocation,
    setUserLocation2
} = userSlice.actions

export default userSlice.reducer