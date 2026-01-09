  document.addEventListener("DOMContentLoaded",function(){handleSmileActivity()});
  function handleSmileActivity(){window.SmileUI?createSmileActivity():document.addEventListener("smile-ui-loaded",createSmileActivity)}
  function createSmileActivity(){Smile.createActivity({token:"activity_b7j1qT8LV7feNUN192V7elAu"}).then(function(activity){}).catch(function(err){})}