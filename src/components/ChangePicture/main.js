import works from './data';


export default {
  name: 'changePicture',
  props: {
    msg: String,
  },
  data() {
    return {
      nowIndex: 0,
      works,
      span: 930,
    };
  },
  computed: {
    computedLeft() {
      const result = {
        left: `${-this.nowIndex * this.span}px`,
      };
      return result;
    },
  },
  methods: {
    delta(d) {
      this.nowIndex = (this.nowIndex + d + this.works.length) % this.works.length;
    },
    bgCSS(url) {
      return {
        'background-image': `url(${url})`,
      };
    },
  },
};
