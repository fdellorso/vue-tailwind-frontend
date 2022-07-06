<template>
  <div class="overflow-hidden bg-white shadow sm:rounded-lg">
    <div class="border-t border-gray-200">
      <dl>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Full Name</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ name }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Email address</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ email }}
          </dd>
        </div>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Id</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {{ id }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Created at</dt>
          <dd
            v-if="created"
            class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
          >
            {{ new Date(created) }}
          </dd>
        </div>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Verified at</dt>
          <dd
            v-if="verified"
            class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
          >
            {{ new Date(verified) }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { PaperClipIcon } from '@heroicons/vue/solid'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  created: {
    type: String,
    required: true
  },
  verified: {
    type: String,
    required: false
  }
})
</script>

<style></style>
