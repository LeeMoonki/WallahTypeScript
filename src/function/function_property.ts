// type FirstCall = {
//   (value: number): number | undefined
//   wasCalled: boolean
// }

// const returnValueWhenFirstCall: FirstCall = (value) => {
//   if (!returnValueWhenFirstCall.wasCalled) {
//     returnValueWhenFirstCall.wasCalled = true;
//     return value;
//   }
//   returnValueWhenFirstCall.wasCalled = false;
// }