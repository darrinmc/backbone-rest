var app = app || {};

$(function() {
    var LibraryRouter = Backbone.Router.extend({
        routes: {
            "about": "showAbout"
        },

        showAbout: function() {
            alert("About this application");
        }
    });

    $('#releaseDate').datepicker();
    new app.LibraryView(books);
    app.router = new LibraryRouter();
    Backbone.history.start();
});

