'use client';
'use client';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { CryptoCash } from '../tabs/crypto-cash';

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

export default CryptoSwap;
