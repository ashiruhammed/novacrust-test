import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

type RecipientDetailsProps = {
  onNextStep?: () => void;
  onPrevStep?: () => void;
};

function RecepientDetails({ onNextStep, onPrevStep }: RecipientDetailsProps) {
  const { register, setValue, watch } = useFormContext();

  const selectedBank = watch('bank') ?? '';

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
          <h5 className='text-center text-xl font-medium'>Recipient details</h5>
        </div>
      </div>
      <div className='mt-10 space-y-8'>
        <div className='space-y-3'>
          <Label>Bank</Label>
          <Select
            value={selectedBank}
            onValueChange={(value) => setValue('bank', value)}>
            <SelectTrigger className='w-full py-5 px-6 rounded-full'>
              <SelectValue placeholder='Select an option' />
            </SelectTrigger>
            <SelectContent position='popper'>
              <SelectItem value='uba'>UBA</SelectItem>
              <SelectItem value='first-bank'>First Bank</SelectItem>
              <SelectItem value='opay'>Opay</SelectItem>
            </SelectContent>
          </Select>
          <input type='hidden' {...register('bank')} value={selectedBank} />
        </div>
        <div>
          <Label>Account number</Label>
          <Input
            className='mt-3 py-5 px-6 rounded-full'
            placeholder='Enter your email'
            {...register('accountNumber')}
          />
        </div>
        <div>
          <Label>Account number</Label>
          <Input
            disabled
            className='mt-3 py-5 px-6 bg-[#F2F2F2] disabled:opacity-100 text-black rounded-full'
            value={'NOVACRUST PLC'}
          />
        </div>

        <div>
          <Label>Recipient Email</Label>
          <Input
            className='mt-3 py-5 px-6 rounded-full'
            placeholder='Enter recipient email'
            {...register('recipientEmail')}
          />
        </div>
        <div>
          <Label>Recipient phone number</Label>
          <Input
            className='mt-3 py-5 px-6 rounded-full'
            placeholder='Enter recipient phone number'
            type='number'
            {...register('recipientPhone')}
          />
        </div>
      </div>
      <Button
        type='button'
        size={'lg'}
        className='font-bold w-full rounded-full mt-auto text-white'
        onClick={() => {
          onNextStep?.();
        }}>
        Next
      </Button>
    </div>
  );
}

export default RecepientDetails;
