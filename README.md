# danger-ts

An npx-able mix of Danger and TypeScript, so you can trivially use Danger JS with a TS Dangerfile without having Danger in your dependency tree.  

```sh
echo 'import {markdown} from "danger"; markdown("Hi!");" > dangerfile.ts

npx danger-ts
```

### Why Use This?

Most of the time, you don't need to. You could be using Danger in a TS project, at that point though you'll want to include the Danger dep for the Types. 

Cases where you might not though:

- You're running CI on webhooks which aren't worth doing a full `yarn install` on. 
- You add the `dangerfile.ts` to your `exclude` in the project's `tsconfig.json`.

In those cases you can use `npx danger-ts` which acts as a proxy for `yarn danger ci`.

e.g.

```yml
name: CI
on: pull_request

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1
      - uses: actions/setup-node@v1

      - name: "Use npx to run the dangerfile"
        run: "npx danger-ts"
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
