import CryptoSwap from '@/components/widgets/crypto-swap';

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <main className='shadow py-10 px-16 rounded-xl bg-white w-full max-w-2xl'>
        <CryptoSwap />
      </main>
    </div>
  );
}
