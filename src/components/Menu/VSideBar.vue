<template>
    <v-navigation-drawer persistent clipped mini-variant v-model="drawerFlag" app flat dark>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </v-navigation-drawer>
</template>

<script>
export default {
    props:['drawer'],
   
  components: {},
  data: () => ({
    items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ]
  }),

  computed: {
      drawerFlag: {
        get: function() {
          return this.drawer
        },
        set: function(val) {
          this.$emit('emitterdrawer', val)
        }
      }
    },
  
}
</script>

<style>

</style>