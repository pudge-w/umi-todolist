import React, { FC } from 'react';
import { List, Typography } from 'antd';
import { useDispatch } from 'umi';

interface PageProps {
  // 两种表示数组的方式
  // data: Array<string>
  data: string[]
}

const Form: FC<PageProps> = ({data}) => {
  const dispatch = useDispatch();

  const deteleItem = (text: string) => {
    return (): void => {
      dispatch({
        type: 'todolist/deleteList',
        payload: text
      })
    }
  }

  return (
    <div>
      <List
        bordered
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Typography.Text mark>[ITEM]</Typography.Text> 
            {item} 
            <span onClick={deteleItem(item)}>x</span>
          </List.Item>
        )}
      />
    </div>
  )
}

export default Form;