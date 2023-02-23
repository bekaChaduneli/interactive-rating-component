import { useState } from "react";
import FirstBox from "./components/FirstBox";
import LastBox from "./components/LastBox"

function App() {
  const[Submitted, setSubmited] = useState(false)
  const [selectItem, SelectFunc] = useState("0")
  return (
    <>
      {!Submitted && ( <FirstBox  SelectFunc={SelectFunc} setSubmited={setSubmited}/>)}
      {Submitted && <LastBox selectItem={selectItem} />}
    </>
  );
}

export default App;
