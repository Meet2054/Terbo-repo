import styles from "./page.module.css";
import { Button } from "@repo/ui/button";


export default function Page(): JSX.Element {
  return (
    <main>
      <Button appName="New web app">
        Hi there 
      </Button>
    </main>
  );
}
