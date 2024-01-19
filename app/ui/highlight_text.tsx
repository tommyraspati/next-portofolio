// highlight_text.tsx
type HighlightTextProps = {
  children: React.ReactNode;
  darkMode: boolean;
};

const HighlightText: React.FC<HighlightTextProps> = ({ children, darkMode }) => (
  <span className={`${darkMode ? 'highlighted-text-dark-mode' : 'highlighted-text-light-mode'} font-bold`}>{children}</span>
);

export default HighlightText;
