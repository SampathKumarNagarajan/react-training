import { combineReducers } from "redux";
import Notes from "./NoteReducer";
import User from "./UserReducer";

export default combineReducers({ Notes, User });
