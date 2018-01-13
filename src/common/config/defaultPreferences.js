/**
 * Default user preferences. End-users can change these parameters by editing config.json
 * @param {number} version - Scheme version. (Not application version)
 */
const defaultPreferences = {
  version: 1,
  teams: [],
  showTrayIcon: true,
  trayIconTheme: 'light',
  minimizeToTray: true,
  notifications: {
    flashWindow: 0,
    bounceIcon: true,
    bounceIconType: 'informational'
  },
  showUnreadBadge: false,
  useSpellChecker: false,
  spellCheckerLocale: 'en-US'
};

module.exports = defaultPreferences;
