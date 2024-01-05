import toast, { Toaster } from 'react-hot-toast';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
    try {
      const res = await fetch('api/contact.json', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
      });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <p>
        Subscribe to get information, latest news and other interesting offers
        about Jadoo
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          <span className={styles.sr_only}>Your email</span>
          <input type='text' name='email' placeholder='Your email' />
        </label>
        <button>Subscribe</button>
        <Toaster />
      </form>
    </div>
  );
};

export default ContactForm;
