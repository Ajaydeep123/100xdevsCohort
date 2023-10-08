import styles from "./page.module.css";
import { Signup } from "ui";
export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
     <Signup />
    </main>
  );
}
