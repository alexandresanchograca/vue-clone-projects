const stockItems : StockItem[] = [
    {
        name: "GALP",
        fullName: "GALP Energia",
        priceDelta: 0.88,
        yesterdayIncrease: true,
        svgChart: `<svg
      class="stock-chart-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 70 18">
      <path
        d="M0,0.8372093023255649L2,0L4,5.023255813953459L6,6.27906976744188L8,8.790697674418572L10,10.883720930232558L12,14.232558139534888L14,15.069767441860453L16,15.488372093023234L18,15.90697674418609L20,15.069767441860453L22,15.488372093023234L24,12.97674418604654L26,15.069767441860453L28,14.232558139534888L30,15.069767441860453L32,16.325581395348873L34,18"
        class="previous-day"
        stroke-linejoin="round"></path>
      <path
        d="M35,8.790697674418572L36.94444444444444,10.046511627906993L38.888888888888886,11.302325581395339L40.83333333333333,10.883720930232558L42.77777777777778,10.465116279069774L44.722222222222214,12.55813953488376L46.666666666666664,10.465116279069774L48.611111111111114,10.465116279069774L50.55555555555556,10.465116279069774L52.5,11.302325581395339L54.44444444444444,12.139534883720904L56.388888888888886,11.720930232558121"
        class="current-day"
        stroke-linejoin="round"></path>
    </svg>`,
    },
    {
        name: "BCP",
        fullName: "Millenium BCP",
        priceDelta: 1.27,
        yesterdayIncrease: false,
        svgChart: `<svg
      class="stock-chart-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 70 18">
      <path
        d="M0,0.8372093023255649L2,0L4,5.023255813953459L6,6.27906976744188L8,8.790697674418572L10,10.883720930232558L12,14.232558139534888L14,15.069767441860453L16,15.488372093023234L18,15.90697674418609L20,15.069767441860453L22,15.488372093023234L24,12.97674418604654L26,15.069767441860453L28,14.232558139534888L30,15.069767441860453L32,16.325581395348873L34,18"
        class="previous-day"
        stroke-linejoin="round"></path>
      <path
        d="M35,8.790697674418572L36.94444444444444,10.046511627906993L38.888888888888886,11.302325581395339L40.83333333333333,10.883720930232558L42.77777777777778,10.465116279069774L44.722222222222214,12.55813953488376L46.666666666666664,10.465116279069774L48.611111111111114,10.465116279069774L50.55555555555556,10.465116279069774L52.5,11.302325581395339L54.44444444444444,12.139534883720904L56.388888888888886,11.720930232558121"
        class="current-day"
        stroke-linejoin="round"></path>
    </svg>`,
    },
    {
        name: "MSFT",
        fullName: "Microsoft",
        priceDelta: 1.88,
        yesterdayIncrease: false,
        svgChart: `<svg
      class="stock-chart-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 70 18">
      <path
        d="M0,0.8372093023255649L2,0L4,5.023255813953459L6,6.27906976744188L8,8.790697674418572L10,10.883720930232558L12,14.232558139534888L14,15.069767441860453L16,15.488372093023234L18,15.90697674418609L20,15.069767441860453L22,15.488372093023234L24,12.97674418604654L26,15.069767441860453L28,14.232558139534888L30,15.069767441860453L32,16.325581395348873L34,18"
        class="previous-day"
        stroke-linejoin="round"></path>
      <path
        d="M35,8.790697674418572L36.94444444444444,10.046511627906993L38.888888888888886,11.302325581395339L40.83333333333333,10.883720930232558L42.77777777777778,10.465116279069774L44.722222222222214,12.55813953488376L46.666666666666664,10.465116279069774L48.611111111111114,10.465116279069774L50.55555555555556,10.465116279069774L52.5,11.302325581395339L54.44444444444444,12.139534883720904L56.388888888888886,11.720930232558121"
        class="current-day"
        stroke-linejoin="round"></path>
    </svg>`,
    },
    {
        name: "GOOG",
        fullName: "Alphabet Inc.",
        priceDelta: 2.07,
        yesterdayIncrease: true,
        svgChart: `<svg
      class="stock-chart-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 70 18">
      <path
        d="M0,0.8372093023255649L2,0L4,5.023255813953459L6,6.27906976744188L8,8.790697674418572L10,10.883720930232558L12,14.232558139534888L14,15.069767441860453L16,15.488372093023234L18,15.90697674418609L20,15.069767441860453L22,15.488372093023234L24,12.97674418604654L26,15.069767441860453L28,14.232558139534888L30,15.069767441860453L32,16.325581395348873L34,18"
        class="previous-day"
        stroke-linejoin="round"></path>
      <path
        d="M35,8.790697674418572L36.94444444444444,10.046511627906993L38.888888888888886,11.302325581395339L40.83333333333333,10.883720930232558L42.77777777777778,10.465116279069774L44.722222222222214,12.55813953488376L46.666666666666664,10.465116279069774L48.611111111111114,10.465116279069774L50.55555555555556,10.465116279069774L52.5,11.302325581395339L54.44444444444444,12.139534883720904L56.388888888888886,11.720930232558121"
        class="current-day"
        stroke-linejoin="round"></path>
    </svg>`,
    },
    {
        name: "MSFT",
        fullName: "Microsoft",
        priceDelta: 1.88,
        yesterdayIncrease: false,
        svgChart: `<svg
      class="stock-chart-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 70 18">
      <path
        d="M0,0.8372093023255649L2,0L4,5.023255813953459L6,6.27906976744188L8,8.790697674418572L10,10.883720930232558L12,14.232558139534888L14,15.069767441860453L16,15.488372093023234L18,15.90697674418609L20,15.069767441860453L22,15.488372093023234L24,12.97674418604654L26,15.069767441860453L28,14.232558139534888L30,15.069767441860453L32,16.325581395348873L34,18"
        class="previous-day"
        stroke-linejoin="round"></path>
      <path
        d="M35,8.790697674418572L36.94444444444444,10.046511627906993L38.888888888888886,11.302325581395339L40.83333333333333,10.883720930232558L42.77777777777778,10.465116279069774L44.722222222222214,12.55813953488376L46.666666666666664,10.465116279069774L48.611111111111114,10.465116279069774L50.55555555555556,10.465116279069774L52.5,11.302325581395339L54.44444444444444,12.139534883720904L56.388888888888886,11.720930232558121"
        class="current-day"
        stroke-linejoin="round"></path>
    </svg>`,
    },
    {
        name: "GOOG",
        fullName: "Alphabet Inc.",
        priceDelta: 2.07,
        yesterdayIncrease: true,
        svgChart: `<svg
      class="stock-chart-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 70 18">
      <path
        d="M0,0.8372093023255649L2,0L4,5.023255813953459L6,6.27906976744188L8,8.790697674418572L10,10.883720930232558L12,14.232558139534888L14,15.069767441860453L16,15.488372093023234L18,15.90697674418609L20,15.069767441860453L22,15.488372093023234L24,12.97674418604654L26,15.069767441860453L28,14.232558139534888L30,15.069767441860453L32,16.325581395348873L34,18"
        class="previous-day"
        stroke-linejoin="round"></path>
      <path
        d="M35,8.790697674418572L36.94444444444444,10.046511627906993L38.888888888888886,11.302325581395339L40.83333333333333,10.883720930232558L42.77777777777778,10.465116279069774L44.722222222222214,12.55813953488376L46.666666666666664,10.465116279069774L48.611111111111114,10.465116279069774L50.55555555555556,10.465116279069774L52.5,11.302325581395339L54.44444444444444,12.139534883720904L56.388888888888886,11.720930232558121"
        class="current-day"
        stroke-linejoin="round"></path>
    </svg>`,
    },
    {
        name: "MSFT",
        fullName: "Microsoft",
        priceDelta: 1.88,
        yesterdayIncrease: false,
        svgChart: `<svg
      class="stock-chart-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 70 18">
      <path
        d="M0,0.8372093023255649L2,0L4,5.023255813953459L6,6.27906976744188L8,8.790697674418572L10,10.883720930232558L12,14.232558139534888L14,15.069767441860453L16,15.488372093023234L18,15.90697674418609L20,15.069767441860453L22,15.488372093023234L24,12.97674418604654L26,15.069767441860453L28,14.232558139534888L30,15.069767441860453L32,16.325581395348873L34,18"
        class="previous-day"
        stroke-linejoin="round"></path>
      <path
        d="M35,8.790697674418572L36.94444444444444,10.046511627906993L38.888888888888886,11.302325581395339L40.83333333333333,10.883720930232558L42.77777777777778,10.465116279069774L44.722222222222214,12.55813953488376L46.666666666666664,10.465116279069774L48.611111111111114,10.465116279069774L50.55555555555556,10.465116279069774L52.5,11.302325581395339L54.44444444444444,12.139534883720904L56.388888888888886,11.720930232558121"
        class="current-day"
        stroke-linejoin="round"></path>
    </svg>`,
    },
    {
        name: "GOOG",
        fullName: "Alphabet Inc.",
        priceDelta: 2.07,
        yesterdayIncrease: true,
        svgChart: `<svg
      class="stock-chart-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 70 18">
      <path
        d="M0,0.8372093023255649L2,0L4,5.023255813953459L6,6.27906976744188L8,8.790697674418572L10,10.883720930232558L12,14.232558139534888L14,15.069767441860453L16,15.488372093023234L18,15.90697674418609L20,15.069767441860453L22,15.488372093023234L24,12.97674418604654L26,15.069767441860453L28,14.232558139534888L30,15.069767441860453L32,16.325581395348873L34,18"
        class="previous-day"
        stroke-linejoin="round"></path>
      <path
        d="M35,8.790697674418572L36.94444444444444,10.046511627906993L38.888888888888886,11.302325581395339L40.83333333333333,10.883720930232558L42.77777777777778,10.465116279069774L44.722222222222214,12.55813953488376L46.666666666666664,10.465116279069774L48.611111111111114,10.465116279069774L50.55555555555556,10.465116279069774L52.5,11.302325581395339L54.44444444444444,12.139534883720904L56.388888888888886,11.720930232558121"
        class="current-day"
        stroke-linejoin="round"></path>
    </svg>`,
    },
    {
        name: "MSFT",
        fullName: "Microsoft",
        priceDelta: 1.88,
        yesterdayIncrease: false,
        svgChart: `<svg
      class="stock-chart-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 70 18">
      <path
        d="M0,0.8372093023255649L2,0L4,5.023255813953459L6,6.27906976744188L8,8.790697674418572L10,10.883720930232558L12,14.232558139534888L14,15.069767441860453L16,15.488372093023234L18,15.90697674418609L20,15.069767441860453L22,15.488372093023234L24,12.97674418604654L26,15.069767441860453L28,14.232558139534888L30,15.069767441860453L32,16.325581395348873L34,18"
        class="previous-day"
        stroke-linejoin="round"></path>
      <path
        d="M35,8.790697674418572L36.94444444444444,10.046511627906993L38.888888888888886,11.302325581395339L40.83333333333333,10.883720930232558L42.77777777777778,10.465116279069774L44.722222222222214,12.55813953488376L46.666666666666664,10.465116279069774L48.611111111111114,10.465116279069774L50.55555555555556,10.465116279069774L52.5,11.302325581395339L54.44444444444444,12.139534883720904L56.388888888888886,11.720930232558121"
        class="current-day"
        stroke-linejoin="round"></path>
    </svg>`,
    },
    {
        name: "GOOG",
        fullName: "Alphabet Inc.",
        priceDelta: 2.07,
        yesterdayIncrease: true,
        svgChart: `<svg
      class="stock-chart-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 70 18">
      <path
        d="M0,0.8372093023255649L2,0L4,5.023255813953459L6,6.27906976744188L8,8.790697674418572L10,10.883720930232558L12,14.232558139534888L14,15.069767441860453L16,15.488372093023234L18,15.90697674418609L20,15.069767441860453L22,15.488372093023234L24,12.97674418604654L26,15.069767441860453L28,14.232558139534888L30,15.069767441860453L32,16.325581395348873L34,18"
        class="previous-day"
        stroke-linejoin="round"></path>
      <path
        d="M35,8.790697674418572L36.94444444444444,10.046511627906993L38.888888888888886,11.302325581395339L40.83333333333333,10.883720930232558L42.77777777777778,10.465116279069774L44.722222222222214,12.55813953488376L46.666666666666664,10.465116279069774L48.611111111111114,10.465116279069774L50.55555555555556,10.465116279069774L52.5,11.302325581395339L54.44444444444444,12.139534883720904L56.388888888888886,11.720930232558121"
        class="current-day"
        stroke-linejoin="round"></path>
    </svg>`,
    },
    {
        name: "MSFT",
        fullName: "Microsoft",
        priceDelta: 1.88,
        yesterdayIncrease: false,
        svgChart: `<svg
      class="stock-chart-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 70 18">
      <path
        d="M0,0.8372093023255649L2,0L4,5.023255813953459L6,6.27906976744188L8,8.790697674418572L10,10.883720930232558L12,14.232558139534888L14,15.069767441860453L16,15.488372093023234L18,15.90697674418609L20,15.069767441860453L22,15.488372093023234L24,12.97674418604654L26,15.069767441860453L28,14.232558139534888L30,15.069767441860453L32,16.325581395348873L34,18"
        class="previous-day"
        stroke-linejoin="round"></path>
      <path
        d="M35,8.790697674418572L36.94444444444444,10.046511627906993L38.888888888888886,11.302325581395339L40.83333333333333,10.883720930232558L42.77777777777778,10.465116279069774L44.722222222222214,12.55813953488376L46.666666666666664,10.465116279069774L48.611111111111114,10.465116279069774L50.55555555555556,10.465116279069774L52.5,11.302325581395339L54.44444444444444,12.139534883720904L56.388888888888886,11.720930232558121"
        class="current-day"
        stroke-linejoin="round"></path>
    </svg>`,
    },
    {
        name: "GOOG",
        fullName: "Alphabet Inc.",
        priceDelta: 2.07,
        yesterdayIncrease: true,
        svgChart: `<svg
      class="stock-chart-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 70 18">
      <path
        d="M0,0.8372093023255649L2,0L4,5.023255813953459L6,6.27906976744188L8,8.790697674418572L10,10.883720930232558L12,14.232558139534888L14,15.069767441860453L16,15.488372093023234L18,15.90697674418609L20,15.069767441860453L22,15.488372093023234L24,12.97674418604654L26,15.069767441860453L28,14.232558139534888L30,15.069767441860453L32,16.325581395348873L34,18"
        class="previous-day"
        stroke-linejoin="round"></path>
      <path
        d="M35,8.790697674418572L36.94444444444444,10.046511627906993L38.888888888888886,11.302325581395339L40.83333333333333,10.883720930232558L42.77777777777778,10.465116279069774L44.722222222222214,12.55813953488376L46.666666666666664,10.465116279069774L48.611111111111114,10.465116279069774L50.55555555555556,10.465116279069774L52.5,11.302325581395339L54.44444444444444,12.139534883720904L56.388888888888886,11.720930232558121"
        class="current-day"
        stroke-linejoin="round"></path>
    </svg>`,
    },
];

export default stockItems;