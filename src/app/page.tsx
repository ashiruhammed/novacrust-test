import CryptoSwap from '@/components/widgets/crypto-swap';

export default function Home() {
  return (
    <div className='flex min-h-screen items-center px-4 justify-center bg-zinc-50 font-sans dark:bg-black'>
      <main className='shadow py-10 px-16 rounded-xl md:min-h-[782px] bg-white w-full max-w-2xl'>
        <CryptoSwap />
      </main>
    </div>
  );
}
