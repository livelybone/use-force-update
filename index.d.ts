/**
 * @desc 通过 useReducer 实现，返回一个元组，第一个元素表示强制更新的次数 forceUpdateCount，第二个元素是 forceUpdate 函数
 *
 * @desc Realized by useReducer
 *
 * @return [number, () => void]
 *         The first element represents the count number of forced updates
 *         The second element is the forceUpdate method
 * */
declare function useForceUpdate(): [number, () => void]

export default useForceUpdate
