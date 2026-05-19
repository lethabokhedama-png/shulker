import { ThemePicker } from '@/components/settings/ThemePicker'

export default function Settings() {
  return (
    <div className="flex-1 overflow-y-auto p-6 max-w-2xl">
      <h2 className="text-text text-2xl font-bold mb-8">Settings</h2>
      <div className="space-y-10">
        <ThemePicker />
      </div>
    </div>
  )
}
