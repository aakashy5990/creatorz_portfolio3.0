// function loadComponent(url, elementId) {
//   fetch(url)
//   .then(response => {
//       if (!response.ok) {
//           throw new Error(`Failed to load ${url}: ${response.statusText}`);
//       }
//       return response.text();
//   })
//   .then(data => {
//       document.getElementById(elementId).innerHTML = data;
//   })
//   .catch(error => console.error('Error loading component:', error));
// }

// document.addEventListener('DOMContentLoaded', function() {
//   let basePath = '';

//   // if (window.location.pathname.includes('/contact/')) {
//   //     basePath = '../';
//   // }

//   if (window.location.pathname.includes('/service_html/brand/')) {
//       basePath = '../../';
//   }

//   // Load the navigation bar and footer components
//   loadComponent(basePath + 'component/navbar.html', 'navbar');
//   loadComponent(basePath + 'component/footer.html', 'footer');
// });



function loadComponent(url, elementId) {
  fetch(url)
  .then(response => {
      if (!response.ok) {
          throw new Error(`Failed to load ${url}: ${response.statusText}`);
      }
      return response.text();
  })
  .then(data => {
      document.getElementById(elementId).innerHTML = data;

      // Adjust image path in the navbar after loading it
      if (elementId === 'navbar') {
          adjustNavbarImagePath();
      }
  })
  .catch(error => console.error('Error loading component:', error));
}

function adjustNavbarImagePath() {
  let basePath = '';

  // Check if the current page is inside the "contact" folder
  if (window.location.pathname.includes('/service_html/brand/')) {
      basePath = '../../';
  }
  if (window.location.pathname.includes('/service_html/brochure&catalouge/')) {
      basePath = '../../';
  }
  if (window.location.pathname.includes('/service_html/manipulation/')) {
      basePath = '../../';
  }
  if (window.location.pathname.includes('/service_html/productVisualization/')) {
      basePath = '../../';
  }
  if (window.location.pathname.includes('/service_html/social/')) {
      basePath = '../../';
  }

  // Modify the image source to account for the current directory
  const logoImg = document.getElementById('logo');
  if (logoImg) {
      logoImg.src = basePath + 'img/333.png';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  let basePath = '';

  if (window.location.pathname.includes('/service_html/brand/')) {
    basePath = '../../';
  }
  if (window.location.pathname.includes('/service_html/brochure&catalouge/')) {
    basePath = '../../';
  }
  if (window.location.pathname.includes('/service_html/manipulation/')) {
    basePath = '../../';
  }
  if (window.location.pathname.includes('/service_html/productVisualization/')) {
    basePath = '../../';
  }
  if (window.location.pathname.includes('/service_html/social/')) {
    basePath = '../../';
  }

  // Load the navigation bar and footer components
  loadComponent(basePath + 'component/navbar.html', 'navbar');
  loadComponent(basePath + 'component/footer.html', 'footer');
});
