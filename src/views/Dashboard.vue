<template>
  <PageComponent title="Dashboard">
    <UserDescriptionList
      :name="user.name"
      :email="user.email"
      :id="user.id"
      :created="user.created_at"
      :verified="user.email_verified_at"
    >
    </UserDescriptionList>
  </PageComponent>
</template>

<script setup>
import PageComponent from '../components/PageComponent.vue'
import PageHeading from '../components/complex/PageHeading.vue'
import UserDescriptionList from '../components/complex/UserDescriptionList.vue'
import Pagination from '../components/complex/Pagination.vue'
import Banner from '../components/complex/Banner.vue'

import { ref, reactive } from 'vue'
import { useUserStore } from '@/stores/user.js'

const user = useUserStore()
</script>

<style></style>
