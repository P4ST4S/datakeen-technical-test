import React, { useState } from "react";
import Modal from "./Modal";

function TextProcessor() {
  const [text, setText] = useState("");
  const [words, setWords] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleStart = () => {
    const wordsArray = text
      .split(/\s/)
      .map((word) => ({ text: word, checked: false }));
    setWords(wordsArray);
    setShowTable(true);
  };

  const handleCheckboxChange = (index) => {
    const newWords = [...words];
    newWords[index].checked = !newWords[index].checked;
    setWords(newWords);
  };

  const handleValidate = () => {
    const selectedWords = words
      .map((word, index) =>
        word.checked ? `${word.text} (position ${index + 1})` : null
      )
      .filter(Boolean);

    const message = selectedWords.length
      ? `Important words: ${selectedWords.join(", ")}`
      : `Now words selected as important`;

    setModalContent(message);
    setIsModalOpen(true);
  };

  return (
    <div>
      {!showTable ? (
        <div>
          <textarea value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={handleStart}>START</button>
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
