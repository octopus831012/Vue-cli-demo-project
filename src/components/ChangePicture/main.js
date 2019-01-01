const works = [
  {
    title: '童年',
    description: '回不去的時光',
    cover: 'https://picsum.photos/800/600?image=820',
  },
  {
    title: '陽光',
    description: '永遠要往光明的地方看',
    cover: 'https://picsum.photos/800/600?image=815',
  },
  {
    title: 'Take a nap',
    description: '休息是為了走更長遠的路',
    cover: 'https://picsum.photos/800/600?image=804',
  },
  {
    title: '青春',
    description: '青春是盛開的美麗花朵',
    cover: 'https://picsum.photos/800/600?image=348',
  },
  {
    title: '風景',
    description: '站在高處，總是能看見不一樣的風景',
    cover: 'https://picsum.photos/800/600?image=773',
  },
  {
    title: '溫柔',
    description: '我很醜，可是我很溫柔',
    cover: 'https://picsum.photos/800/600?image=1062',
  },
  {
    title: '避風港',
    description: '家是最溫暖的避風港',
    cover: 'https://picsum.photos/800/600?image=870',
  },
];

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
      this.nowIndex = `${this.nowIndex}${d}${this.works.length % this.works.length}`;
    },
    bgCSS(url) {
      return {
        'background-image': `url(${url})`,
      };
    },
  },
};
