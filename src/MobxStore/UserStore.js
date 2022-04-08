import { observable, action, set, toJS } from "mobx";
import API from "./api/index";

class User {
  @observable BASE_PHOTO_API = "http://localhost:3000/uploads/";
  
}
const UserStore = new User();
export default UserStore;