import React, { useState } from "react";
import "../styles/components/TextProcessor.css";
import { sendText, validateText } from "../services/api";
import Modal from "./Modal";

function TextProcessor() {
  const [isLoading, setIsLoading] = useState(false);

  const [text, setText] = useState("");
  const [words, setWords] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleStart = async () => {
    setIsLoading(true);
    const responseWords = await sendText(text);
    console.log(responseWords);
    if (responseWords) {
      setWords(responseWords);
      setShowTable(true);
    }
    setIsLoading(false);
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      await handleStart();
    }
  };

  const handleCheckboxChange = (index) => {
    const newWords = [...words];
    newWords[index].checked = !newWords[index].checked;
    setWords(newWords);
  };

  const handleValidate = async () => {
    const response = await validateText(words);
    if (response) {
      setModalContent(response.message);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="TextProcessor">
      {!showTable ? (
        <div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {isLoading ? (
            <p className="loading">Loading...</p>
          ) : (
            <button onClick={handleStart}>START</button>
          )}
        </div>
      ) : (
        <div>
          <table>
            <tbody>
              {words.map((word, index) => (
                <tr key={index}>
                  <td>{word.text}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={word.checked}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleValidate}>Validate</button>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <p>{modalContent}</p>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default TextProcessor;
