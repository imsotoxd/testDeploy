import { Categorie } from '@/types/categories.type'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type Categories = {
  data: Categorie[],
  setData: (data: Categorie[]) => void
}

export const useCategoriesStore = create<Categories>()(
  persist(
    (set) => ({
      data: [],
      setData: (data) => set({ data })
    }),
    {
      name: 'categories-store',
      storage: createJSONStorage(() => localStorage)
    }
  )
)


type filterProduct = {
  filter: string,
  setFilter: (filter: string) => void,
  cleanFilter: () => void
}

export const useFilterProduct = create<filterProduct>()(
  persist(
    (set) => ({
      filter: '',
      setFilter: (filter) => set({ filter }),
      cleanFilter: () => set({ filter: '' })
    }),
    {
      name: 'filter-product',
      storage: createJSONStorage(() => localStorage)
    }
  )
)