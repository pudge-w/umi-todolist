// FC是一种组件的类型,表示函数组件
import React, { FC } from 'react';
// import { IndexModelState, ConnectProps, connect } from 'umi';
import { useSelector } from 'umi';

import Form from './components/Form';
import List from './components/List';

// interface PageProps extends ConnectProps {
//   // IndexModelState指的是model类型
//   todolist: IndexModelState;
// }

// const map = ({ todolist }: { todolist: IndexModelState }) => ({
//   todolist
// })

// FC表示组件类型 <PageProps>表示props的类型
const Home: FC = () => {
  // const {name, list} = todolist;
  const name = useSelector((state: any) => state.todolist.name);
  const list = useSelector((state: any) => state.todolist.list);
  return (
    <div className="todolist">
      <h2>{name}</h2>
      <Form />
      <List data={list}/>
    </div>
  )
}

// export default connect(map)(Home);
export default Home;

