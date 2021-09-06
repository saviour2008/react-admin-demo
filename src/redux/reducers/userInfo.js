import { INCREMENT } from '../constants';

const initState = 0;
export default function userInfo(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case INCREMENT:
            return preState + data;
        default:
            return preState;
    }
}
