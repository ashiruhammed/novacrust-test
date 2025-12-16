'use client';
import React from 'react';
import CryptoSwap from '@/components/widgets/crypto-swap';
import EthAddress from '@/components/widgets/eth-address';
import RecepientDetails from '@/components/widgets/recipient-detaills';
import TransactionCompleted from '@/components/widgets/transaction-completed';
import { useForm, FormProvider } from 'react-hook-form';

export default function Home() {
  const method = useForm({
    defaultValues: {
      payToken: 'usdt-celo',
      receiveCurrency: 'naira',
      payFrom: 'light',
      payTo: 'light',
      bank: '',
      accountNumber: '',
      recipientEmail: '',
      recipientPhone: '',
    },
    mode: 'onBlur',
  });
  const [step, setStep] = React.useState(1);

  const goToNextStep = async () => {
    type FieldName =
      | 'payToken'
      | 'receiveCurrency'
      | 'payFrom'
      | 'payTo'
      | 'bank'
      | 'accountNumber'
      | 'recipientEmail'
      | 'recipientPhone';

    const stepFields: Record<number, FieldName[]> = {
      1: ['payToken', 'receiveCurrency', 'payFrom', 'payTo'],
      2: ['bank', 'accountNumber', 'recipientEmail', 'recipientPhone'],
      3: [],
    };

    const fieldsToValidate = stepFields[step] ?? [];

    if (fieldsToValidate.length > 0) {
      const isValid = await method.trigger(fieldsToValidate, {
        shouldFocus: true,
      });
      if (!isValid) return;
    }

    setStep((current) => Math.min(current + 1, 4));
  };

  const goToPrevStep = () => {
    setStep((current) => Math.max(current - 1, 1));
  };

  const restartFlow = () => {
    method.reset();
    setStep(1);
  };

  return (
    <div className='flex min-h-screen items-center px-4 justify-center bg-zinc-50 font-sans dark:bg-black'>
      <FormProvider {...method}>
        <main className='shadow py-10 px-16 h-[782px] rounded-xl md:min-h-[782px] bg-white w-full max-w-2xl'>
          {step === 1 && <CryptoSwap onNextStep={goToNextStep} />}
          {step === 2 && (
            <RecepientDetails
              onNextStep={goToNextStep}
              onPrevStep={goToPrevStep}
            />
          )}
          {step === 3 && (
            <EthAddress onNextStep={goToNextStep} onPrevStep={goToPrevStep} />
          )}
          {step === 4 && <TransactionCompleted onRestart={restartFlow} />}
        </main>
      </FormProvider>
    </div>
  );
}
