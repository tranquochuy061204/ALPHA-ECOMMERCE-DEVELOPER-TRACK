import { useState } from 'react';

const FaqBox = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-box ${isOpen ? 'active' : ''}`}>
      <div className="faq-thumb" onClick={toggleFaq}>
        <div>
          <p>{title}</p>
        </div>
        <div>
          <svg
            className={`w-[16px] transition-all duration-200 ${isOpen ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
          </svg>
        </div>
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="faq-content">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqBox;
