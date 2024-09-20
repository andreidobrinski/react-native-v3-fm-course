# Notes

Link to [course repo](https://github.com/kadikraman/react-native-v3-course-app)
Link to [course site](https://kadikraman.github.io/react-native-v3-course/)

Opening your app to local tunnel

- run the start command with `--tunnel` to allow the bundle to be tested on any device (not just with Expo Go)

Add linting and prettier

- `npx expo lint`
- `npm i -D prettier eslint-config-prettier eslint-plugin-prettier`
- add the following code to eslintrc.js

```js
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
```
