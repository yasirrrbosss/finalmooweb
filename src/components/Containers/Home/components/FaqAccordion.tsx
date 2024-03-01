import { FC, ReactNode } from 'react';

interface AccordionProps {
  title: string;
  content: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const Accordion: FC<AccordionProps> = ({
  title,
  content,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="my-5">
      <h1
        className={`text-white font-extrabold text-xl md:text-3xl cursor-pointer transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-70 hover:opacity-100'
        }`}
        onClick={onToggle}
      >
        {title}
      </h1>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen
            ? 'max-h-[500px] opacity-100 transform translate-y-0'
            : 'max-h-0 opacity-0 transform -translate-y-2 '
        }`}
      >
        {isOpen && <div>{content}</div>}
      </div>
    </div>
  );
};

export default Accordion;
