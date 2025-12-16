import { ArrowLeft, Copy, Info } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';

type EthAddressProps = {
  onNextStep?: () => void;
  onPrevStep?: () => void;
};

function EthAddress({ onNextStep, onPrevStep }: EthAddressProps) {
  return (
    <div className='h-full flex flex-col'>
      <div className='flex-row flex items-center'>
        <button
          type='button'
          onClick={() => {
            onPrevStep?.();
          }}>
          <ArrowLeft />
        </button>
        <div className='flex-1 pr-12'>
          <h5 className='text-center text-xl font-medium'>
            Send ETH to the address below
          </h5>
        </div>
      </div>

      <div className='mt-8 max-w-fit mx-auto bg-[#E6FBF2] border border-[#CCF6E5] rounded-full px-3  py-1 flex flex-row items-center gap-3'>
        <p className='font-medium text-primary'>4LiV4YjbxsL6739MKghUd</p>
        <Copy size={16} />
      </div>
      <div className='mt-16 bg-[#F7F7F7] px-6 py-4 rounded-lg space-y-5'>
        <div className='flex flex-row items-center justify-between'>
          <p className='text-sm text-primary-foreground'>Amount to send</p>
          <div className='flex flex-row items-center gap-2'>
            <p className='text-primary text-base'>100ETH</p>
            <Copy size={16} />
          </div>
        </div>
        <div className='flex flex-row items-center justify-between'>
          <p className='text-sm text-primary-foreground'>Network</p>
          <p className='text-primary text-base'>ETH</p>
        </div>
        <div className='flex flex-row items-center justify-between'>
          <p className='text-sm text-primary-foreground'>Wallet</p>
          <p className='text-primary text-base'>Other</p>
        </div>
      </div>
      <div className='mt-6 flex-row flex gap-2'>
        <Info className='text-primary' />
        <p
          className='
        text-primary-foreground'>
          {
            'Only send {USDT} to this address. Ensure the sender is on the {CELO} network otherwise you might lose your deposit'
          }
        </p>
      </div>
      <Button
        type='button'
        size={'lg'}
        className='font-bold w-full rounded-full mt-auto text-white'
        onClick={() => {
          onNextStep?.();
        }}>
        I have sent it
      </Button>
    </div>
  );
}

export default EthAddress;
