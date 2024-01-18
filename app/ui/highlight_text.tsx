// highlight_text.tsx
type HighlightTextProps = {
  children: React.ReactNode;
};

const HighlightText: React.FC<HighlightTextProps> = ({ children }) => (
  <span className="font-bold text-yellow-700">{children}</span>
);

export default HighlightText;
