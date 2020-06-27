import React from 'react'
import { Heading } from './index'
import { text, select, boolean } from '@storybook/addon-knobs'
import { headingOptions, colorOptions, fontSizeOptions } from 'consts/options'

export const Sample = () => (
    <Heading
        tag={select('Heading', headingOptions, 'h1')}
        ellipsis={boolean('Ellipsis', false)}
        noSelect={boolean('Disable Select', false)}
        color={select('Color', colorOptions, 'primaryDark')}
        size={select('Size', fontSizeOptions, 'medium')}
    >
        {text('Text', 'Hello from Story')}
    </Heading>
)
