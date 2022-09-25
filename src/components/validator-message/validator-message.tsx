export type ExtraStyle = {
  [key: string]: string;
}

type ValidatorMessageProps = {
  messageText: string,
  extraStyle?: ExtraStyle,
}

function ValidatorMessage({messageText, extraStyle = {}}: ValidatorMessageProps): JSX.Element {
  return (
    <span style={{...{color: 'red'}, ...extraStyle}}>{messageText}</span>
  );
}

export default ValidatorMessage;
