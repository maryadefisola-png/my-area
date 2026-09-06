// Shared nearby-location helpers for MY AREA pages.
window.MYAREA_NEARBY={
  distanceKm:function(lat1,lng1,lat2,lng2){const r=6371,dLat=(lat2-lat1)*Math.PI/180,dLng=(lng2-lng1)*Math.PI/180,a=Math.sin(dLat/2)**2+Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLng/2)**2;return r*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));},
  formatDistance:function(km){return km<1?Math.round(km*1000)+' m':km.toFixed(1)+' km'},
  getLocation:function(){try{return JSON.parse(localStorage.getItem('areaLocation')||'null')}catch(e){return null}}
};