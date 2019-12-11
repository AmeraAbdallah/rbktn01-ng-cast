angular.module('video-player')

.component('videoPlayer', {
  templateUrl:'src/templates/videoPlayer.html',
  bindings: {
    currentVideo: '='
  }, 
  controller: ($scope) => {
    this.id = `https://www.youtube.com/embed/${$scope.$parent.$ctrl.currentVideo.id.videoId}`
    console.log($scope.$parent.$ctrl.currentVideo)
  },
});
