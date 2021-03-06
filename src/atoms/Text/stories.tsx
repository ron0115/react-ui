import React, { ReactElement } from 'react'
import { Text } from './index'
import { fontSizeOptions, colorOptions } from 'consts/options'
import { select, boolean, text } from '@storybook/addon-knobs'

export const Sample = (): ReactElement => (
    <Text
        ellipsis={boolean('Ellipsis', false)}
        noSelect={boolean('Disable Select', false)}
        color={select<IGlobalColors>('Color', colorOptions, 'primaryDark')}
        size={select<FontSizeType>('Size', fontSizeOptions, 'medium')}
    >
        {text('Text', 'Hello Button')}
    </Text>
)
