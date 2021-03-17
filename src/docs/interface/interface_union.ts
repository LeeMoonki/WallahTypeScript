interface Success {
  success: boolean;
  data: string;
}

interface Fail {
  success: boolean;
  err: string;
}

function callback1(result: Success | Fail) {
  if (result.success) {
    // result는 success 속성만 갖고 있게 된다.
  }
}

type Success1 = {
  success: true;
  data: string;
}

type Fail1 = {
  success: false;
  err: string;
}

function isSuccess(result: Success1 | Fail1): result is Success1 {
  return result.success;
}
function callback2(result: Success1 | Fail1) {
  if (isSuccess(result)) {
    result.data;
  } else {
    result.err;
  }
}