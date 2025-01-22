import { defineStore } from 'pinia'

export const timerStore = defineStore('timerStore', {
  state: () => {
    return { lastStart: 0 }
  },
  actions: {
    setLastStart(lastStart) {
      this.lastStart = lastStart;
    },
  },
})