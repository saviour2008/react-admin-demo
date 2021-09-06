import { INCREMENT } from '../constants';

export const increment = (data) => {
    return { type: INCREMENT, data };
};
// export const increment = (data) => {
//     return (dispatch) => {
//         dispatch(data);
//     };
// };
