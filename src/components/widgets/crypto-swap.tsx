import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

function CryptoSwap() {
  return (
    <div>
      <Tabs defaultValue='crypto-cash'>
        <TabsList>
          <TabsTrigger value='crypto-cash'>Crypto to cash</TabsTrigger>
          <TabsTrigger value='cash-crypto'>Cash to crypto</TabsTrigger>
          <TabsTrigger value='crypto-flat'>Crypto to flat loan</TabsTrigger>
        </TabsList>
        <TabsContent value='crypto-cash'>
          <CryptoCash />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function CryptoCash() {
  return (
    <div>
      <div className='border p-6 rounded-[30px] mt-10'>
        <p className='font-medium'>You pay</p>
      </div>
    </div>
  );
}

export default CryptoSwap;
