import { FcContacts } from "react-icons/fc";
import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <FcContacts size={'10em'} />
    </div>
  );
}
