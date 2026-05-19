export type ThemeId =
  | 'dark'
  | 'amoled'
  | 'dracula'
  | 'catppuccin'
  | 'nord'
  | 'rosepine'
  | 'solarized'
  | 'glass'
  | 'highcontrast'

export interface Theme {
  id: ThemeId
  label: string
  preview: string
}
