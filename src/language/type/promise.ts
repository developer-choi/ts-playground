import axios, { AxiosResponse } from 'axios';

// export async function someAsyncFunction(): 'some' {
export async function someAsyncFunction(): Promise<'some'> {
  
  return 'some' as 'some';
  // return 'some' as Promise<'some'>;
}

export interface SomeResponse1 {

}

export interface SomeResponse2 {

}

export async function someApiFunction1(): Promise<[AxiosResponse<SomeResponse1>, AxiosResponse<SomeResponse2>]> {
  return Promise.all([axios.get('/some1'), axios.get('/some2')]);
}

export async function someApiFunction2() {
  return Promise.all([
    axios.get('/some1') as Promise<AxiosResponse<SomeResponse1>>,
    
    // axios.get('/some2') as AxiosResponse<SomeResponse2>
    axios.get('/some2') as Promise<AxiosResponse<SomeResponse2>>
  ]);
}
