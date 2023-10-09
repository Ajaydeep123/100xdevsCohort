
import { userState } from "../atoms/user";
import {selector} from "recoil";

export const userEmailState = selector({
  key: 'userEmailState',
  get: ({get}) => {
    const state = get(userState);

    return state.userEmail;
  },
});
