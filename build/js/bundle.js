function navegacionFija(){const e=document.querySelector(".header");new IntersectionObserver((function(n){n[0].isIntersecting?e.classList.remove("fijo"):e.classList.add("fijo")})).observe(document.querySelector(".contenido-video"))}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let n=1;n<=12;n++){const t=document.createElement("IMG");t.src=`build/img/thumb/${n}.webp`,t.dataset.imagenId=n,t.onclick=mostrarImagen;const c=document.createElement("LI");c.appendChild(t),e.appendChild(c)}}function mostrarImagen(e){const n=parseInt(e.target.dataset.imagenId),t=document.createElement("IMG");t.src=`build/img/grande/${n}.webp`;const c=document.createElement("DIV");c.appendChild(t),c.classList.add("overlay"),c.onclick=function(){c.remove()};const o=document.createElement("P");o.textContent="X",o.classList.add("btn-cerrar"),o.onclick=function(){c.remove()},c.appendChild(o);const a=document.querySelector("body");a.appendChild(c),a.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){navegacionFija()})),document.addEventListener("DOMContentLoaded",(function(){crearGaleria()}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImdhbGVyaWEuanMiXSwibmFtZXMiOlsibmF2ZWdhY2lvbkZpamEiLCJiYXJyYSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwib2JzZXJ2ZSIsImNyZWFyR2FsZXJpYSIsImdhbGVyaWEiLCJpIiwiaW1hZ2VuIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImRhdGFzZXQiLCJpbWFnZW5JZCIsIm9uY2xpY2siLCJtb3N0cmFySW1hZ2VuIiwibGlzdGEiLCJhcHBlbmRDaGlsZCIsImUiLCJpZCIsInBhcnNlSW50IiwidGFyZ2V0Iiwib3ZlcmxheSIsImNlcnJhckltZyIsInRleHRDb250ZW50IiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiJBQUlBLFNBQUFBLGlCQUNBLE1BQUFDLEVBQUFDLFNBQUFDLGNBQUEsV0FHQSxJQUFBQyxzQkFBQSxTQUFBQyxHQUVBQSxFQUFBLEdBQUFDLGVBRUFMLEVBQUFNLFVBQUFDLE9BQUEsUUFJQVAsRUFBQU0sVUFBQUUsSUFBQSxXQUlBQyxRQUFBUixTQUFBQyxjQUFBLHFCQ2hCQSxTQUFBUSxlQUNBLE1BQUFDLEVBQUFWLFNBQUFDLGNBQUEscUJBRUEsSUFBQSxJQUFBVSxFQUFBLEVBQUFBLEdBQUEsR0FBQUEsSUFBQSxDQUNBLE1BQUFDLEVBQUFaLFNBQUFhLGNBQUEsT0FFQUQsRUFBQUUsSUFBQSxtQkFBQUgsU0FHQUMsRUFBQUcsUUFBQUMsU0FBQUwsRUFHQUMsRUFBQUssUUFBQUMsY0FFQSxNQUFBQyxFQUFBbkIsU0FBQWEsY0FBQSxNQUNBTSxFQUFBQyxZQUFBUixHQUVBRixFQUFBVSxZQUFBRCxJQUlBLFNBQUFELGNBQUFHLEdBR0EsTUFBQUMsRUFBQUMsU0FBQUYsRUFBQUcsT0FBQVQsUUFBQUMsVUFFQUosRUFBQVosU0FBQWEsY0FBQSxPQUNBRCxFQUFBRSxJQUFBLG9CQUFBUSxTQUVBLE1BQUFHLEVBQUF6QixTQUFBYSxjQUFBLE9BQ0FZLEVBQUFMLFlBQUFSLEdBQ0FhLEVBQUFwQixVQUFBRSxJQUFBLFdBR0FrQixFQUFBUixRQUFBLFdBQ0FRLEVBQUFuQixVQUlBLE1BQUFvQixFQUFBMUIsU0FBQWEsY0FBQSxLQUNBYSxFQUFBQyxZQUFBLElBQ0FELEVBQUFyQixVQUFBRSxJQUFBLGNBR0FtQixFQUFBVCxRQUFBLFdBQ0FRLEVBQUFuQixVQUdBbUIsRUFBQUwsWUFBQU0sR0FHQSxNQUFBRSxFQUFBNUIsU0FBQUMsY0FBQSxRQUNBMkIsRUFBQVIsWUFBQUssR0FDQUcsRUFBQXZCLFVBQUFFLElBQUEsY0R6REFQLFNBQUE2QixpQkFBQSxvQkFBQSxXQUNBL0Isb0JDREFFLFNBQUE2QixpQkFBQSxvQkFBQSxXQUNBcEIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIG5hdmVnYWNpb25GaWphKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gbmF2ZWdhY2lvbkZpamEoKSB7XHJcbiAgY29uc3QgYmFycmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcclxuXHJcbiAgLy9SZWdpc3RyYXIgZWwgaW50ZXJjY2lvbiBvYnNlcnZlclxyXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChlbnRyaWVzKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlbnRyaWVzWzBdKTtcclxuICAgIGlmIChlbnRyaWVzWzBdLmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZWxlbWVudG8gdmlzaWJsZVwiKTtcclxuICAgICAgYmFycmEuY2xhc3NMaXN0LnJlbW92ZShcImZpam9cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImVsZW1lbnRvIG5vIHZpc2libGVcIik7XHJcblxyXG4gICAgICBiYXJyYS5jbGFzc0xpc3QuYWRkKFwiZmlqb1wiKTtcclxuICAgIH1cclxuICB9KTtcclxuICAvL0VsZW1lbnRvIGEgb2JzZXJ2YXJcclxuICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVuaWRvLXZpZGVvXCIpKTtcclxufVxyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgY3JlYXJHYWxlcmlhKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY3JlYXJHYWxlcmlhKCkge1xyXG4gIGNvbnN0IGdhbGVyaWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbGVyaWEtaW1hZ2VuZXNcIik7XHJcblxyXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcclxuICAgIGNvbnN0IGltYWdlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTUdcIik7XHJcblxyXG4gICAgaW1hZ2VuLnNyYyA9IGBidWlsZC9pbWcvdGh1bWIvJHtpfS53ZWJwYDtcclxuXHJcbiAgICAvL2NyZWEgdW4gYXRyaWJ1dG8gcGVyc29uYWxpemFkbyBhIGxhIGltYWdlblxyXG4gICAgaW1hZ2VuLmRhdGFzZXQuaW1hZ2VuSWQgPSBpO1xyXG5cclxuICAgIC8vQcOxYWRpciBsYSBmdW5jaW9uIGRlIG1vc3RyYXJJbWFnZW5cclxuICAgIGltYWdlbi5vbmNsaWNrID0gbW9zdHJhckltYWdlbjtcclxuXHJcbiAgICBjb25zdCBsaXN0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMSVwiKTtcclxuICAgIGxpc3RhLmFwcGVuZENoaWxkKGltYWdlbik7XHJcblxyXG4gICAgZ2FsZXJpYS5hcHBlbmRDaGlsZChsaXN0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb3N0cmFySW1hZ2VuKGUpIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmRhdGFzZXQuaW1hZ2VuSWQpO1xyXG5cclxuICBjb25zdCBpZCA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuaW1hZ2VuSWQpO1xyXG5cclxuICBjb25zdCBpbWFnZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU1HXCIpO1xyXG4gIGltYWdlbi5zcmMgPSBgYnVpbGQvaW1nL2dyYW5kZS8ke2lkfS53ZWJwYDtcclxuXHJcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgb3ZlcmxheS5hcHBlbmRDaGlsZChpbWFnZW4pO1xyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlcIik7XHJcblxyXG4gIC8vQ3VhbmRvIHNlIGRhIGNsaWNrIGNlcnJhciBsYSBpbWFnZW5cclxuICBvdmVybGF5Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBvdmVybGF5LnJlbW92ZSgpO1xyXG4gIH07XHJcblxyXG4gIC8vQm90b24gcGFyYSBjZXJyYXIgbGEgaW1hZ2VuXHJcbiAgY29uc3QgY2VycmFySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlBcIik7XHJcbiAgY2VycmFySW1nLnRleHRDb250ZW50ID0gXCJYXCI7XHJcbiAgY2VycmFySW1nLmNsYXNzTGlzdC5hZGQoXCJidG4tY2VycmFyXCIpO1xyXG5cclxuICAvL0N1YW5kbyBzZSBwcmVzaW9uYSBjaWVycmEgbGEgaW1hZ2VuXHJcbiAgY2VycmFySW1nLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBvdmVybGF5LnJlbW92ZSgpO1xyXG4gIH07XHJcblxyXG4gIG92ZXJsYXkuYXBwZW5kQ2hpbGQoY2VycmFySW1nKTtcclxuXHJcbiAgLy9tb3N0cmFyIGVuIGVsIGh0bWxcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcclxuICBib2R5LmNsYXNzTGlzdC5hZGQoXCJmaWphci1ib2R5XCIpO1xyXG59XHJcbiJdfQ==
