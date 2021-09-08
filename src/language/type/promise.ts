// export async function someAsyncFunction(): 'some' {
export async function someAsyncFunction(): Promise<'some'> {
  
  return 'some' as 'some';
  // return 'some' as Promise<'some'>;
}
