<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="overflow-hidden bg-white shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg font-medium leading-6 text-gray-900">
        {{ title }}
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        {{ subtitle }}
      </p>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Full name</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ fullName }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Application for</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ application }}
          </dd>
        </div>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Email address</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ email }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Salary expectation</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            ${{ salary }}
          </dd>
        </div>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">About</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <slot></slot>
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Attachments</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <ul
              role="list"
              class="divide-y divide-gray-200 rounded-md border border-gray-200"
            >
              <li
                class="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
              >
                <div class="flex w-0 flex-1 items-center">
                  <PaperClipIcon
                    class="h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span class="ml-2 w-0 flex-1 truncate">
                    resume_back_end_developer.pdf
                  </span>
                </div>
                <div class="ml-4 flex-shrink-0">
                  <a
                    href="#"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Download
                  </a>
                </div>
              </li>
              <li
                class="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
              >
                <div class="flex w-0 flex-1 items-center">
                  <PaperClipIcon
                    class="h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span class="ml-2 w-0 flex-1 truncate">
                    coverletter_back_end_developer.pdf
                  </span>
                </div>
                <div class="ml-4 flex-shrink-0">
                  <a
                    href="#"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Download
                  </a>
                </div>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { PaperClipIcon } from '@heroicons/vue/solid'

const props = defineProps({
  title: {
    type: String,
    required: false
  },
  subtitle: {
    type: String,
    required: false
  },
  fullName: {
    type: String,
    required: false
  },
  application: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  salary: {
    type: String,
    required: false
  },
  attachements: {
    type: Array,
    required: false
  },
  user: {
    type: Object
  }
})
</script>

<style></style>
