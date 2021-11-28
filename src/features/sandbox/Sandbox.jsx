import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { modalOpen } from '../../app/common/modals/modalSlice';
import { decrement, increment } from './testSlice';

const Sandbox = (props) => {
  const data = useSelector((state) => state.test.data);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Testing 123</h1>
      <h3>The data is: {data}</h3>
      <Button
        onClick={() => dispatch(increment(20))}
        content="Increment"
        color="green"
      />
      <Button
        onClick={() => dispatch(decrement(10))}
        content="Decrement"
        color="red"
      />
      <Button
        onClick={() =>
          dispatch(modalOpen({ modalType: 'TestModal', modalProps: { data } }))
        }
        content="Open Modal"
        color="teal"
      />
    </>
  );
};

export default Sandbox;
