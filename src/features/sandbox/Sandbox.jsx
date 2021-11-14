import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { decrement, increment } from './testReducer';

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
    </>
  );
};

export default Sandbox;
