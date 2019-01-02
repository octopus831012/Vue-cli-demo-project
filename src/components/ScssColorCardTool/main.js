export default {
  name: 'ScssColorCardTool',
  props: {
    msg: String,
  },
  data() {
    return {
      colorSetting: 'color_pink: #ffd9ec\ncolor_purple: #dcb5ff\ncolor_red: #ffb5b5\ncolor_blue: #aaaaff\ncolor_green: #93ff93',
    };
  },
  computed: {
    colorCards() {
      const result = [];
      const cutString = this.colorSetting.split('\n');
      for (let i = 0; i < cutString.length; i += 1) {
        const name = cutString[i].split(':')[0];
        const color = cutString[i].split(' ')[1];

        result.push({
          name,
          color,
          colorCSS: {
            'background-color': color,
          },
        });
      }
      return result;
    },
  },
};
