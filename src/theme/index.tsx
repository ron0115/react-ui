import React, { ReactElement } from 'react'
import * as sizes from './sizes'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { options } from 'consts'
import { Props, ColorTypes } from './types'
import {
    light,
    dark,
    getButtonStyles,
    getInputColors,
    getCardShadow,
} from './colors'
import ScrollBarStyles from './styles/scroll-bar'
import ResetCss from './styles/reset-css'
import { select } from '@storybook/addon-knobs'

const themes: {
    [key: string]: ColorTypes
} = {
    light,
    dark,
}

const getTheme = (theme: ThemeTypes): DefaultTheme => {
    const colors = themes[theme]
    return {
        fonts: {
            sizes: sizes.fontSizes,
        },
        icons: {
            sizes: sizes.iconSizes,
        },
        loading: {
            sizes: sizes.loading,
        },
        colors: colors,
        inputs: {
            sizes: sizes.inputs,
            colors: getInputColors(colors),
        },
        buttons: {
            sizes: sizes.button,
            colors: getButtonStyles(colors),
        },
        cards: {
            shadow: getCardShadow(colors),
            corner: sizes.cardCorner,
        },
    }
}

const Theme = ({ children }: Props): ReactElement => {
    return (
        <ThemeProvider
            theme={getTheme(select('Theme', options.themeOptions, 'light'))}
        >
            <ScrollBarStyles />
            <ResetCss />
            {children}
        </ThemeProvider>
    )
}

export default Theme
