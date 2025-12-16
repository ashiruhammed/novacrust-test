'use client';

import { Search } from 'lucide-react';
import React from 'react';
import BnbIcon from '../icons/bnb-icon';
import CeloIcon from '../icons/celo-icon';
import TonIcon from '../icons/ton-icon';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

type TokenOption = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

const tokenOptions: TokenOption[] = [
  {
    id: 'usdt-celo',
    label: 'USDT - CELO',
    icon: <CeloIcon />,
  },
  {
    id: 'usdt-ton',
    label: 'USDT - TON',
    icon: <TonIcon />,
  },
  {
    id: 'usdt-bnb',
    label: 'USDT - BNB',
    icon: <BnbIcon />,
  },
];

export function CryptoCash() {
  const [selectedToken, setSelectedToken] = React.useState(tokenOptions[0].id);
  const [query, setQuery] = React.useState('');

  const selectedOption = React.useMemo(
    () => tokenOptions.find((option) => option.id === selectedToken),
    [selectedToken]
  );

  const filteredOptions = React.useMemo(() => {
    const lowerQuery = query.toLowerCase().trim();
    if (!lowerQuery) return tokenOptions;
    return tokenOptions.filter((option) =>
      option.label.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  return (
    <div className='mt-10 space-y-6'>
      <div className='space-y-4 rounded-[30px] border bg-white p-6 shadow-sm'>
        <p className='font-medium text-popover-foreground'>You pay</p>
        <div className='flex-row flex items-center justify-between'>
          <h1 className='text-2xl font-semibold text-primary'>1.00</h1>

          <Select value={selectedToken} onValueChange={setSelectedToken}>
            <SelectTrigger className='flex items-center gap-3 rounded-2xl border px-4 py-3 text-left shadow-sm'>
              <SelectValue
                aria-label={selectedOption?.label.split('-')[0]}
                className='sr-only'
              />
            </SelectTrigger>
            <SelectContent className='px-3 py-4' position='popper'>
              <div className='flex items-center gap-3 rounded-full border bg-white px-4 py-2.5'>
                <Search className='h-5 w-5 text-muted-foreground' />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder='Search'
                  className='w-full bg-transparent text-sm font-medium text-popover-foreground outline-none placeholder:text-muted-foreground'
                />
              </div>
              <div className='mt-3 space-y-2'>
                {filteredOptions.map((option) => (
                  <SelectItem
                    key={option.id}
                    value={option.id}
                    className='flex items-center gap-3 rounded-2xl px-4 py-3 text-left text-base hover:bg-muted'>
                    {option.icon}
                    <span className='text-sm font-semibold text-primary'>
                      {option.label}
                    </span>
                  </SelectItem>
                ))}
                {filteredOptions.length === 0 ? (
                  <p className='px-1 text-sm text-muted-foreground'>
                    No matches
                  </p>
                ) : null}
              </div>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className='space-y-4 rounded-[30px] border bg-white p-6 shadow-sm'>
        <p className='font-medium text-popover-foreground'>You receive</p>
        <div className='flex-row flex items-center justify-between'>
          <h1 className='text-2xl font-semibold text-primary'>1.00</h1>
          <Select>
            <SelectTrigger className='flex items-center gap-3  rounded-2xl border px-4 py-3 text-left shadow-sm'>
              <SelectValue placeholder='NGN' defaultValue={'naira'} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='naira'>NGN</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className='space-y-2'>
        <Label className='text-primary font-medium'>Pay from</Label>
        <Select>
          <SelectTrigger className='w-full py-5 px-6 rounded-full'>
            <SelectValue
              placeholder='Theme'
              className='text-primary font-medium'
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='light'>Light</SelectItem>
            <SelectItem value='dark'>Dark</SelectItem>
            <SelectItem value='system'>System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='space-y-2'>
        <Label className='text-primary font-medium'>Pay to</Label>
        <Select>
          <SelectTrigger className='w-full py-5 px-6 rounded-full'>
            <SelectValue
              placeholder='Theme'
              className='text-primary font-medium'
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='light'>Light</SelectItem>
            <SelectItem value='dark'>Dark</SelectItem>
            <SelectItem value='system'>System</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button size={'lg'} className='w-full rounded-full font-bold'>
        Convert now
      </Button>
    </div>
  );
}
