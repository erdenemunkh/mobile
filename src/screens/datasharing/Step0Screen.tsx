import React, {useCallback} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Box, Text, Button, ButtonSingleLine} from 'components';
import {useI18n} from 'locale';
import {useNavigation} from '@react-navigation/native';

import {BaseDataSharingView} from './components/BaseDataSharingView';

export const Step0Screen = () => {
  const i18n = useI18n();
  const navigation = useNavigation();
  const onNext = useCallback(() => navigation.navigate('FormView'), [navigation]);

  return (
    <BaseDataSharingView showBackButton={false}>
      <ScrollView style={styles.flex}>
        <Box paddingHorizontal="m">
          <Text
            color="lightBlack"
            variant="bodyTitle2"
            marginBottom="l"
            accessibilityRole="header"
            accessibilityAutoFocus
          >
            {i18n.translate('DataUpload.Step0.Title')}
          </Text>

          <Text marginBottom="l">
            <Text fontWeight="normal" color="lightText" variant="bodyDescription">
              {i18n.translate('DataUpload.Step0.List.1a')}
            </Text>
            <Text color="lightText" variant="bodyDescription">
              {i18n.translate('DataUpload.Step0.List.1b')}
            </Text>
          </Text>
          <Text marginBottom="l">
            <Text fontWeight="normal" color="lightText" variant="bodyDescription">
              {i18n.translate('DataUpload.Step0.List.2a')}
            </Text>
            <Text color="lightText" variant="bodyDescription">
              {i18n.translate('DataUpload.Step0.List.2b')}
            </Text>
          </Text>
          <Text marginBottom="l">
            <Text fontWeight="normal" color="lightText" variant="bodyDescription">
              {i18n.translate('DataUpload.Step0.List.3a')}
            </Text>
            <Text color="lightText" variant="bodyDescription">
              {i18n.translate('DataUpload.Step0.List.3b')}
            </Text>
          </Text>
          <Text marginBottom="l">
            <Text fontWeight="normal" color="lightText" variant="bodyDescription">
              {i18n.translate('DataUpload.Step0.Body1')}
            </Text>
            <Text color="lightText" variant="bodyDescription">
              {i18n.translate('DataUpload.Step0.Body2')}
            </Text>
          </Text>

          <Box marginTop="m">
            <Button variant="thinFlat" text={i18n.translate('DataUpload.Step0.CTA')} onPress={onNext} />
          </Box>

          <Box marginTop="m" marginBottom="m">
            <ButtonSingleLine
              text={i18n.translate('DataUpload.Step0.NoCode')}
              variant="bigFlatDarkGrey"
              // color="textColorDark"
              internalLink
              onPress={onNext}
            />
          </Box>
        </Box>
      </ScrollView>
    </BaseDataSharingView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
