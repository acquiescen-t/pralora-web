import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      {showAlert && <Alert onClose={() => setShowAlert(false)}>My Alert</Alert>}
      <Button color="danger" onClick={() => setShowAlert(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
