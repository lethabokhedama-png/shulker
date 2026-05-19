export const API_BASE = '/api/v1'
export const WS_URL   = '/'

export const THEMES = [
  { id: 'dark',        label: 'Dark',          preview: '#121212' },
  { id: 'amoled',      label: 'AMOLED',        preview: '#000000' },
  { id: 'dracula',     label: 'Dracula',        preview: '#282a36' },
  { id: 'catppuccin',  label: 'Catppuccin',     preview: '#1e1e2e' },
  { id: 'nord',        label: 'Nord',           preview: '#2e3440' },
  { id: 'rosepine',    label: 'Rosé Pine',      preview: '#191724' },
  { id: 'solarized',   label: 'Solarized',      preview: '#002b36' },
  { id: 'glass',       label: 'Glass',          preview: '#0d0d0d' },
  { id: 'highcontrast',label: 'High Contrast',  preview: '#000000' },
] as const
