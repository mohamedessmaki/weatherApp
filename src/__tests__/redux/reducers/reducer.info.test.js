 import { infoReducer } from "./../../../redux/reducers/reducer.info";

test("Info Reducer", () => {

  let ExpectedState = {
    loading: true,
    status: '',
    pending: false,
  };
  expect(
    infoReducer(undefined, {
      type: "SET_STATUS",
      status: '',
    })
  ).toEqual(ExpectedState);

  expect(
    infoReducer(undefined, {
      type: "SET_LOADING",
      loading: true,
    })
  ).toEqual(ExpectedState);

  expect(
    infoReducer(undefined, {
      type: "SET_PENDING",
      pending: false,
    })
  ).toEqual(ExpectedState);
  
  
});
