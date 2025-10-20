import React, { useRef, useEffect } from "react";

interface EditableFieldProps {
  html: string;
  onChange: (value: string) => void;
  className?: string;
  // Fix: Use `React.ElementType` which is available via the React import, to resolve issues with the JSX namespace not being found.
  tagName?: React.ElementType;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const EditableField: React.FC<EditableFieldProps> = ({
  html,
  onChange,
  className = "",
  tagName = "div",
  onFocus,
  onBlur,
}) => {
  const elementRef = useRef<HTMLElement>(null);
  // This effect synchronizes the DOM with the `html` prop.
  useEffect(() => {
    const element = elementRef.current;
    // Update the DOM only if the prop is different from the current DOM content.
    // This check is crucial to prevent the cursor from jumping to the start
    // during user input, which was the cause of the reverse typing issue.
    if (element && element.innerHTML !== html) {
      element.innerHTML = html;
    }
  }, [html]); // Rerun this effect whenever the html prop changes.

  const handleInput = (evt: React.FormEvent<HTMLElement>) => {
    const newHtml = evt.currentTarget.innerHTML;
    // If the content is different, call the onChange callback.
    // This will trigger a re-render in the parent component with the new html value.
    if (html !== newHtml) {
      onChange(newHtml);
    }
  };

  const Tag = tagName;

  // We render the tag and let the useEffect hook handle populating and updating its content.
  // We remove `dangerouslySetInnerHTML` from here because it conflicted with our manual
  // DOM management in useEffect, causing the cursor issue. The useEffect hook now
  // correctly handles setting the initial content and subsequent updates.
  return (
    <Tag
      ref={elementRef}
      onInput={handleInput}
      onFocus={onFocus}
      onBlur={onBlur}
      contentEditable
      suppressContentEditableWarning
      className={`outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ef782a] focus:bg-orange-50 rounded transition-all duration-200 -m-1 p-1 ${className}`}
    />
  );
};
