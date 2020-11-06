import { combineReducers } from "redux";
import Notes from "./NoteReducer";
import User from "./UserReducer";
import Paginator from "./PaginatorReducer";

export default combineReducers({ Notes, User, Paginator });
