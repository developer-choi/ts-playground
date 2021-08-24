import React from 'react';

type SomeElementType = 'span' | 'div';

//왜 여기서 as에 optional 안붙였다고 저 밑 ignore자리에서 에러가나는지 모르겠다. 일단 예제 남겨두려고 추가.
function MyAsComponent4<T extends SomeElementType>({ as, ...rest }: { as: T }) {
  const AsComponent = as ?? 'div';
  return (
    //@ts-ignore
    <AsComponent {...rest}/>
  );
}
