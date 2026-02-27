import Image from 'next/image';

export default function Loading() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Image alt="Fakebuck" src="/logo.png" width={40} height={40} />
    </div>
  );
}
