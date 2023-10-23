import Image from 'next/image';

export default function Logo() {
  return (
    <div>
      <Image 
        src="/logo.svg"
        alt="GAYY logo"
        width={300}
        height={300}
      />
    </div>
  )
}
