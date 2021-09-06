const initMasterData = '男';
export default function masterData(preState = initMasterData, action) {
    const { type, data } = action;
    switch (type) {
        case '0':
            return '女';
        case '1':
            return '男';
        default:
            return preState;
    }
    return {};
}
