import styles from "./App.module.css";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";

function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <AppMain />
      <AppFooter />
    </div>
  );
}

export default App;
