<template>
  <div style="border-radius: 10px;" class="px-8 py-6 bg-white text-left max-w-2xl mx-auto mb-12 sm:mb-20">
    <div id="dev-tess-widget-materials-title" style="font-size: 24px;" class="mb-2">Taxila Events</div>
    <link rel="stylesheet" property="stylesheet" href="https://elixirtess.github.io/TeSS_widgets/css/tess-widget.css"/>
    <div id="dev-tess-widget-materials-list" class="tess-widget tess-widget-list"></div>
    <div class="flex justify-end">
      <nuxt-link to="https://taxila.nl" class="btn btn-outline btn-sm hover:bg-primary">
        More events
      </nuxt-link>
    </div>
    <script>
    function initTeSSWidgets() {
      TessWidget.Events(document.getElementById('dev-tess-widget-materials-list'),
        'SimpleList',
        {
          opts: {
            enableSearch: true,
            truncateLength: 2
          },
          params: {
            q: "science OR technology OR python OR programming OR (research software)",
            pageSize: 10,
          },
          baseUrl: 'https://taxila.nl'
        }
      );
    }
    </script>
    <script async="" defer="" src="https://elixirtess.github.io/TeSS_widgets/js/tess-widget-standalone.js" onload="initTeSSWidgets()"></script>
  </div>
  <!-- collections: ['NL-RSE'] -->
</template>
 
<style>
ul {list-style-type: disc;}
</style>