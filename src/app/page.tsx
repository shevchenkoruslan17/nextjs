import styles from "./page.module.css";
import Form from "next/form";

export default function Home() {
  return (
      <div className={styles.page}>

        {/*<form action="/submit">*/}
        {/*    <input type="text" name={'name'} placeholder={'login'}/>*/}
        {/*    <input type="text" name={'password'} placeholder={'password'}/>*/}
        {/*    <button>submit</button>*/}

        {/*</form>*/}

        <Form action={'/submit'}>
          <input type="text" name={'name'}/>
          <button>send</button>


        </Form>

      </div>
  );
}