import { ArrowLeft } from 'lucide-react';
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

function RecepientDetails() {
  return (
    <div className='h-full flex flex-col'>
      <div className='flex-row flex items-center'>
        <button>
          <ArrowLeft />
        </button>
        <div className='flex-1 pr-12'>
          <h5 className='text-center text-xl font-medium'>Recipient details</h5>
        </div>
      </div>
      <div className='mt-10 space-y-8'>
        <div className='space-y-3'>
          <Label>Bank</Label>
          <Select>
            <SelectTrigger className='w-full py-5 px-6 rounded-full'>
              <SelectValue placeholder='Select an option' />
            </SelectTrigger>
            <SelectContent position='popper'>
              <SelectItem value='uba'>UBA</SelectItem>
              <SelectItem value='first-bank'>First Bank</SelectItem>
              <SelectItem value='opay'>Opay</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Account number</Label>
          <Input
            className='mt-3 py-5 px-6 rounded-full'
            placeholder='Enter your email'
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
          />
        </div>
        <div>
          <Label>Recipient phone number</Label>
          <Input
            className='mt-3 py-5 px-6 rounded-full'
            placeholder='Enter recipient phone number'
            type='number'
          />
        </div>
      </div>
      <Button size={'lg'} className='font-bold w-full rounded-full mt-auto'>
        Next
      </Button>
    </div>
  );
}

export default RecepientDetails;
