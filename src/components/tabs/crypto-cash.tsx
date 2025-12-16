'use client';

import { Search } from 'lucide-react';
import React from 'react';
import BnbIcon from '../icons/bnb-icon';
import CeloIcon from '../icons/celo-icon';
import TonIcon from '../icons/ton-icon';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { useFormContext } from 'react-hook-form';
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

type CryptoCashProps = {
  onNextStep?: () => void;
};

export function CryptoCash({ onNextStep }: CryptoCashProps) {
  const { register, setValue, watch } = useFormContext();
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    setValue('payToken', tokenOptions[0].id);
    setValue('receiveCurrency', 'naira');
    setValue('payFrom', 'light');
    setValue('payTo', 'light');
  }, [setValue]);

  const selectedToken = watch('payToken') ?? tokenOptions[0].id;
  const receiveCurrency = watch('receiveCurrency') ?? 'naira';
  const payFrom = watch('payFrom') ?? 'light';
  const payTo = watch('payTo') ?? 'light';

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

          <Select
            value={selectedToken}
            onValueChange={(value) => setValue('payToken', value)}>
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
          <input
            type='hidden'
            {...register('payToken')}
            value={selectedToken}
          />
        </div>
      </div>
      <div className='space-y-4 rounded-[30px] border bg-white p-6 shadow-sm'>
        <p className='font-medium text-popover-foreground'>You receive</p>
        <div className='flex-row flex items-center justify-between'>
          <h1 className='text-2xl font-semibold text-primary'>1.00</h1>
          <Select
            value={receiveCurrency}
            onValueChange={(value) => setValue('receiveCurrency', value)}>
            <SelectTrigger className='flex items-center gap-3  rounded-2xl border px-4 py-3 text-left shadow-sm'>
              <SelectValue placeholder='NGN' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='naira'>NGN</SelectItem>
            </SelectContent>
          </Select>
          <input
            type='hidden'
            {...register('receiveCurrency')}
            value={receiveCurrency}
          />
        </div>
      </div>

      <div className='space-y-2'>
        <Label className='text-primary font-medium'>Pay from</Label>
        <Select
          value={payFrom}
          onValueChange={(value) => setValue('payFrom', value)}>
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
        <input type='hidden' {...register('payFrom')} value={payFrom} />
      </div>
      <div className='space-y-2'>
        <Label className='text-primary font-medium'>Pay to</Label>
        <Select
          value={payTo}
          onValueChange={(value) => setValue('payTo', value)}>
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
        <input type='hidden' {...register('payTo')} value={payTo} />
      </div>

      <Button
        type='button'
        size={'lg'}
        className='w-full text-white rounded-full font-bold'
        onClick={onNextStep}>
        Convert now
      </Button>
    </div>
  );
}
