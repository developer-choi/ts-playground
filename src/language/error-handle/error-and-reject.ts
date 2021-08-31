export function someThrowLogic() {
  throw Error('Error occurred!');
}

export async function someRejectLogic() {
  return Promise.reject('Promise is rejected!');
}

export async function someThrowInAsyncLogic() {
  throw Error('Error occurred!');
}

export async function main() {
  try {
    // someThrowLogic(); // I can catch
    // await someRejectLogic(); // I can catch
    await someThrowInAsyncLogic(); // I can catch
    // someThrowInAsyncLogic(); // I CAN NOT CATCH
  } catch (error) {
    console.log('catch', error instanceof Error, error.message);
  }
}

main().then();
