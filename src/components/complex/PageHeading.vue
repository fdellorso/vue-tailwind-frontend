<template>
  <div class="lg:flex lg:items-center lg:justify-between">
    <div class="min-w-0 flex-1">
      <h2
        class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl"
      >
        {{ title }}
      </h2>
      <div
        class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6"
      >
        <div class="mt-2 flex items-center text-sm text-gray-500">
          <BriefcaseIcon
            class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
          Full-time
        </div>
        <div class="mt-2 flex items-center text-sm text-gray-500">
          <LocationMarkerIcon
            class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
          Remote
        </div>
        <div class="mt-2 flex items-center text-sm text-gray-500">
          <CurrencyDollarIcon
            class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
          $120k &ndash; $140k
        </div>
        <div class="mt-2 flex items-center text-sm text-gray-500">
          <CalendarIcon
            class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
          Closing on January 9, 2020
        </div>
      </div>
    </div>
    <div class="mt-5 flex lg:mt-0 lg:ml-4">
      <span class="hidden sm:block">
        <button
          type="button"
          class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <PencilIcon
            class="-ml-1 mr-2 h-5 w-5 text-gray-500"
            aria-hidden="true"
          />
          Edit
        </button>
      </span>

      <span class="ml-3 hidden sm:block">
        <button
          type="button"
          class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <LinkIcon
            class="-ml-1 mr-2 h-5 w-5 text-gray-500"
            aria-hidden="true"
          />
          View
        </button>
      </span>

      <span class="sm:ml-3">
        <button
          type="button"
          class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <CheckIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Publish
        </button>
      </span>

      <!-- Dropdown -->
      <Menu as="div" class="relative ml-3 sm:hidden">
        <MenuButton
          class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          More
          <ChevronDownIcon
            class="-mr-1 ml-2 h-5 w-5 text-gray-500"
            aria-hidden="true"
          />
        </MenuButton>

        <transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <MenuItems
            class="absolute right-0 mt-2 -mr-1 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700'
                ]"
                >Edit</a
              >
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                :class="[
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700'
                ]"
                >View</a
              >
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </div>
</template>

<script setup>
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  LocationMarkerIcon,
  PencilIcon
} from '@heroicons/vue/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const props = defineProps({
  title: {
    type: String,
    required: false
  }
})
</script>

<style></style>
