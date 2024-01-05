import styles from './ContactForm.module.css';

const ContactForm = () => {
const handleSubmit = (e) => {
    e.preventDedault()
}
  return (
    <div>
      <p>
        Subscribe to get information, latest news and other interesting offers
        about Jadoo
      </p>
      <form onSubmit={handleSubmit}>
        <label>
            <span className={styles.sr_only}>Your email</span>
          <input type='text' placeholder='Your email' />
        </label>
        <button>Subscribe</button>
      </form>
    </div>
  );
};

export default ContactForm;
