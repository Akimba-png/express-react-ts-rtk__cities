type ValidatorMessageProps = {
  messageText: string,
  extraStyle?: {
    [key: string]: string;
  }
}

function ValidatorMessage({messageText, extraStyle = {}}: ValidatorMessageProps): JSX.Element {
  return (
    <span style={{...{color: 'red'}, ...extraStyle}}>{messageText}</span>
  );
}

export default ValidatorMessage;
