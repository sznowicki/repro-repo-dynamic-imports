# Repro repo for dynamic imports parcel bug

## Parcel fail on prod when using url: import
### Background

We've seen this error before, but we've made some workaround and forgot about it.

Now I decided to finally get into it and produce a small repro repo and I'm happy to say I did it!

It's been spotted on our design system monorepo, which is pretty big. This is why I've spent literally 4 working day on
finding out what is causing the production build to fail exactly.

### 
1. cd docs/
2. yarn install
3. yarn dev -> Works fine
4. yarn build -> yarn serve -> open https://localhost:8080 - you'll notice "missing module" in the console
5. Change .parcelrc bundler to experimental
6. yarn build -> yarn serve -> works fine!


