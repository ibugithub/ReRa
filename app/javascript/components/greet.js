import React, { useEffect } from 'react';
import { useDispatch, useSelector} from "react-redux";
import {fetchMessage} from "../redux/reducers/greetSlice";

function Greeting() {
  const dispatch = useDispatch();
  const message = useSelector(state => state.greeting.message);

  useEffect(() => {
    dispatch(fetchMessage())
        .then((data) => {
        })
        .catch((error) => {
        });
  }, [dispatch]);

  return (
      <div>
        <h1>Random Greeting:</h1>
        <p>{message || 'Default message'}</p>
      </div>
  );
}

export default Greeting;