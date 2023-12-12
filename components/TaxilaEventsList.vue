<template>
  <div style="border-radius: 10px;" class="px-8 py-6 bg-white text-left max-w-2xl mx-auto mb-12 sm:mb-20">
    <div id="dev-tess-widget-materials-title" style="font-size: 24px;" class="mb-2 flex flex-row">Other Events<img class='h-4 mt-3 ml-16' src="assets/icons/taxila.svg" alt="taxila.nl" href='https://taxila.nl'/></div>
    <link rel="stylesheet" property="stylesheet" href="https://elixirtess.github.io/TeSS_widgets/css/tess-widget.css"/>
    <div id="dev-tess-widget-materials-list" class="tess-widget tess-widget-list"></div>
    <div class="flex justify-end">
      <a href="https://taxila.nl" class="btn btn-outline btn-sm hover:bg-primary">
        Show more
      </a>
    </div>
    <script>
      class MyCustomRenderer {
        constructor(widget, element, options) {
          this.widget = widget;
          this.element = element;
          this.options = options;
        }

        initialize() {
          const title = document.createElement('h1');
          this.element.appendChild(title);
          this.list = document.createElement('ul');
          this.element.appendChild(this.list);
        }

        render(errors, data, response) {
          this.list.innerHTML = '';
          data.data.forEach((event) => {
            const eventElement = document.createElement('li');
            const title_div = document.createElement('a');
            title_div.textContent = event.attributes['title'];
            title_div.href = event.attributes['url'];
            eventElement.appendChild(title_div);
            const start_div = document.createElement('div');
            start_div.textContent = parseTime(event.attributes['start']);
            start_div.classList.add('text-sm');
            start_div.classList.add('text-gray-400');
            eventElement.appendChild(start_div);
            const location_div = document.createElement('div');
            location_div.textContent = event.attributes['online'] ? 'Online' : event.attributes['city'];
            location_div.classList.add('text-sm');
            location_div.classList.add('text-gray-400');
            eventElement.appendChild(location_div);
            this.list.appendChild(eventElement);
          });
        }
      }

      function parseTime(datestring) {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        const formattedDate = new Date(datestring).toLocaleDateString('en-US', options);
        return formattedDate;
      }

      function initTeSSWidgets() {
        TessWidget.Events(document.getElementById('dev-tess-widget-materials-list'),
          MyCustomRenderer,
          {
            opts: {
              enableSearch: true,
              truncateLength: 2
            },
            params: {
              q: "(research software) OR (open science) OR programming",
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