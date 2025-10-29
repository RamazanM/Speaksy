import { useState, type ChangeEvent } from "react";
import "./App.css";
import { useSpeechSynthesis, type SpeakOptions } from "react-speech-kit";

function App() {
  const [text, setText] = useState("");
  const { speak, cancel } = useSpeechSynthesis();
  const [timeoutId,setTimeoutId] = useState(0)
  function handleTextInput(event: ChangeEvent<HTMLTextAreaElement>) {
    const eText = event.target.value;
    setText(eText.toLocaleUpperCase());
    debounceSpeak(eText);
  }

  function debounceSpeak(text: string) {
    cancel();
    clearTimeout(timeoutId);
    console.log("Timeout clear:"+timeoutId);
    
    const tId = setTimeout(() => {
      console.log("In the timeout:"+timeoutId);
      
      const words = text.split(" ");
      const sentences = text.split("\n");
      const speakOptions: SpeakOptions = { text: "" };
      if (sentences.length > 0)
        speakOptions.text = sentences[sentences.length - 1];
      else if (words.length > 0) speakOptions.text = words[words.length - 1];
      else speakOptions.text = text[text.length - 1];
      speak(speakOptions);
    }, 1000);
    setTimeoutId(tId)
    console.log("New Timeout:"+timeoutId);

  }


  return (
    <>
      <textarea style={{boxSizing:"border-box", width:"100%", height:"100%", fontSize:"99px"}} onChange={handleTextInput} value={text}></textarea>
    </>
  );
}

export default App;
