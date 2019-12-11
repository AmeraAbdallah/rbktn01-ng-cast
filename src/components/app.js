angular.module('video-player')

.component('app', {
  controller: function () {
    this.selectVideo = (video) => {this.currentVideo = video};
    this.searchResults = () => {console.log('ss')};
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    this.test = (video) => {
      console.log(video)
    }
  },
  templateUrl: 'src/templates/app.html'
});
