'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Button from '../ui/Button';
import { SERVICES } from '@/lib/services';

const bookingSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Valid email address is required').optional().or(z.literal('')),
  service: z.string().min(1, 'Please select a service'),
  date: z.string().min(1, 'Preferred date is required'),
  message: z.string().optional()
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema)
  });

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form data:', data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-bone p-12 text-center border border-roray-green no-radius max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-roray-green text-white flex items-center justify-center mx-auto mb-6 no-radius">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <h3 className="font-display font-bold text-3xl text-navy-deep mb-4">Request Received</h3>
        <p className="text-ink-soft mb-8 leading-relaxed">
          Thank you for reaching out to Roray Homebased Medical Services. Our clinical coordinator will review your request and contact you shortly to confirm the details.
        </p>
        <Button onClick={() => setIsSuccess(false)} variant="outline">
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto bg-white p-8 md:p-12 border border-gray-200 no-radius shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-bold text-navy-deep mb-2 uppercase tracking-wide">Full Name *</label>
          <input 
            {...register('fullName')}
            id="fullName"
            type="text" 
            className={`w-full p-4 bg-bone border ${errors.fullName ? 'border-accent-red' : 'border-gray-300'} focus:border-roray-green focus:outline-none transition-colors no-radius`}
            placeholder="John Doe"
          />
          {errors.fullName && <p className="text-accent-red text-xs mt-2">{errors.fullName.message}</p>}
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-navy-deep mb-2 uppercase tracking-wide">Phone Number *</label>
          <input 
            {...register('phone')}
            id="phone"
            type="tel" 
            className={`w-full p-4 bg-bone border ${errors.phone ? 'border-accent-red' : 'border-gray-300'} focus:border-roray-green focus:outline-none transition-colors no-radius`}
            placeholder="+255 XXX XXX XXX"
          />
          {errors.phone && <p className="text-accent-red text-xs mt-2">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-navy-deep mb-2 uppercase tracking-wide">Email Address</label>
          <input 
            {...register('email')}
            id="email"
            type="email" 
            className={`w-full p-4 bg-bone border ${errors.email ? 'border-accent-red' : 'border-gray-300'} focus:border-roray-green focus:outline-none transition-colors no-radius`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-accent-red text-xs mt-2">{errors.email.message}</p>}
        </div>
        
        <div>
          <label htmlFor="date" className="block text-sm font-bold text-navy-deep mb-2 uppercase tracking-wide">Preferred Date *</label>
          <input 
            {...register('date')}
            id="date"
            type="date" 
            className={`w-full p-4 bg-bone border ${errors.date ? 'border-accent-red' : 'border-gray-300'} focus:border-roray-green focus:outline-none transition-colors no-radius`}
          />
          {errors.date && <p className="text-accent-red text-xs mt-2">{errors.date.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-bold text-navy-deep mb-2 uppercase tracking-wide">Required Service *</label>
        <select 
          {...register('service')}
          id="service"
          className={`w-full p-4 bg-bone border ${errors.service ? 'border-accent-red' : 'border-gray-300'} focus:border-roray-green focus:outline-none transition-colors no-radius appearance-none`}
        >
          <option value="">Select a service...</option>
          {SERVICES.map(service => (
            <option key={service.id} value={service.id}>{service.title}</option>
          ))}
          <option value="other">Other / Not Sure</option>
        </select>
        {errors.service && <p className="text-accent-red text-xs mt-2">{errors.service.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-bold text-navy-deep mb-2 uppercase tracking-wide">Additional Details</label>
        <textarea 
          {...register('message')}
          id="message"
          rows={4}
          className="w-full p-4 bg-bone border border-gray-300 focus:border-roray-green focus:outline-none transition-colors no-radius resize-none"
          placeholder="Please describe any specific medical conditions or requirements..."
        ></textarea>
      </div>

      <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Request Consultation'}
      </Button>
    </form>
  );
}
