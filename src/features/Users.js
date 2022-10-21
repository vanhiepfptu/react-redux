import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../shared/ListOfUser";
export const userSlice = createSlice({
    name: "users",
    initialState: { value: UsersData },
    reducers: {
        addUser: (state, action) => { //addUser function
            state.value.push(action.payload);
        },
        deleteUser: (state, action) => { //delete User function
            state.value = state.value.filter((users) => users.id !== action.payload.id);
        },
        updateUsername: (state, action) => {
            state.value.map((users) => {
                if (users.id === action.payload.id) {
                    users.username = action.payload.username;
                }
            });
        }

    }
});
export const selectUser = (state) => state.users.value
export default userSlice.reducer;
export const { addUser, deleteUser, updateUsername } = userSlice.actions;