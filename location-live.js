// MY AREA live-location foundation. Loaded by location.html when needed.
(function(){
  const key='areaLocation';
  window.areaLocation={
    getCurrent:function(onSuccess,onError){
      if(!navigator.geolocation){(onError||function(){})('Location is not supported on this device.');return;}
      navigator.geolocation.getCurrentPosition(function(pos){
        const value={lat:pos.coords.latitude,lng:pos.coords.longitude,accuracy:pos.coords.accuracy,updatedAt:new Date().toISOString()};
        localStorage.setItem(key,JSON.stringify(value));
        (onSuccess||function(){})(value);
      },function(err){(onError||function(){})(err.message||'Location permission was denied.');},{enableHighAccuracy:true,timeout:15000,maximumAge:30000});
    },
    watch:function(onUpdate,onError){
      if(!navigator.geolocation){(onError||function(){})('Location is not supported on this device.');return null;}
      return navigator.geolocation.watchPosition(function(pos){
        const value={lat:pos.coords.latitude,lng:pos.coords.longitude,accuracy:pos.coords.accuracy,updatedAt:new Date().toISOString()};
        localStorage.setItem(key,JSON.stringify(value));
        (onUpdate||function(){})(value);
      },onError,{enableHighAccuracy:true,timeout:15000,maximumAge:10000});
    },
    getSaved:function(){try{return JSON.parse(localStorage.getItem(key)||'null')}catch(e){return null}}
  };
})();