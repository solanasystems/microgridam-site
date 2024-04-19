<script>
import MainSolutionCard from './MainSolutionCard.vue';
import MainScreenshotComponent from './MainScreenshotComponent.vue';
export default {
  name: "main-monitoring",
  components: {
    MainSolutionCard,
    MainScreenshotComponent,
  },
  data() {
    return {
      cards: [
        {
          title: "Online Dashboard",
          icon: ['fas', 'display'],
          description: "Secure Dashboard for monitoring your Microgrid Sites.",
        },
        {
          title: "Monitoring",
          icon: ['fas', 'chart-line'],
          description: "Track your Energy Production.",
        },
        {
          title: "Security",
          icon: ['fas', 'video'],
          description: "Cameras with A.I. human presence detection alerts.",
        },
        {
          title: "Notifications",
          icon: ['fas', 'bell'],
          description: "Customizable alerts for system operations and security.",
        },
      ],
      sections: [
        {
          src: '/dashboard/today_usage_stats.png',
          blocks: [
            {
              title: "Tracking Power Generation",
              description: "Connecting either to manufacturer proprietary Data Loggers or using 3rd party Data Loggers, we can collect and store data that we can use to generate the reports that matter to you.",
            },
            {
              title: "Detailed Usage Tracking",
              description: "Using smart electric CT meters we can track your Site Usage at the grid level, individual panels, or even specific circuits.",
            },
          ],
        },
        {
          src: '/dashboard/today_usage_graph.png',
          blocks: [
            {
              title: "Tracking Batteries",
              description: "If your microgrid has batteries, you absolutely need to see your battery levels along with your energy production and site usage.",
            },
            {
              title: "Cumulative Stats",
              description: "View stats for all of your sites, a subset of sites, or just one. All visible from a single, easy to use interface, just change your selected filters.",
            },
          ],
        },
        {
          src: '/dashboard/month_usage_graph.png',
          blocks: [
            {
              title: "Historic & Centralized Data",
              description: "We will collect and aggregate your energy data from many different device vendors. We will try to gather and retain whatever historic data that is available so you don’t have to worry about losing history when devices automatically purge older data.",
            },
          ]
        },
        {
          src: '/dashboard/month_controller_graph.png',
          blocks: [
            {
              title: "Advanced Analytics",
              description: "Gain valuable insights into energy production patterns to help identify potential areas for improvement.",
            },
            {
              title: "Daily Reporting",
              description: "Receive a daily summary of the Power Generated via E-Mail or view it anytime on the Dashboard.",
            },
          ]
        },
        {
          src: '/dashboard/camera_activity_alert.png',
          blocks: [
            {
              title: "Customized Alerting",
              description: "Choose which alerts you would like to send to email or to your phone via push notifications. Configure which alerts you see where with easy-to-use notification configurations. Alerts can be sent via Text Message (SMS), Push Notification, or E-Mail immediately or as a daily summary.",
            },
            {
              title: "Notification Limiting",
              description: "We limit the frequency of individual alerts to a reasonable amount so that you do not get overwhelmed with too many alerts.",
            },
            {
              title: "Production Abnormality Notifications",
              description: "Receive notifications when an Inverter is not producing power or a fault is received.",
            },
          ]
        },
      ]
    }
  },
  methods: {

  }
}

</script>

<template>
  <div id="monitoring" class="section relative z-0 py-12 md:py-16 bg-white">
    <div class="container xl:max-w-6xl mx-auto px-4">
      <header class="text-center mx-auto mb-12 lg:px-20">
        <h2 class="text-2xl leading-normal mb-2 font-bold text-black">Monitoring</h2>
        <div class="section-hr"></div>
        <p class="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">Track your Microgrid Energy Production & Security.</p>
      </header>

      <div class="flex flex-wrap flex-row -mx-4 text-center justify-center">
        <main-solution-card v-for="info in cards" :info="info" size_classes="w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6" />
      </div>

      <main-screenshot-component v-for="(section,idx) in sections" :info="section" :seq="idx" />

    </div> <!-- end container -->
  </div><!--  End Content -->
</template>