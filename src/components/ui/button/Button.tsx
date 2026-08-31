interface IWButtonProps {
  text: string
}

const WButton: React.FC<IWButtonProps> = ({ text }) => {
  return (
    <button
      autoFocus
      autoCorrect=""
      autoSave=""
    >
      {text}
    </button>
  );
};

export default WButton;
