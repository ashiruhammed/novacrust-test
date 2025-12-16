import React from 'react';
import NovacrustLogoIcon from '../icons/novacrust-logo';
import CheckCircleIcon from '../icons/check-circle';
import { Copy } from 'lucide-react';
import { Button } from '../ui/button';

function TransactionCompleted() {
  return (
    <div>
      <div className='flex justify-center flex-col items-center'>
        <NovacrustLogoIcon />
        <CheckCircleIcon className='mt-[70px]' />
        <h1 className='text-2xl font-medium text-primary mt-8'>
          Your transaction is processing
        </h1>
        <p className='text-xl text-primary-foreground'>
          The recipient will receive it shortly.
        </p>
      </div>
      <div className='mt-10 bg-[#F7F7F7] px-6 py-4 rounded-lg space-y-5'>
        <div className='flex flex-row items-center justify-between'>
          <p className='text-sm text-primary-foreground'>Transaction ID</p>
          <div className='flex flex-row items-center gap-2'>
            <p className='text-primary text-base'>NC123456789</p>
            <Copy size={16} />
          </div>
        </div>
      </div>
      <Button
        size={'lg'}
        className='mt-10 hover:bg-transparent text-center w-full text-primary bg-transparent font-bold'>
        Go back to home
      </Button>
    </div>
  );
}

export default TransactionCompleted;
