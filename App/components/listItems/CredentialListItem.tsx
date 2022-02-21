import type { CredentialRecord } from '@aries-framework/core'
import type { StackNavigationProp } from '@react-navigation/stack'

import { useNavigation } from '@react-navigation/core'
import { DateTime } from 'luxon'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { credentialDateTimeFormatString } from '../../constants'
import { ColorPallet, TextTheme } from '../../theme'
import { CredentialStackParams, Screens } from '../../types/navigators'
import { hashCode, hashToRGBA, parsedSchema } from '../../utils/helpers'
import Text from '../texts/Text'
import Title from '../texts/Title'

interface CredentialListItemProps {
  credential: CredentialRecord
}

const styles = StyleSheet.create({
  container: {
    minHeight: 125,
    backgroundColor: ColorPallet.brand.secondaryBackground,
    justifyContent: 'center',
    borderRadius: 15,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: TextTheme.headingTwo.fontSize * 2,
    height: TextTheme.headingTwo.fontSize * 2,
    margin: 12,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: TextTheme.headingTwo.fontSize,
    borderColor: TextTheme.headingTwo.color,
  },
  details: { flexShrink: 1 },
})

const CredentialListItem: React.FC<CredentialListItemProps> = ({ credential }) => {
  const navigation = useNavigation<StackNavigationProp<CredentialStackParams>>()
  const { t } = useTranslation()

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(Screens.CredentialDetails, { credentialId: credential.id })}
    >
      <View style={styles.row}>
        <View
          style={[
            styles.avatar,
            {
              borderColor: hashToRGBA(hashCode(parsedSchema(credential).name)),
            },
          ]}
        >
          <Title style={{ ...TextTheme.headingTwo, fontWeight: 'normal' }}>
            {parsedSchema(credential).name.charAt(0)}
          </Title>
        </View>
        <View style={styles.details}>
          <Title>{parsedSchema(credential).name}</Title>
          <Text>
            {t('CredentialDetails.Version')}: {parsedSchema(credential).version}
          </Text>
          <Text>
            {t('CredentialDetails.Issued')}:{' '}
            {DateTime.fromJSDate(credential.createdAt).toFormat(credentialDateTimeFormatString)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CredentialListItem
