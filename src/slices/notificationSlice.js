import { createSlice } from '@reduxjs/toolkit';


const notificationSlice = createSlice({
    name: "notification",
    initialState: {
        notyInfo: {
            title: "",
            message: ""
        },
        notyState: false
    },
    reducers: {
        showNotification: (state) => {
            state.notyState = true;
        },
        hideNotification: (state) => {
            state.notyState = false
        },
        setNotificationInfo:(state,{payload})=>{
            state.notyInfo.title = payload.title;
            state.notyInfo.message = payload.message;
        }
    }
});

export const {
    hideNotification,
    showNotification,
    setNotificationInfo
} = notificationSlice.actions;


export default notificationSlice.reducer;