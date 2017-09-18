<template>
	<section class="container">
    	<div id="viewDiv"></div>
 	</section>
</template>
<script>
import * as esriLoader from 'esri-loader'
	export default{
		mounted() {
	     if (!esriLoader.isLoaded()) {
	       esriLoader.bootstrap((err) => {
	         if (err) {
	           console.error(err)
	         }
	         this.createMap()
	       }, {
	         url: 'https://js.arcgis.com/4.4/'
	       })
	     } else {
	       this.createMap()
	     }
	   },
	   methods: {
	   		createMap: function () {
	   			esriLoader.dojoRequire([
	   				'esri/WebMap',
         			'esri/views/MapView'
	   				],(WebMap, MapView) => {
			   			var webmap = new WebMap({
				            portalItem: { // autocasts as new PortalItem()
				              id: "effddc6863f64f92a38b850e567d1fcb"
				            }
				          });
			   			var view = new MapView({
			   				container: 'viewDiv',
				        	center: [113.75, 23.04],
				        	zoom: 15,
				        	locale: 'zh-cn',
				        	map:webmap
			   			}) ;
	   				})
	   		}
		}
	}
</script>
<style scoped>
@import url('https://js.arcgis.com/4.4/esri/css/main.css');

#viewDiv {
  height:  1000px;
  width:  100%;
}
</style>