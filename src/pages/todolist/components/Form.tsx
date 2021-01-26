import { FC, useState } from 'react';
import { Input } from 'antd';
import { useDispatch } from 'umi';
// import { IndexModelState, ConnectProps, connect } from 'umi';

// interface PageProps extends ConnectProps {
//   // IndexModelState指的是model类型
//   todolist: IndexModelState;
// }

// const map = ({ todolist }: { todolist: IndexModelState }) => ({
//   todolist
// })

const Form: FC = () => {
  const dispatch = useDispatch()
  const [textValue, setTextValue] = useState('');

  const inputChange = (e: any) => {
    setTextValue(e.target.value)
  }

  const handleKeyUp = (e: any) => {
    if (textValue && e.keyCode === 13) {
      // 改变state
      dispatch && dispatch({
        // type值需要加上模块名/
        type: 'todolist/addList',
        payload: textValue
      })
    }
  }

  return (
    <div>
      <Input 
        placeholder="Basic usage" 
        value={textValue} 
        onChange={inputChange} 
        onKeyUp={handleKeyUp}
      />
    </div>
  )
}

export default Form;