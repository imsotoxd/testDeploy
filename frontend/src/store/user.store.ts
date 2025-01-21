import { BasicUserInfo } from '@/types/user.type'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type User = {
  data: BasicUserInfo | null,
  setData: (data: BasicUserInfo) => void
  delData: () => void
}


export const useUserStore = create<User>()(
  persist(
    (set) => ({
      data: null,
      setData: (data) => set({ data }),
      delData: () => set({ data: null })
    }),
    {
      name: 'user-store',
      storage: createJSONStorage(() => localStorage)
    }
  )
)

