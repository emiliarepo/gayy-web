import React, {ReactNode} from 'react';

export default function Container({children}: {children: ReactNode}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8 my-10 mx-4 md:mx-8 2xl:mx-30">
      {children}
    </div>
  )
}
