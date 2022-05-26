<template>
  <Transition name="fade">
    <div class="absolute z-10 w-full bg-indigo-600" v-show="open">
      <div class="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-center justify-between">
          <div class="flex w-0 flex-1 items-center">
            <span class="flex rounded-lg bg-indigo-800 p-2">
              <SpeakerphoneIcon class="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p class="ml-3 truncate font-medium text-white">
              <span class="md:hidden"> {{ littletitle }} </span>
              <span class="hidden md:inline">
                {{ title }}
              </span>
            </p>
          </div>
          <div
            class="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto"
          >
            <a
              href="#"
              class="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
            >
              Learn more
            </a>
          </div>
          <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              class="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              @click="open = false"
            >
              <span class="sr-only">Dismiss</span>
              <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import { SpeakerphoneIcon, XIcon } from '@heroicons/vue/outline'

const open = ref(true)

const props = defineProps({
  title: {
    type: String,
    required: false
  },
  littletitle: {
    type: String,
    required: false
  }
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
