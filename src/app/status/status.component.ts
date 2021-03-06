import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  headLink = [
    {
      href: '/HOME',
      text: 'HOME'
    },
    {
      href: '/STATS',
      text: 'STATS'
    },
    {
      href: '/CONTACT',
      text: 'CONTACT'
    },
    {
      href: '/ABOUT',
      text: 'ABOUT'
    }
  ];
  gdpData = {
    'AF': 16.63,
    'AL': 11.58,
    'DZ': 158.97,
    'AO': 85.81,
    'AG': 1.1,
    'AR': 351.02,
    'AM': 8.83,
    'AU': 1219.72,
    'AT': 366.26,
    'AZ': 52.17,
    'BS': 7.54,
    'BH': 21.73,
    'BD': 105.4,
    'BB': 3.96,
    'BY': 52.89,
    'BE': 461.33,
    'CM': 21.88,
    'CA': 1563.66,
    'CV': 1.57,
    'CI': 22.38,
    'HR': 59.92,
    'CY': 22.75,
    'CZ': 195.23,
    'DK': 304.56,
    'DJ': 1.14,
    'DM': 0.38,
    'DO': 50.87,
    'SV': 21.8,
    'GQ': 14.55,
    'ER': 2.25,
    'EE': 19.22,
    'ET': 30.94,
    'FJ': 3.15,
    'FI': 231.98,
    'FR': 2555.44,
    'GA': 12.56,
    'GM': 1.04,
    'GE': 11.23,
    'DE': 3305.9,
    'GH': 18.06,
    'GR': 305.01,
    'GD': 0.65,
    'GT': 40.77,
    'GN': 4.34,
    'GW': 0.83,
    'GY': 2.2,
    'HT': 6.5,
    'HN': 15.34,
    'HK': 226.49,
    'HU': 132.28,
    'IS': 12.77,
    'IN': 1430.02,
    'ID': 695.06,
    'IR': 337.9,
    'IQ': 84.14,
    'IE': 204.14,
    'IL': 201.25,
    'IT': 2036.69,
    'JM': 13.74,
    'JP': 5390.9,
    'JO': 27.13,
    'KZ': 129.76,
    'KE': 32.42,
    'KI': 0.15,
    'KR': 986.26,
    'UNDEFINED': 5.73,
    'KW': 117.32,
    'KG': 4.44,
    'LA': 6.34,
    'LV': 23.39,
    'LB': 39.15,
    'LS': 1.8,
    'LR': 0.98,
    'LY': 77.91,
    'LT': 35.73,
    'LU': 52.43,
    'MK': 9.58,
    'MG': 8.33,
    'MW': 5.04,
    'MY': 218.95,
    'MV': 1.43,
    'ML': 9.08,
    'MT': 7.8,
    'MR': 3.49,
    'MU': 9.43,
    'MX': 1004.04,
    'MD': 5.36,
    'MN': 5.81,
    'ME': 3.88,
    'MA': 91.7,
    'MZ': 10.21,
    'MM': 35.65,
    'NA': 11.45,
    'NP': 15.11,
    'NL': 770.31,
    'NZ': 138,
    'NI': 6.38,
    'NE': 5.6,
    'NG': 206.66,
    'NO': 413.51,
    'OM': 53.78,
    'PK': 174.79,
    'PA': 27.2,
    'PG': 8.81,
    'PY': 17.17,
    'PE': 153.55,
    'PH': 189.06,
    'PL': 438.88,
    'PT': 223.7,
    'QA': 126.52,
    'RO': 158.39,
    'RU': 1476.91,
    'RW': 5.69,
    'WS': 0.55,
    'ST': 0.19,
    'SA': 434.44,
    'SN': 12.66,
    'RS': 38.92,
    'SC': 0.92,
    'SL': 1.9,
    'SG': 217.38,
    'SK': 86.26,
    'SI': 46.44,
    'SB': 0.67,
    'ZA': 354.41,
    'ES': 1374.78,
    'LK': 48.24,
    'KN': 0.56,
    'LC': 1,
    'VC': 0.58,
    'SD': 65.93,
    'SR': 3.3,
    'SZ': 3.17,
    'SE': 444.59,
    'CH': 522.44,
    'SY': 59.63,
    'TW': 426.98,
    'TJ': 5.58,
    'TZ': 22.43,
    'TH': 312.61,
    'TL': 0.62,
    'TG': 3.07,
    'TO': 0.3,
    'TT': 21.2,
    'TN': 43.86,
    'TR': 729.05,
    'TM': 0,
    'UG': 17.12,
    'UA': 136.56,
    'AE': 239.65,
    'GB': 2258.57,
    'US': 14624.18,
    'UY': 40.71,
    'UZ': 37.72,
    'VU': 0.72,
    'VE': 285.21,
    'VN': 101.99,
    'YE': 30.02,
    'ZM': 15.69,
    'ZW': 5.57
  };
  layoutColorCodes = {
    'blue': '#4b8df8',
    'red': '#e02222',
    'green': '#35aa47',
    'purple': '#852b99',
    'grey': '#555555',
    'light-grey': '#fafafa',
    'yellow': '#ffb848'
  };
  // chart
  chartOption = {
    title: {
      text: 'Mounthy Stats',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}'
    },
    legend: {
      left: 'left',
      data: ['Appl', 'average']
    },
    xAxis: {
      type: 'category',
      name: 'x',
      splitLine: {show: false},
      data: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '15%',

    },
    yAxis: {
      type: 'log',
      name: 'y'
    },
    series: [
      {
        name: 'Appl',
        type: 'line',
        data: [1, 3, 9, 27, 1, 7, 7]
      },
      {
        name: 'average',
        type: 'line',
        data: [1, 2, 4, 8, 16, 32, 64]
      },

    ]
  };
  chartOptions = {
    responsive: true
  };
  chartData = [
    { data: [1, 3, 9, 27, 1, 7, 7], label: 'Appl' },
    { data: [1, 2, 4, 8, 16, 32, 64], label: 'average' }
  ];
  chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  constructor() { }

  ngOnInit() {
    // this.initMiniCharts();
    // $('body').html('color blue');
    // App.init(); // initlayout and core plugins
    // Index.initCharts(); // init index page's custom scripts
    // Index.initChat();

    // Index.initMiniCharts();
    // Charts.init();
    // Charts.initCharts();
    // initLineChart();

    // $('#world-map').vectorMap({
    //   map: 'world_merc_en',
    //   backgroundColor: '#ffffff',
    //   zoomOnScroll: false,
    //
    //   regionStyle: {
    //     initial: {
    //       fill: '#e1e1e1',
    //       stroke: 'none',
    //       'stroke-width': 0,
    //       'stroke-opacity': 1
    //     },
    //     hover: {
    //       'fill-opacity': 0.8
    //     },
    //     selected: {
    //       fill: '#8dc859'
    //     },
    //     selectedHover: {}
    //   },
    //   markerStyle: {
    //     initial: {
    //       fill: '#FF6C60',
    //       stroke: '#FF6C60'
    //     }
    //   },
    //   markers: [
    //     {latLng: [38.35, -121.92], name: 'Los Angeles - 23'},
    //     {latLng: [39.36, -73.12], name: 'New York - 84'},
    //     {latLng: [50.49, -0.23], name: 'London - 43'},
    //     {latLng: [36.29, 138.54], name: 'Tokyo - 33'},
    //     {latLng: [37.02, 114.13], name: 'Beijing - 91'},
    //     {latLng: [-32.59, 150.21], name: 'Sydney - 22'},
    //   ],
    //   series: {
    //     regions: [{
    //       values: this.gdpData,
    //       scale: ['#6fc4fe', '#58DDD0'],
    //       normalizeFunction: 'polynomial'
    //     }]
    //   },
    //   onRegionLabelShow: function (e, el, code) {
    //     el.html(el.html() + ' (' + this.gdpData[code] + ')');
    //   }
    // });
  }
  initMiniCharts() {
    $('.easy-pie-chart .number.transactions').easyPieChart({
      animate: 1000,
      size: 75,
      lineWidth: 3,
      barColor: this.getLayoutColorCode('yellow')
    });

    $('.easy-pie-chart .number.visits').easyPieChart({
      animate: 1000,
      size: 75,
      lineWidth: 3,
      barColor: this.getLayoutColorCode('green')
    });

    $('.easy-pie-chart .number.bounce').easyPieChart({
      animate: 1000,
      size: 75,
      lineWidth: 3,
      barColor: this.getLayoutColorCode('red')
    });

    $('.easy-pie-chart-reload').click(function(){
      $('.easy-pie-chart .number').each(function() {
        const newValue = Math.floor(100 * Math.random());
        $(this).data('easyPieChart').update(newValue);
        $('span', this).text(newValue);
      });
    });
  }
  getLayoutColorCode(name) {
    if (this.layoutColorCodes[name]) {
      return this.layoutColorCodes[name];
    } else {
      return '';
    }
  }
}
