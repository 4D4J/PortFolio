import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Card_Contact from "../UI/card_contact";

interface FormData {
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  loading: boolean;
  success: boolean;
  error: string;
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    loading: false,
    success: false,
    error: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear any previous error/success messages when user starts typing
    if (status.error || status.success) {
      setStatus(prev => ({ ...prev, error: '', success: false }));
    }
  };

  const validateForm = (): boolean => {
    if (!formData.email.trim()) {
      setStatus(prev => ({ ...prev, error: 'Email is required' }));
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus(prev => ({ ...prev, error: 'Please enter a valid email address' }));
      return false;
    }
    
    if (!formData.subject.trim()) {
      setStatus(prev => ({ ...prev, error: 'Subject is required' }));
      return false;
    }
    
    if (!formData.message.trim()) {
      setStatus(prev => ({ ...prev, error: 'Message is required' }));
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setStatus({ loading: true, success: false, error: '' });
      try {
      // EmailJS configuration - Get these values from your EmailJS dashboard
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }
      
      const templateParams = {
        from_email: formData.email,
        to_email: 'nathan.auvray60@gmail.com',
        subject: formData.subject,
        message: formData.message,
        from_name: formData.email // You might want to add a name field later
      };
      
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setStatus({ loading: false, success: true, error: '' });
      
      // Reset form after successful submission
      setFormData({
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus({ 
        loading: false, 
        success: false, 
        error: 'Failed to send message. Please try again later.' 
      });
    }
  };  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="flex flex-col items-center sm:text-left mb-6 sm:mb-4">
        <h1 className="text-xl sm:text-2xl mb-2 sm:mb-4">Contact Me Right now 🚀</h1>
      </div>
      
      <div className="w-[20rem] min-w-[10rem]">
        <form className="w-full mb-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your email"
              className="w-[15rem] p-2 rounded bg-zinc-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject"
              className="w-[15rem] p-2 rounded bg-zinc-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your message"
              rows={4}
              className="w-full h-[8rem] p-2 rounded bg-zinc-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          
          {/* Status messages */}
          {status.error && (
            <div className="mb-4 p-2 bg-red-600 text-white rounded text-sm">
              {status.error}
            </div>
          )}
          
          {status.success && (
            <div className="mb-4 p-2 bg-green-600 text-white rounded text-sm">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          
          <button 
            type="submit"
            disabled={status.loading}
            className={`w-[10rem] py-2 px-4 rounded transition duration-200 ${
              status.loading 
                ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                : 'bg-emerald-600 text-white hover:bg-emerald-700'
            }`}
          >
            {status.loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="w-full flex justify-center">
        <Card_Contact />
      </div>

    </div>
  );
}   

export default Contact;