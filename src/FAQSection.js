// FAQSection.js
import React, { useState } from 'react';

function FAQSection() {
  const [faqOpen, setFaqOpen] = useState(null);

  const toggleFAQ = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>FAQs</h2>
      <div className="faq">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
              <span>{faqOpen === index ? '-' : '+'}</span>
            </div>
            {faqOpen === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

const faqData = [
  { question: 'What is PyHack?', answer: 'PyHack is a game develpement workshop for beginners using python.' },
  { question: 'Where will the workshops be held?', answer: 'The mode of workshop will be online.' },
  { question: 'What will I learn at PyHack?', answer: 'You will learn basic game developement and much more.' },
  { question: 'Do I need prior Python experience?', answer: 'Simple knowledge about basic syntax will be sufficient' },
];

export default FAQSection;
