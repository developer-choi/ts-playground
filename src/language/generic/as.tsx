import React, { ComponentPropsWithoutRef, ElementType } from 'react';

type SomeElementType = 'span' | 'div';

//왜 여기서 as에 optional 안붙였다고 저 밑 ignore자리에서 에러가나는지 모르겠다. 일단 예제 남겨두려고 추가.
function MyAsComponent4<T extends SomeElementType>({ as, ...rest }: { as: T }) {
  const AsComponent = as ?? 'div';
  return (
    //@ts-ignore
    <AsComponent {...rest}/>
  );
}

/****************************************************************************************************
 *
 *****************************************************************************************************/

type MyAsComponentProps1<T extends ElementType> = ComponentPropsWithoutRef<T> & { as?: T };

/**
 * 여기서 as가 any로 추론되는 이유를 도저히모르겠음.
 */
function MyAsComponent1<T extends ElementType>({as, ...rest}: MyAsComponentProps1<T>) {
  const AsComponent = as;
  return (
    <AsComponent {...rest}/>
  );
}

/****************************************************************************************************
 *
 *****************************************************************************************************/

/**
 * 이렇게 왜 Omit으로 감싸줘야 as가 잘 추론되는지도 이유를 모르겠음.
 */
type MyAsComponentProps2<T extends ElementType> = Omit<ComponentPropsWithoutRef<T>, 'as'> & { as?: T };

function MyAsComponent2<T extends ElementType>({as, ...rest}: MyAsComponentProps2<T>) {
  const AsComponent = as ?? 'div';
  return (
    <AsComponent {...rest}/>
  );
}

/****************************************************************************************************
 *
 *****************************************************************************************************/

/**
 * 이 타입에러도 원인을 모르겠다.
 */
function someFunction<T extends 'div' | 'span'>({as = 'div'}: { as?: T }) {
  console.log(as);
}
