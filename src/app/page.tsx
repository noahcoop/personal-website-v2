import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h3>{"Hello 👋"}</h3>
      <div>{"I'm"} Noah, a software developer at <a href="https://www.tegus.com/">Tegus</a></div>
      <div>I was previously a developer at <a href="https://atomicobject.com/">Atomic Object</a></div>
      <div>I studied Computer Science and Math at University of Michigan</div>
      <div>I love basketball, running, cooking, pourover coffee, my cat Leo, exploring new places, and enjoying nature</div>
      <hr />
      <a href="https://www.linkedin.com/in/noah-cooper-378b9414b/">linkedin</a>
    </main>
  );
}
