// Accordion: Build an accordion component that a displays a list of vertically stacked sections with each containing a title and content snippet
// https://www.greatfrontend.com/questions/user-interface/accordion

import React, { MouseEvent, useState } from 'react';

interface Props {
  sections: ReadonlyArray<Section>;
}
interface Section {
  value: string;
  title: string;
  contents: string;
}

export default function Accordion({ sections }: Props) {
  const [openSections, setOpenSections] = useState(new Set());

  const handleClick = (value: string) => {
    return (event: MouseEvent<HTMLElement>) => {
      event.preventDefault();
      const newOpenSections = new Set(openSections);
      newOpenSections.has(value) ? newOpenSections.delete(value) : newOpenSections.add(value);
      setOpenSections(newOpenSections);
    };
  };

  return (
    <div className="accordion">
      {sections.map(({ value, title, contents }) => {
        const isExpanded = openSections.has(value);

        return (
          <div className="accordion-item" key={value}>
            <button className="accordion-item-title" type="button" onClick={handleClick(value)}>
              {title}
              <span
                aria-hidden={true}
                className={['accordion-icon', isExpanded && 'accordion-icon--rotated'].filter(Boolean).join(' ')}
              />
            </button>
            <div className="accordion-item-contents" hidden={!isExpanded}>
              {contents}
            </div>
          </div>
        );
      })}
    </div>
  );
}
