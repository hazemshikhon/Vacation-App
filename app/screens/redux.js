// import React from 'react';
// import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
// import { connect } from 'react-redux';
// import Container from '../components/Container';
// import RowText from '../components/RowText';
// import reducer from '../config/reducers/reducer';
// import { bindActionCreators } from 'redux';
// import * as counterActions from '../config/counterAction';

// import { createStore } from 'redux';
// import store from '../config/store';

// const Redux = () => {
//   // const { state, actions } = this.props;
//   return (
//     <Container>
//       <Text
//         onPress={() => {
//           store.dispatch({
//             type: 'INCREMENT',
//           });
//           console.log(store.getState().count);
//           // console.log(store.getState());
//         }}>
//         fsdfsdfsd
//       </Text>

//       <RowText textOne={store.getState().count} />
//       <Text
//         onPress={() => {
//           store.dispatch({
//             type: 'removeDay',
//             payload: {
//               id: 0,
//             },
//           });
//           console.log(store.getState());
//         }}>
//         delete
//       </Text>
//       <Text
//         onPress={() => {
//           console.log(store.getState().length);
//         }}>
//         length
//       </Text>
//     </Container>
//   );
// };
// // connect();
// // export default connect((state) => state.count)(Redux);
// export default connect(
//   (state) => ({
//     state: state.count,
//   }),
//   (dispatch) => ({
//     actions: bindActionCreators(counterActions, dispatch),
//   }),
// )(Redux);
