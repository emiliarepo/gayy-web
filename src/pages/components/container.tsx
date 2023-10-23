import React, {ReactNode} from 'react';

export default function Container({children}: {children: ReactNode}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8 py-20 mx-10">
      {children}
    </div>
  )
}
