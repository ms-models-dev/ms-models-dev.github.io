var $ = Dom7;

var device = Framework7.getDevice();
var app = new Framework7({
  name: 'Male Specimen Models', // App name
  theme: 'auto', // Automatic theme detection
  colors: {
    primary: '#ceaa42',
  },
  darkMode: true,
  el: '#app', // App root element

  // App store
  store: store,
  // App routes
  routes: routes,
  // Register service worker
  serviceWorker: {
    path: '/service-worker.js',
  },


  // Input settings
  input: {
    scrollIntoViewOnFocus: device.cordova,
    scrollIntoViewCentered: device.cordova,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
    },
  },
});
// Login Screen Demo
$('#my-login-screen .login-button').on('click', function () {
  var username = $('#my-login-screen [name="username"]').val();
  var password = $('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br/>Password: ' + password);
});

////////////////////////////////
  document.getElementById('themeToggle').addEventListener('change', function (e) {
    if (e.target.checked) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      document.getElementById('themeLabel').innerText = 'Dark Mode';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      document.getElementById('themeLabel').innerText = 'Light Mode';
    }
  });
var userBalance = 1222; // Replace this with your actual balance check

if (userBalance > 0) {
  document.getElementById('has-balance').style.display = 'block';
} else {
  document.getElementById('no-balance').style.display = 'block';
}

document.addEventListener('page:init', function (e) {
    var ctx = document.getElementById('myLineChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'JUne'],
        datasets: [{
          label: 'Earnings',
          data: [500, 700, 400, 800, 650, 650],
          backgroundColor: 'rgba(206, 170, 66, 0.2)',
          borderColor: '#ceaa42',
          borderWidth: 2,
          fill: true,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });