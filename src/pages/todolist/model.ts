// 内置好的ts接口
import { Effect, Reducer, Subscription } from 'umi';
import { getRemoteList } from './service';

// 定义了model的state的类型
export interface IndexModelState {
  name: string;
  list: string[];
}

// 定义了model的类型
export interface IndexModelType {
  namespace: 'todolist';
  state: IndexModelState;
  effects: {
    asyncGetList: Effect;
  };
  reducers: {
    getList: Reducer;
    addList: Reducer;
    deleteList: Reducer;
  };
  subscriptions: { setup: Subscription };
}

const IndexModel: IndexModelType = {
  // 定义模块
  namespace: 'todolist',
  // store的数据
  state: {
    name: 'todolist',
    list: []
  },
  // 写同步方法的
  reducers: {
    // 获取列表
    getList(state, {payload}) {
      return {
        ...state,
        list: payload
      };
    },
    // 添加列表
    addList(state, {payload}) {
      return {
        ...state,
        list: state.list.concat(payload)
      }
    },
    // 删除列表
    deleteList(state, {payload}) {
      console.log(payload)
      let newList = state.list.filter((item: string) => {
        return item !== payload
      })
      return {
        ...state,
        list: newList
      }
    }
  },
  // 写异步方法
  effects: {
    *asyncGetList({ payload }, { call, put }) {
      const res = yield call(getRemoteList)
      yield put({
        type: 'getList',
        payload: res
      })
    },
  },
  // 订阅
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/todolist') {
          dispatch({
            type: 'asyncGetList',
          })
        }
      });
    }
  }
};
export default IndexModel;