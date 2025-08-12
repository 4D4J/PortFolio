import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Card_Contact from "../UI/card_contact";
import usePageTitle from '../../hooks/usePageTitle';

interface FormData {
  name: string;
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
  usePageTitle({ 
    title: 'Contact', 
    description: 'Contactez Nathan Auvray pour discuter de projets, collaborations ou opportunités en développement web et cybersécurité.' 
  });

  const [formData, setFormData] = useState<FormData>({
    name: '',
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
    
    if (status.error || status.success) {
      setStatus(prev => ({ ...prev, error: '', success: false }));
    }
  };
  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setStatus(prev => ({ ...prev, error: 'Name is required' }));
      return false;
    }
    
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

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }
        const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.subject,
        message: formData.message
      };
      
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setStatus({ loading: false, success: true, error: '' });

      setFormData({
        name: '',
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
  };
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-[20rem] min-w-[10rem]">
        <form className="pt-24 w-full mb-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              className="w-[15rem] p-2 rounded bg-zinc-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
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

          <div className="mb-4 min-h-[3rem]">
            {status.error && (
              <div className="w-full p-2 bg-red-600 text-white rounded text-sm mb-2">
                {status.error}
              </div>
            )}
            
            {status.success && (
              <div className="w-full p-2 bg-green-600 text-white rounded text-sm mb-2">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </div>
        </form>
      </div>

      <div className="pb-12 w-full flex justify-center">
        <Card_Contact />
      </div>

    </div>
  );
}   

export default Contact;