document.addEventListener("DOMContentLoaded", function(){
  var handles = document.getElementsByClassName('grabber');
  for(var i=0;i<handles.length;i++){
    handles[i].addEventListener("mousedown", function(e){
      e = e || window.event;
      e.preventDefault();

      var dragStartY = e.clientY;
      var gResizeble = this.getElementsByTagName('textarea')[0];
	
	  document.onmouseup = function(e){
		  e.preventDefault();
		  document.onmouseup = document.onmousemove = gResizeble = null;
	  };
      document.onmousemove = function(e){
		  e = e || window.event;
		  e.preventDefault();
		  gResizeble.style.height = (gResizeble.offsetHeight + (e.clientY-dragStartY)) + "px";
		  dragStartY = e.clientY;
		}
    });

    handles[i].getElementsByTagName('textarea')[0].addEventListener("mousedown", function(event){event.stopPropagation();});
  }
});