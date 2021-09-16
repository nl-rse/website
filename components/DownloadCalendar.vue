<template>
  <div class="btn" @click="downloadCalendar">
    Get calendar
  </div>
</template>

<script>
import { ICalendar } from 'datebook'

export default {
  name: 'DownloadCalendar',
  methods: {
    downloadCalendar () {
      const icalendar = new ICalendar({
        title: 'Happy Hour',
        location: 'The Bar, New York, NY',
        description: 'Let\'s blow off some steam from our weekly deployments to enjoy a tall cold one!',
        start: new Date('2020-07-04T19:00:00'),
        end: new Date('2020-07-04T23:30:00'),
        recurrence: {
          frequency: 'WEEKLY',
          interval: 2
        }
      })

      icalendar.download()
    }
  }
}
</script>

<style scoped>

</style>
