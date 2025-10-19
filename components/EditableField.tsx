import React, { useRef, useEffect } from 'react';

interface EditableFieldProps {
  html: string;
  onChange: (value: string) => void;
  className?: string;
  // Fix: Use `React.ElementType` which is available via the React import, to resolve issues with the JSX namespace not being found.
  tagName?: React.ElementType;
}

export const EditableField: React.FC<EditableFieldProps> = ({
  html,
  onChange,
  className = '',
  tagName = 'div',
}) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (element && element.innerHTML !== html) {
      element.innerHTML = html;
    }
  }, [html]);

  const handleInput = (evt: React.FormEvent<HTMLElement>) => {
    const newHtml = evt.currentTarget.innerHTML;
    if (html !== newHtml) {
      onChange(newHtml);
    }
  };
  
  const Tag = tagName;

  return (
    <Tag
      ref={elementRef}
      contentEditable
      suppressContentEditableWarning
      onInput={handleInput}
      className={`outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ef782a] focus:bg-orange-50 rounded transition-all duration-200 -m-1 p-1 ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
