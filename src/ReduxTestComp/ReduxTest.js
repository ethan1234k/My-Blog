import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

// class ReduxTest extends Component {
//     // const [testNum, setTestNum] = useState(this.props.testNum);
//     render() {
//         return (
//             <div>
//                 <h1>HELLO</h1>
//                 <button onClick={() => this.props.addToTestNum()}>Add</button>
//                 <p>{this.props.testNum}</p>
//                 <button onClick={() => this.props.subtractFromTestNum()}>Subtract</button>
//             </div>
//         )
//     }

// };

// const mapStateToProps = (state) => {
//     return {
//         testNum: state.testNum,
//     };
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addToTestNum: () => dispatch({ type: "Add"}),
//         subtractFromTestNum: () => dispatch({ type: "Subtract"})
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest)

const ReduxTest = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // const [testNum, setTestNum] = useState(state.testNum);
  // const [message, setMessage] = useState(state.welcomeMessage);

  // useEffect(() => {
  //   setTestNum(state.testNum);
  // }, [state.testNum]);

  // useEffect(() => {
  //   setMessage(state.welcomeMessage);
  // }, [state.welcomeMessage]);

  return (
    <div>
      <button onClick={() => dispatch({ type: "Add Listing" })}>Add Listing</button>
      <button onClick={() => dispatch({ type: "Delete Listing" })}>Delete Listing</button>




      {/* <h1>HELLO</h1>
      <button onClick={() => dispatch({ type: "Add" })}>Add</button>
      <p>{testNum}</p>
      <button onClick={() => dispatch({ type: "Subtract" })}>Subtract</button>
      <p>{message}</p>
      <button onClick={() => dispatch({ type: "Change Message" })}>Change Message</button> */}
    </div>
  );
};

export default ReduxTest;
