import styles from './Contact.module.scss';
import { PiPhoneCall } from 'react-icons/pi';
import { TbClockHour9 } from 'react-icons/tb';
import { TfiEmail } from 'react-icons/tfi';
import { PiAddressBookLight } from 'react-icons/pi';

const Contact = () => {
  return (
    <section>
      <h1 className={styles.title}>Contact</h1>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <div>
            <PiPhoneCall size={'30px'} color={'#f12e36'} />
          </div>
          <div>
            <h3 className={styles.name}>Multiline phone</h3>
            <a className={styles.info} href="tel:+38 097 777 77 77">
              +38 097 777 77 77
            </a>
          </div>
        </div>
        <div className={styles.box}>
          <div>
            <TbClockHour9 size={'30px'} color={'#f12e36'} />
          </div>
          <div>
            <h3 className={styles.name}>Operator working hours</h3>
            <p>Monday-Friday 08-00 to 22:00</p>
            <p>Saturday-Sunday 09-00 to 22:00</p>
          </div>
        </div>
        <div className={styles.box}>
          <div>
            <TfiEmail size={'30px'} color={'#f12e36'} />
          </div>
          <div>
            <h3 className={styles.name}>Email</h3>
            <a className={styles.info} href="mailto:zakaz@gmail.com">
              zakaz@gmail.com
            </a>
            <a className={styles.info} href="mailto:info@gmail.com">
              info@gmail.com
            </a>
            <a className={styles.info} href="mailto:chief@gmail.com">
              chief@gmail.com
            </a>
          </div>
        </div>
        <div className={styles.box}>
          <div>
            <PiAddressBookLight size={'30px'} color={'#f12e36'} />
          </div>
          <div>
            <h3 className={styles.name}>Legal information</h3>
            <p className={styles.info}>OOO 'Work' 1313131313</p>
            <p className={styles.info}>Poland st. 13</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
