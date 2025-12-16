import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

function CashCryptoTab() {
  return (
    <div className='mt-20'>
      <h1 className='text-center text-[32px] text-primary font-medium'>
        Coming Soon!
      </h1>
      <p className='text-center text-xl text-[#4F4F4F] mt-4'>
        Cash to Crypto is almost here. Enter your email and we’ll let you know
        the moment it’s live.
      </p>
      <div className='mt-8'>
        <Label>Email</Label>
        <Input
          className='mt-3 py-5 px-6 rounded-full'
          placeholder='Enter your email'
        />
      </div>
      <Button
        className='w-full rounded-full text-white mt-20 font-bold'
        size={'lg'}>
        Update me
      </Button>
    </div>
  );
}

export { CashCryptoTab };
