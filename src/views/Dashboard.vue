<template>
  <Banner title="Announce" littletitle="Ann"></Banner>
  <PageComponent title="Dashboard">
    <DescriptionList
      title="Description List"
      subtitle="subtitle"
      fullName="Francesco Dell'Orso"
    >
      Description
    </DescriptionList>
  </PageComponent>
  <Pagination></Pagination>
</template>

<script setup>
import PageComponent from '../components/PageComponent.vue'
import PageHeading from '../components/complex/PageHeading.vue'
import DescriptionList from '../components/complex/DescriptionList.vue'
import Pagination from '../components/complex/Pagination.vue'
import Banner from '../components/complex/Banner.vue'
</script>

<style></style>
