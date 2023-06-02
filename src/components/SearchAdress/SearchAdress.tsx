import axios from "axios";
import { useEffect, useState } from "react";

interface ISetState {
  setPosition: Function;
}

export const SearchAdress = ({ setPosition }: ISetState) => {
  const [input, setInput] = useState<number>(0);
  const [input2, setInput2] = useState<number>(0);

  const apiKey: string = "at_TcRlR6D3UC4LNAkpS4yGdO7YIO5G7";
  const urlRequset: string = `http://ip-api.com/json/192.212.174.101`;

  useEffect(() => {
    const response = axios.get(urlRequset).then((response) => {
      console.log(response.data);
    });
  }, []);

  const setInputEvent = (event: string) => {
    setInput(Number(event));
  };

  const setInputEvent2 = (event: string) => {
    setInput2(Number(event));
  };

  const click = () => {
    setPosition([input, input2]);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setInputEvent(event.target.value)}
      />
      <input
        type="text"
        onChange={(event) => setInputEvent2(event.target.value)}
      />
      <p onClick={() => click()}>Submit</p>
    </div>
  );
};
