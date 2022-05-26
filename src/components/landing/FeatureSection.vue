<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2
          class="text-base font-semibold uppercase tracking-wide text-indigo-600"
        >
          {{ pretitle }}
        </h2>
        <p
          class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl"
        >
          {{ title }}
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          <slot></slot>
        </p>
      </div>

      <div class="mt-10">
        <dl
          class="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0"
        >
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div
                class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white"
              >
                <component
                  :is="feature.icon"
                  class="h-6 w-6"
                  aria-hidden="true"
                />
              </div>
              <p class="ml-16 text-lg font-medium leading-6 text-gray-900">
                {{ feature.name }}
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon
} from '@heroicons/vue/outline'

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon
  },
  {
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon
  }
]

const props = defineProps({
  title: {
    type: String,
    required: false
  },
  pretitle: {
    type: String,
    required: false
  }
})
</script>

<style></style>
