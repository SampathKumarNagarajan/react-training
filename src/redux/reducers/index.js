import { combineReducers } from "redux";
import Notes from "./NoteReducer";
import User from "./UserReducer";
import Paginator from "./PaginatorReducer";
import Audio from "./AudioReducer";

export default combineReducers({ Notes, User, Paginator, Audio});
