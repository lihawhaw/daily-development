import { ThemeMode } from '@/store/system/theme-type'
import { atom } from 'jotai'

const themeAtom = atom<ThemeMode>(ThemeMode.LIGHT)
const nextThemeAtom = atom<ThemeMode, ThemeMode | undefined>(
  get => get(themeAtom),
  (get, set, mode?: ThemeMode) => {
    set(themeAtom, mode ? mode : get(themeAtom) === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK)
  },
)

export const getThemeAtoms = () => ({
  themeAtom,
  ThemeMode,
  nextThemeAtom,
})
