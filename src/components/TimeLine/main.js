export default {
  name: 'timeLine',
  props: {
    msg: String,
  },
  data() {
    return {
      logs: [],
    };
  },
  methods: {
    initial() {
      this.logs = [];
      this.logs = [
        {
          year: 2014,
          content: [
            {
              month: 9,
              tag: '在緣圈相遇',
            }, {
              month: 12,
              tag: '聖誕傳情',
            },
          ],
        }, {
          year: 2015,
          content: [
            {
              month: 2,
              tag: '第一次見面',
            }, {
              month: 7,
              tag: '第一次去虎尾',
            },
          ],
        }, {
          year: 2016,
          content: [
            {
              month: 9,
              tag: '開始同居',
            }, {
              month: 11,
              tag: '豐兒當兵',
            },
          ],
        }, {
          year: 2017,
          content: [
            {
              month: 6,
              tag: '庭兒先回北部等豐兒',
            },
          ],
        }, {
          year: 2018,
          content: [
            {
              month: 4,
              tag: '庭兒決定跟隨豐兒的腳步，擔任前端工程師',
            },
          ],
        },
      ];
    },
  },
};
