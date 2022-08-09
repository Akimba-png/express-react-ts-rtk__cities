import { useState, useEffect, ChangeEvent } from 'react';
import { checkRuPluralPostfix } from '../util';
import { ValidateOption, VALIDATOR_MESSAGE_SHOW_TIME } from '../const';

export type Validator = {
  [ValidateOption.MinLength]?: number;
  [ValidateOption.MaxLength]?: number;
  [ValidateOption.NotEmpty]?: boolean;
};

export const useValidate = (value: string, validator: Validator) => {
  const [minLengthError, setMinLengthError] = useState('');
  const [maxLengthError, setMaxLengthError] = useState('');
  const [isEmptyError, setEmptyErrorStatus] = useState(false);
  const [isControlValid, setControlValidStatus] = useState(false);

  const validateOptions = Object.keys(validator);
  useEffect(() => {
    for (const validateOption of validateOptions) {
      switch (validateOption) {
        case ValidateOption.MinLength: {
          const lengthDiff = validator[validateOption]! - value.length;
          lengthDiff > 0
            ? setMinLengthError(
              `Слишком коротко. Добавим ${lengthDiff} ${checkRuPluralPostfix(
                lengthDiff,
                'символ'
              )}?`
            )
            : setMinLengthError('');
          break;
        }
        case ValidateOption.MaxLength: {
          const lengthDiff = value.length - validator[validateOption]!;
          lengthDiff > 0
            ? setMaxLengthError(
              `Очень развёрнуто. Сократим на ${lengthDiff!} ${checkRuPluralPostfix(
                lengthDiff,
                'символ'
              )}?`
            )
            : setMaxLengthError('');
          break;
        }
        case ValidateOption.NotEmpty:
          !value.length === validator[validateOption]
            ? setEmptyErrorStatus(true)
            : setEmptyErrorStatus(false);
          break;
        default:
          break;
      }
    }
  }, [value, validateOptions, validator]);

  useEffect(() => {
    if (!minLengthError && !maxLengthError && !isEmptyError) {
      setControlValidStatus(true);
    } else {
      setControlValidStatus(false);
    }
  }, [minLengthError, maxLengthError, isEmptyError]);

  return {
    isControlValid,
    minLengthError,
    maxLengthError,
  };
};

export const useInput = (initialValue: string, validator: Validator) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [isBlurred, setBlurredStatus] = useState(false);

  const { isControlValid, minLengthError, maxLengthError } = useValidate(
    inputValue,
    validator
  );

  const handleInputChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(evt.target.value);
  };

  const handleBlurredStatus = () => {
    setBlurredStatus(true);
    setTimeout(() => {
      setBlurredStatus(false);
    }, VALIDATOR_MESSAGE_SHOW_TIME);
  };

  return {
    inputValue,
    isBlurred,
    isControlValid,
    handleInputChange,
    handleBlurredStatus,
    minLengthError,
    maxLengthError,
  };
};
