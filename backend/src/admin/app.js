

const config = {
  // Extend the translations
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "MyApp",

      "app.components.LeftMenu.navbrand.workplace": "Testing",

      "Auth.form.welcome.title": "Welcom to MyApp",

      "Auth.form.welcome.subtitle": "Login to your account",

      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preference changes will apply only to you.",

      "Auth.form.register.news.label": "Keep me updated",

      "Auth.form.register.subtitle": "Credentials are only used to authenticate in this app. All saved data will be stored in your database.",

      "HomePage.welcome.congrats.content": "You are logged in as the first administrator. To discover the powerful features provided by thi App,",

      "Settings.application.ee-or-ce": "aa",
      "Settings.application.ee.admin-seats.add-seats": "",

      "Settings.application.ee.admin-seats.at-limit-tooltip": "",
      "Settings.application.ee.admin-seats.count": "",
      "Settings.application.get-help": "",
      "Settings.application.link-pricing": "",
      "Settings.application.link-upgrade": "",
      "Settings.application.node-version": "",
      "Settings.application.strapi-version": "",
      "Settings.application.strapiVersion": "",
      "Settings.application.title": "Overview",




    },
  },
  locals:["am"],
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
