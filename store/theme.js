import { writable } from 'svelte/store';
import _ from 'lodash';
import {presets} from '../presets.js';

let lightTheme = _.first(presets)
let darkTheme = _.last(presets)
let isDark = false;

export const theme = writable({
  background: lightTheme.colors.background,
  color: lightTheme.colors.text
})

export const setTheme = (e) => {
  isDark = e
  if(isDark === true) {
    theme.set({
      background: darkTheme.colors.background,
      color: darkTheme.colors.text
    })
  } else  {
    theme.set({
      background: lightTheme.colors.background,
      color: lightTheme.colors.text
    })
  }
}

