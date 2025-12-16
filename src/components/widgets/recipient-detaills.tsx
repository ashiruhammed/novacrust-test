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
  const {
    register,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useFormContext();

  const selectedBank = watch('bank') ?? '';
  const [section, setSection] = React.useState<'bank' | 'contact'>('bank');

  return (
    <div className='h-full flex flex-col'>
      <div className='flex-row flex items-center'>
        <button
          type='button'
          onClick={() => {
            if (section === 'contact') {
              setSection('bank');
              return;
            }
            onPrevStep?.();
          }}>
          <ArrowLeft />
        </button>
        <div className='flex-1 pr-12'>
          <h5 className='text-center text-xl font-medium'>Recipient details</h5>
        </div>
      </div>
      <div className='mt-10 space-y-8'>
        {section === 'bank' && (
          <>
            <div className='space-y-3'>
              <Label>Bank</Label>
              <Select
                value={selectedBank}
                onValueChange={(value) =>
                  setValue('bank', value, { shouldValidate: true })
                }>
                <SelectTrigger className='w-full py-5 px-6 rounded-full'>
                  <SelectValue placeholder='Select an option' />
                </SelectTrigger>
                <SelectContent position='popper'>
                  <SelectItem value='uba'>UBA</SelectItem>
                  <SelectItem value='first-bank'>First Bank</SelectItem>
                  <SelectItem value='opay'>Opay</SelectItem>
                </SelectContent>
              </Select>
              <input
                type='hidden'
                {...register('bank', { required: 'Please select a bank' })}
                value={selectedBank}
              />
              {errors.bank && (
                <p className='mt-1 text-sm text-destructive'>
                  {errors.bank.message as string}
                </p>
              )}
            </div>
            <div>
              <Label>Account number</Label>
              <Input
                className='mt-3 py-5 px-6 rounded-full'
                placeholder='Enter your email'
                {...register('accountNumber', {
                  required: 'Account number is required',
                  minLength: {
                    value: 6,
                    message: 'Account number is too short',
                  },
                })}
              />
              {errors.accountNumber && (
                <p className='mt-1 text-sm text-destructive'>
                  {errors.accountNumber.message as string}
                </p>
              )}
            </div>
            <div>
              <Label>Account name</Label>
              <Input
                disabled
                className='mt-3 py-5 px-6 bg-[#F2F2F2] disabled:opacity-100 text-black rounded-full'
                value={'NOVACRUST PLC'}
              />
            </div>
          </>
        )}

        {section === 'contact' && (
          <>
            <div>
              <Label>Recipient Email</Label>
              <Input
                className='mt-3 py-5 px-6 rounded-full'
                placeholder='Enter recipient email'
                {...register('recipientEmail', {
                  required: 'Recipient email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Enter a valid email address',
                  },
                })}
              />
              {errors.recipientEmail && (
                <p className='mt-1 text-sm text-destructive'>
                  {errors.recipientEmail.message as string}
                </p>
              )}
            </div>
            <div>
              <Label>Recipient phone number</Label>
              <Input
                className='mt-3 py-5 px-6 rounded-full'
                placeholder='Enter recipient phone number'
                type='number'
                {...register('recipientPhone', {
                  required: 'Recipient phone is required',
                  minLength: {
                    value: 7,
                    message: 'Phone number is too short',
                  },
                })}
              />
              {errors.recipientPhone && (
                <p className='mt-1 text-sm text-destructive'>
                  {errors.recipientPhone.message as string}
                </p>
              )}
            </div>
          </>
        )}
      </div>
      <Button
        type='button'
        size={'lg'}
        className='font-bold w-full rounded-full mt-auto text-white'
        onClick={async () => {
          if (section === 'bank') {
            const valid = await trigger(['bank', 'accountNumber'], {
              shouldFocus: true,
            });
            if (!valid) return;
            setSection('contact');
            return;
          }

          const valid = await trigger(['recipientEmail', 'recipientPhone'], {
            shouldFocus: true,
          });
          if (!valid) return;

          onNextStep?.();
        }}>
        {section === 'bank' ? 'Next' : 'Continue'}
      </Button>
    </div>
  );
}

export default RecepientDetails;
