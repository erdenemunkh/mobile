import {ResponsiveValue} from '@shopify/restyle';
import React from 'react';
import {Theme} from 'shared/theme';
import {useAccessibilityAutoFocus} from 'shared/useAccessibilityAutoFocus';

import {Box} from './Box';
import {Button} from './Button';
import {Icon, IconProps} from './Icon';
import {Text} from './Text';

export interface InfoBlockProps {
  icon?: IconProps['name'];
  text: string;
  title?: string;
  titleBolded?: string;
  color: keyof Theme['colors'];
  backgroundColor: keyof Theme['colors'];
  button: {
    text: string;
    action: () => void;
  };
  showButton?: boolean;
  focusOnTitle?: boolean;
  descriptionColor?: ResponsiveValue<keyof Theme['colors'], Theme>;
}

export const InfoBlock = ({
  icon,
  text,
  button: {text: buttonText, action},
  color,
  backgroundColor,
  title,
  titleBolded,
  showButton,
  descriptionColor,
  focusOnTitle,
}: InfoBlockProps) => {
  const autoFocusRef = useAccessibilityAutoFocus(focusOnTitle);
  return (
    <Box borderRadius={10} backgroundColor={backgroundColor} padding="m" alignItems="flex-start">
      {icon && (
        <Box marginBottom="s">
          <Icon name={icon} size={24} />
        </Box>
      )}
      {(title || titleBolded) && (
        <Box marginBottom="m" justifyContent="center" flexDirection="row" flexWrap="wrap">
          <Text
            focusRef={focusOnTitle ? autoFocusRef : null}
            variant="menuItemTitle"
            accessibilityRole="header"
            textAlign="left"
          >
            {title && <Text color={color}>{title}</Text>}
            {titleBolded && (
              <Text color={color} variant="menuItemTitle" fontWeight="bold">
                {titleBolded}
              </Text>
            )}
          </Text>
        </Box>
      )}
      <Text variant="bodyDescription" color={descriptionColor || 'lightText'} marginBottom="m">
        {text}
      </Text>
      {showButton ? (
        <Box marginTop="m" marginHorizontal="none" alignSelf="stretch">
          <Button text={buttonText} onPress={action} variant="thinFlat" color={color} />
        </Box>
      ) : null}
    </Box>
  );
};

InfoBlock.defaultProps = {
  showButton: true,
};
