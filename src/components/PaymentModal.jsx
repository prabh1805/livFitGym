import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OWNER_PHONE = '918929111791';

const PaymentModal = ({ isOpen, onClose, plan }) => {
  const [step, setStep] = useState(1); // 1 = form, 2 = QR, 3 = done
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = 'Name is required';
    if (!phone.trim() || phone.length < 10) errs.phone = 'Valid phone number is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleProceed = () => {
    if (validate()) setStep(2);
  };

  const handleDone = () => {
    const msg = `New Payment Received!\n\nName: ${name}\nPhone: ${phone}\nPlan: ${plan?.title}\nAmount: ${plan?.price}\n\nPlease verify the payment.`;
    const url = `https://wa.me/${OWNER_PHONE}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setStep(3);
  };

  const handleClose = () => {
    setStep(1);
    setName('');
    setPhone('');
    setErrors({});
    onClose();
  };

  if (!isOpen || !plan) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#121212] border border-neutral-800 rounded-3xl p-6 sm:p-8 w-full max-w-md relative"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Plan info header */}
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">{plan.title} Plan</span>
            <p className="text-3xl font-black text-white mt-1">{plan.price} <span className="text-sm text-gray-500 font-normal">{plan.duration}</span></p>
          </div>

          {/* Step 1: Name & Phone */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#ff0000] transition-colors"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#ff0000] transition-colors"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
              <button
                onClick={handleProceed}
                className="w-full bg-[#ff0000] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-red-700 transition-colors mt-2"
              >
                Proceed to Pay
              </button>
            </div>
          )}

          {/* Step 2: QR Code */}
          {step === 2 && (
            <div className="text-center space-y-4">
              <p className="text-gray-400 text-sm">Scan the QR code below to pay</p>
              <div className="bg-white rounded-2xl p-4 inline-block mx-auto">
                <img
                  src="/assets/qr_paytm.jpg"
                  alt="Payment QR Code"
                  className="w-56 h-56 object-contain"
                />
              </div>
              <p className="text-gray-500 text-xs">Pay <span className="text-white font-bold">{plan.price}</span> via any UPI app</p>
              <button
                onClick={handleDone}
                className="w-full bg-[#ff0000] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-red-700 transition-colors"
              >
                I've Completed Payment
              </button>
              <button
                onClick={() => setStep(1)}
                className="text-gray-500 text-sm hover:text-white transition-colors"
              >
                ← Go back
              </button>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="text-center space-y-4 py-4">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Thank You, {name}!</h3>
              <p className="text-gray-400 text-sm">
                Your payment notification has been sent to the gym owner via WhatsApp. They will verify and confirm your membership shortly.
              </p>
              <button
                onClick={handleClose}
                className="w-full bg-neutral-800 text-white py-3 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-neutral-700 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PaymentModal;
