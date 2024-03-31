import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h3>{"hi, i'm noah 👋"}</h3>
      <div>{"i'm"} a software developer at <a href="https://www.tegus.com/">tegus</a></div>
      <div>previously, i was a developer at <a href="https://atomicobject.com/">atomic object</a></div>
      <div>i studied computer science and math at university of michigan</div>
      <div>i love hanging out with my cat Leo, making pourover coffee, and enjoying nature</div>
    </main>
  );
}
