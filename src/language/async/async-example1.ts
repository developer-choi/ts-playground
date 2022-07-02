export function main() {
  console.log("main() start");
  asyncLogic().then();
  for (let i = 0; i < 2999999999; i++) {}
  console.log("main() end");
}

function asyncLogic() {
  
  console.log("asyncLogic() start");
  
  return new Promise<void>(resolve => {
    setTimeout(function () {
      console.log("asyncLogic() end");
      resolve();
    }, 3000);
  });
}

// Asynchronous logic runs only when the call stack is empty.
