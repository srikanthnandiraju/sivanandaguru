var $$ = Dom7;
var app = new Framework7({
    touch: {
        fastClicks: true,
    },
    statusbar: {
        enable: false
    },
    dialog: {
        title: 'Moviestr'
    },
    view: {
        stackPages: true
    },
    root: "#app", // App root element
    id: "com.nandiraju.social", // App bundle ID
    name: "Social Login", // App name
    theme: "md", // Automatic theme detection
    routes: [{
        path: '/',
        componentUrl: './pages/landing.html',
        // componentUrl: './pages/home.html',
        name: 'landing',
        options: {
            transition: 'f7-push',
        }
    }, {
        path: '/namavali/',
        componentUrl: './pages/namavali.html',
        name: 'namavali',
        options: {
            transition: 'f7-push',
        }
    }, {
        path: '/mantra/',
        componentUrl: './pages/landing.html',
        name: 'mantra',
        options: {
            transition: 'f7-push',
        }
    }]
});
var mainView = app.views.create(".view-main", {
    url: "/"
});

Framework7.request.setup({
    // headers: {
    //     'Ocp-Apim-Subscription-Key': '6456ac8bbfb54cdf9a23208b64b1612a'
    // }
});

function loadScreen(path) {
    mainView.router.navigate(path);
}

function goBack() {
    mainView.router.back();
}

function showToast(message, position) {
    if (!position) position = "top";
    var toastCenter = app.toast.create({
        text: message,
        position: "bottom",
        closeTimeout: 2000
    });
    toastCenter.open();
}